#!/usr/bin/env node
/* Dev-only check: the main product photo (p.img) must lead every gallery.
   Flags products where p.img is a "-2" file, p.img is repeated in p.imgs,
   or p.img is missing on disk. Exits 1 if anything is flagged.
   Usage: node scripts/check-gallery-order.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..', 'holiday');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'holiday-data.js'), 'utf8') +
  '\n;this.HOLIDAY_PRODUCTS = HOLIDAY_PRODUCTS;', ctx);
let bad = 0;
for (const p of ctx.HOLIDAY_PRODUCTS) {
  const flag = m => { bad++; console.log(`${p.id}: ${m}`); };
  if (!p.img) { flag('no p.img'); continue; }
  const base = p.img.split('?')[0];
  if (/-2\.[a-z]+$/i.test(base)) flag(`p.img is a -2 file (${p.img})`);
  if ((p.imgs || []).some(u => u.split('?')[0] === base)) flag(`p.img also appears in p.imgs (${p.img})`);
  if (!/^https?:/.test(base) && !fs.existsSync(path.join(ROOT, base))) flag(`p.img missing on disk (${p.img})`);
}
console.log(`Checked ${ctx.HOLIDAY_PRODUCTS.length} products: ${bad} problem${bad === 1 ? '' : 's'}.`);
process.exit(bad ? 1 : 0);
