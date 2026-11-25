#!/usr/bin/env node
/* Dev-only check (not loaded by the site): flags any Holiday product whose
   popup gallery (img + imgs + variants[].img) contains two visually
   identical images, using a 16x16 average hash.

   Needs `sharp` (not a repo dependency):
     npm i --no-save sharp && node scripts/check-gallery-dupes.js
   or point NODE_PATH at any folder where sharp is installed.

   Exits 1 if duplicates are found. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..', 'holiday');
const MAX_DIST = 2; // Hamming distance (of 256 bits) treated as "identical"

const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'holiday-data.js'), 'utf8') +
  '\n;this.HOLIDAY_PRODUCTS = HOLIDAY_PRODUCTS;', ctx);

async function aHash(file) {
  const px = await sharp(file).flatten({ background: '#fff' }).greyscale()
    .resize(16, 16, { fit: 'fill' }).raw().toBuffer();
  const avg = px.reduce((a, b) => a + b, 0) / px.length;
  return Array.from(px, v => (v >= avg ? 1 : 0));
}
const dist = (a, b) => a.reduce((n, bit, i) => n + (bit !== b[i]), 0);

(async () => {
  let dupes = 0, checked = 0;
  for (const p of ctx.HOLIDAY_PRODUCTS) {
    const urls = [];
    [p.img, ...(p.imgs || []), ...(p.variants || []).map(v => v.img)]
      .forEach(u => { if (u && !urls.includes(u)) urls.push(u); });
    const local = urls.filter(u => !/^https?:/.test(u));
    if (local.length < 2) continue;
    checked++;
    const hashes = [];
    for (const u of local) {
      const f = path.join(ROOT, u);
      if (!fs.existsSync(f)) { console.log(`${p.id}: MISSING ${u}`); dupes++; continue; }
      hashes.push([u, await aHash(f)]);
    }
    for (let i = 0; i < hashes.length; i++)
      for (let j = i + 1; j < hashes.length; j++) {
        const d = dist(hashes[i][1], hashes[j][1]);
        if (d <= MAX_DIST) { dupes++; console.log(`${p.id}: ${hashes[i][0]} == ${hashes[j][0]} (distance ${d})`); }
      }
  }
  console.log(`Checked ${checked} multi-image products: ${dupes} duplicate${dupes === 1 ? '' : 's'}.`);
  process.exit(dupes ? 1 : 0);
})();
