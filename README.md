# festive.companystore.io — Diwali + Holiday Gifting 2026 (preview copy)

Copy of `csai-svg/festive.companystore.io` extended with the Holiday Gifting 2026 catalogue from the Figma file "CS Store" (frames: Landing Page V1, Homepage, Theme Page, Banner Image 01/2).

## Structure
- `/` chooser page: Diwali panel and Holiday panel.
- `/diwali/` the existing festive landing + catalogue, unchanged except the webhook is disabled.
- `/holiday/` the new Holiday Gifting landing + catalogue (Figma look). Data and images live in `holiday/`.

## What changed in /holiday/
- **Landing page** (`holiday/index.html`): Christmas hero, "Good Things Are in Store! / The Year End Edit" copy, lead form, two exits:
  - **CompanyStore Catalogs ⌄** → links to the Diwali Collection (`/diwali/`) and back to the chooser.
  - **Holiday Catalog ›** → Holiday Gifting 2026.
- **Goodies That Get Noticed** carousel under the stats band. Slides are data-driven (see below), unlimited count, autoplay, arrows, dots, swipe.
- **Holiday catalogue**: Christmas banner, "Curate Your Kit" hero, tabs *Select Your Gifts · Price Tiers · Themes · Top Rated*. **Themes** lists the 8 kits from the Theme Page; "Add to box" adds the whole kit.
- "All catalogues" in the top bar returns to the chooser.
- **Lead webhook disabled** (`CONFIG.endpoint = ""`). Form submits and quote requests only log to the browser console. Re-enable in production by restoring the Cloudflare Worker URL.

## Editing content — `holiday/holiday-data.js`
| Constant | Purpose |
|---|---|
| `GOODIES_SLIDES` | Carousel slides. `{bg, product}` where `product` is a `HOLIDAY_PRODUCTS` id, or explicit `{bg, img, title, desc, price, moq, cat}`. Add as many as needed. |
| `HOLIDAY_KITS` | Themes tab. `{name, img, items:[product ids]}`. Kit price = sum of item prices. |
| `HOLIDAY_PRODUCTS` | Snapshot of sheet "Holiday Gifting Storelink Format" → Main Sheet (138 unique products; size rows merged). Price = "Discounted Price"; strike-through MRP not shown. Vendor/internal columns excluded. |

Images: `holiday/assets/holiday/` (compressed copies of Renu's Drive folder "Final_Holiday Gifting Product Image"; products named `pNNN.jpg` by row order). Products without a designed image fall back to the store.link photo.

## Known gaps (need team input)
- Figma Theme Page reuses the "Travel Kit" name/text on two cards and gives Camping Kit the wrong item list. Here: card 5 is named **Slow Living Kit** (book, Sakura art kit, IRIS candle, Haworthia); Camping Kit items were matched to its photo. Rename in `HOLIDAY_KITS`.
- Figma prices on kits (₹3,900 placeholders) replaced with computed sums.
- "Lavender Lane Gratitude Journal" has no image; "Pen-Sketch Portraits" has no price (shows "On request").
- Catalogue is a bundled snapshot; it does not read the Google Sheet live (that sheet contains vendor costs and must not be public).
