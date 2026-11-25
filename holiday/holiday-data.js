/* =====================================================================
   HOLIDAY GIFTING 2026 — data file (edit this file, not index.html)
   ---------------------------------------------------------------------
   GOODIES_SLIDES  : "Goodies That Get Noticed" carousel on the landing page.
                     Add as many slides as you like. Each slide needs a
                     background image (bg) and "spots": the clickable
                     points on that image (x, y in % of the image) and the
                     HOLIDAY_PRODUCTS id each one opens in the left card.
                     The first spot is shown by default (or set "product").
                     Optional "name" = kit name used by "Add full kit to box"
                     (default "Holiday Goodies 1", "Holiday Goodies 2", ...).
   HOLIDAY_KITS    : "Themes" tab. items = product ids from HOLIDAY_PRODUCTS.
                     The kit price shown is the sum of its item prices.
   HOLIDAY_PRODUCTS: imgs = extra gallery angles; pod = Price on Demand; variants = colour
                     options [{name,img}]; top10 = Top 10 Picks rank.
                     Snapshot of the "Holiday Gifting Storelink Format"
                     sheet (Main Sheet), selling price = "Discounted Price".
                     Vendor costs and internal columns are deliberately
                     NOT included.
   ===================================================================== */
const GOODIES_SLIDES = [
 {
  "bg": "assets/holiday/goodies-1.jpg",
  "spots": [
   {"x": 44.5, "y": 64.3, "product": "h078"},
   {"x": 61.1, "y": 55.5, "product": "h033"},
   {"x": 75.4, "y": 25.1, "product": "h018"},
   {"x": 64.6, "y": 77.4, "product": "h000"},
   {"x": 84.4, "y": 69.8, "product": "h057"}
  ]
 },
 {
  "bg": "assets/holiday/goodies-2.jpg",
  "spots": [
   {"x": 75.4, "y": 25.1, "product": "h083"},
   {"x": 61.1, "y": 55.5, "product": "h088"},
   {"x": 44.5, "y": 64.3, "product": "h088"},
   {"x": 64.6, "y": 77.4, "product": "h102"},
   {"x": 84.4, "y": 69.8, "product": "h107"},
   {"x": 95.6, "y": 62.1, "product": "h107"},
   {"x": 85.7, "y": 93.3, "product": "h121"}
  ]
 }
];

const HOLIDAY_KITS = [
 {
  "name": "The Holiday Kit",
  "img": "assets/holiday/kit-1.jpg",
  "items": [
   "h134",
   "h069",
   "h001",
   "h090"
  ]
 },
 {
  "name": "The Travel Kit",
  "img": "assets/holiday/kit-2.jpg",
  "items": [
   "h024",
   "h005",
   "h102",
   "h089"
  ]
 },
 {
  "name": "Movie Night Kit",
  "img": "assets/holiday/kit-3.jpg",
  "items": [
   "h000",
   "h093",
   "h104",
   "h113"
  ]
 },
 {
  "name": "Camping Kit",
  "img": "assets/holiday/kit-4.jpg",
   "items": [
   "h088",
   "h011",
   "h031",
   "h073"
  ]
 },
 {
  "name": "Wellness Kit",
  "img": "assets/holiday/kit-5.jpg",
  "items": [
   "h124",
   "h086",
   "h041",
   "h108"
  ]
 },
 {
  "name": "Home Chef Kit",
  "img": "assets/holiday/kit-6.jpg",
  "items": [
   "h100",
   "h045",
   "h016",
   "h083"
  ]
 },
 {
  "name": "Game Night Kit",
  "img": "assets/holiday/kit-7.jpg",
  "items": [
   "h114",
   "h116",
   "h105",
   "h111"
  ]
 },
 {
  "name": "Road Trip Kit",
  "img": "assets/holiday/kit-8.jpg",
  "items": [
   "h004",
   "h018",
   "h011",
   "h078"
  ]
 }
];

/* imgs must be genuinely different photos (run scripts/check-gallery-dupes.js after adding any).
   pod: true = no vendor sourcing price yet. Price shows as "Price on Demand"; set price + remove pod once sourced. */
const HOLIDAY_PRODUCTS = [
 {
  "id": "h000",
  "name": "travelXOXO Sherpa Blanket",
  "cat": "Home Essentials",
  "brand": "travelXOXO",
  "price": 3149.0,
  "mrp": 4749,
  "moq": 500,
  "desc": "Double-sided design with 280 GSM flannel fleece on one side and 220 GSM plush Sherpa on the other",
  "longDesc": "Brand: travelXOXO\n- Double-sided design with 280 GSM flannel fleece and 220 GSM plush Sherpa\n- Two textures in one: smooth on one side, fluffy on the other\n- Size: 50\" x 60\" unfolded; folds down to 14.5\" x 12.2\"\n- Cosy warmth for use at home, on travels and as a gift",
  "feats": [
   "Material: Flannel Fleece",
   "Colour: Black/White",
   "Lead time: ~45 days",
   "MOQ 500 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p000.jpg",
  "img2": "https://cdn.store.link/products/store18473/2orpdb-csun-0820.jpg?versionId=zlEuAFrlcud0qKP6aQDPKZjAYLKbvZJc",
  "tier": "Pinnacle",
  "top10": 3
 },
 {
  "id": "h001",
  "name": "travelXOXO Coral Fleece Blanket",
  "cat": "Home Essentials",
  "brand": "travelXOXO",
  "price": 2399.0,
  "mrp": 3749,
  "moq": 500,
  "desc": "Soft, lightweight warmth that feels cozy all year round",
  "longDesc": "Brand: travelXOXO\n\n- Soft, lightweight blanket offering cosy warmth all year round\n- Versatile for use at home, in the office or while travelling\n- Dimensions: 50\" x 60\" when unfolded\n- Folds down easily for convenient storage and carrying\n- A practical choice for everyday comfort and corporate gifting",
  "feats": [
   "Material: Polyester Micro fibres",
   "Colour: White",
   "Lead time: ~30 days",
   "MOQ 500 units"
  ],
  "img": "assets/holiday/p001.jpg",
  "img2": "https://cdn.store.link/products/store18473/cfmm72-csun-0307.png?versionId=puQleHMLW8cTudJQNTng1zZB7fej.FPB",
  "tier": "Supreme"
 },
 {
  "id": "h002",
  "name": "Novel Duffle Bag Charm",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 299.0,
  "mrp": 549,
  "moq": 25,
  "desc": "Miniature, classic duffle bag charm designed to add a pop of personality while storing tiny essentials.",
  "longDesc": "Brand: travelXOXO\n\n- Miniature classic duffle bag charm that adds a pop of personality while storing tiny essentials.\n- Sturdy metal keyring with clip attaches easily to bags, keys or carabiners.\n- Made from 100% recycled 600D polyester (excluding trims) with smooth webbing details.\n- Secure zippered closure keeps small items safe on the move.",
  "feats": [
   "Material: Polyester",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p002.jpg",
  "imgs": [
   "assets/holiday/p002-2.jpg"
  ],
  "img2": "https://cdn.store.link/products/store18473/uv-q55-novel%20duffle%20bag%20charm%20b.png?versionId=eb7PICUcBLwzCdDncAWVRD.XZIIsPUxA",
  "tier": "Signature"
 },
 {
  "id": "h003",
  "name": "travelXOXO Charm - Tote Bag",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 249.0,
  "mrp": 499,
  "moq": 25,
  "desc": "Miniature, classic tote bag charm designed to add a pop of personality while storing tiny essentials.",
  "longDesc": "Brand: travelXOXO\n\n- Miniature classic tote bag charm that stores tiny essentials in style.\n- Sturdy metal keyring with clip attaches to bags, keys or carabiners.\n- Made from 100% recycled 600D polyester (excluding trims) with webbing details.\n- Secure zippered closure; 2.76\" H x 3.15\" W x 1.18\" D, just 0.09 lbs.",
  "feats": [
   "Material: Polyester",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p003.jpg",
  "img2": "https://cdn.store.link/products/store18473/64q0wt-heritage%20tote%20bag%20charm1%20%281%29.png?versionId=UR9e2F3KRYl9fcgdbrIrPG3rFMH6bLzG",
  "tier": "Signature",
  "imgs": [
   "assets/holiday/p003-2.jpg"
  ]
 },
 {
  "id": "h004",
  "name": "travelXOXO Foldable Car Trunk Organiser",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 3149.0,
  "mrp": 5999,
  "moq": 25,
  "desc": "Spacious trunk organizer with multiple compartments for efficient storage and organization.",
  "longDesc": "Brand: travelXOXO\n\n- Spacious trunk organizer with multiple compartments and adjustable dividers.\n- Reinforced base panels, non-slip base and securing straps keep it stable.\n- Mesh and covered side pockets, detachable lid and foldable design.\n- Ideal for groceries, emergency kits, travel essentials and sports gear.\n- Suits cars and SUVs; a practical corporate gift.",
  "feats": [
   "Material: 100% Polyester",
   "Colour: Black",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p004.jpg",
  "imgs": [
   "assets/holiday/p004-2.jpg"
  ],
  "img2": "https://cdn.store.link/products/store18473/-ahjxk-whatsapp%20image%202026-07-24%20at%2016.36.23%20%281%29.jpeg?versionId=nvlBQzqEhAW___LrZTV870HTDUdZlgJW",
  "tier": "Pinnacle"
 },
 {
  "id": "h005",
  "name": "travelXOXO Travel Organiser",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 349.0,
  "mrp": 579,
  "moq": 50,
  "desc": "A multi-functional organizer for electronics or other items during travel",
  "longDesc": "Brand: travelXOXO\n\n- Multi-functional organizer for electronics and other essentials during travel\n- Three smaller zippered pockets neatly hold medicines, chargers, cords and accessories\n- Keeps cables tangle-free and everyday items easy to locate\n- Compact size: 8\" H x 0.7\" W x 9\" L\n- Slim, lightweight profile slips easily into any backpack or cabin bag",
  "feats": [
   "Material: polyester",
   "Colour: Dark Grey",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p005.jpg",
  "img2": "https://cdn.store.link/products/store18473/1lxc00-whatsapp%20image%202026-08-14%20at%203.57.47%20pm.jpeg?versionId=4bakP8vmOc3mu5VAE92NrFKEod5OebRm",
  "tier": "Signature"
 },
 {
  "id": "h006",
  "name": "travelXOXO Trio Clean Bags - Set of 3",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 299.0,
  "mrp": 629,
  "moq": 50,
  "desc": "Made from durable polyester with rip\u2011stop weave for long\u2011lasting use",
  "longDesc": "Brand:travelXOXO\n\n-Shoe, laundry and accessory bags enclosed in a zippered carrying bag\n-Made from durable polyester with rip-stop weave for long-lasting use\n-Colour-coded: blue laundry, green accessory, orange shoe, black carry bag\n-Compact size of each bag: 9\" H x 0.5\" W x 11.25\" L\n-Ideal for travel and long business trips",
  "feats": [
   "Material: Polyester",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p006.jpg",
  "img2": "https://cdn.store.link/products/store18473/hf-55f-csun-0157.jpg?versionId=hkH_tPp97m2E8zaIRp8.7eNJHJ_4SMbx",
  "tier": "Signature"
 },
 {
  "id": "h007",
  "name": "travelXOXO To Go Sling",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 299.0,
  "mrp": 629,
  "moq": 50,
  "desc": "Lightweight, everyday essential designed for effortless carrying",
  "longDesc": "Brand: travelXOXO\n\n- Lightweight, everyday tote designed for effortless carrying\n- Made from durable fabric for long-lasting, repeated use\n- Minimalist design offers ample space for daily essentials\n- Ideal for shopping, commuting or casual outings\n- Sleek silhouette that is easy to fold and store when not in use",
  "feats": [
   "Material: Polyester",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p007.jpg",
  "img2": "https://cdn.store.link/products/store18473/fqhcwd-csun-0225.jpg?versionId=8Il8WWw4jtYj3KMEMZx5uVpKNzTwD90G",
  "tier": "Signature"
 },
 {
  "id": "h008",
  "name": "travelXOXO Carry On Sling",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 699.0,
  "mrp": 1379,
  "moq": 50,
  "desc": "Made from 100% polyester outer material",
  "longDesc": "Brand:travelXOXO\n\n- Made from 100% polyester outer material, ideal for organizing valuables while travelling\n- Main and inner compartments with zip closures plus an additional external compartment\n- Extra pockets organize accessories; top opening allows quick and easy access\n- Adjustable, detachable shoulder strap for comfortable carrying\n- Dimensions: 6.75\" x 12.5\" x 3.25\"",
  "feats": [
   "Material: Polyester",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p008.jpg",
  "img2": "https://cdn.store.link/products/store18473/icwt10-csun-0177%20%281%29.jpg?versionId=cPlyvl5mxdyey.22DQDKOv.2bmUiz4Dl",
  "tier": "Signature"
 },
 {
  "id": "h009",
  "name": "SOIL Earthtone Canvas Pouch Set of 3",
  "cat": "Travel Extreme",
  "brand": "SOIL",
  "price": 549.0,
  "mrp": 1129,
  "moq": 25,
  "desc": "Storage zip pouches made from organic fabric",
  "longDesc": "Brand: SOIL\n\n- Set of 3 organic fabric zip pouches with secure zipper closures\n- Designed for multi-functional everyday use at home or while travelling\n- Ideal for medicines, jewellery, cosmetics, money, stationery and keys\n- Sizes: Large 16 x 23 cm, Medium 13.6 x 20.8 cm, Small 11.1 x 15.5 cm",
  "feats": [
   "Material: Cotton Canvas",
   "Colour: Natural",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p009.jpg",
  "img2": "https://cdn.store.link/products/store18473/qno1e6-csun-0338.jpg?versionId=cVi8.amxsq1YXYuB7LAs7xUfjInmNd00",
  "tier": "Signature"
 },
 {
  "id": "h010",
  "name": "SOIL Tag Along Wooden Luggage Tag",
  "cat": "Travel Extreme",
  "brand": "SOIL",
  "price": 299.0,
  "mrp": 759,
  "moq": 100,
  "desc": "Custom Bag Tags: Personalize with your details for easy luggage identification",
  "longDesc": "Brand: SOIL\n\n- Custom bag tags personalised with your details for easy luggage identification\n- Durable build crafted to withstand travel wear and tear\n- Perfect companion at airports, railway stations and bus depots\n- Sleek, lightweight size: 17.5 cm (H) x 5.5 cm (W) x 3 mm",
  "feats": [
   "Material: Wood",
   "Colour: Custom Color",
   "Lead time: ~14 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p010.jpg",
  "img2": "https://cdn.store.link/products/store18473/chafd1-csun-0866.jpg?versionId=v5Pm.EVXSsv6QVeLcuiBbvthwxg.Bve8",
  "tier": "Signature"
 },
 {
  "id": "h011",
  "name": "travelXOXO Adventure Duffle Bag",
  "cat": "Duffles",
  "brand": "travelXOXO",
  "price": 749.0,
  "mrp": 1229,
  "moq": 25,
  "desc": "Water-resistant and lightweight design",
  "longDesc": "Brand: travel XOXO\n\n- Water-resistant, lightweight bag with a stylish roll-down top and secure clip closure\n- Can be carried three ways: by the clip, as a duffle or as a backpack\n- Versatile choice for the gym, travel, commuting and everyday use\n- Available in Red, Lime, Blue and Black colours\n- Packaging: Bulk",
  "feats": [
   "Material: Polyester",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p011.jpg",
  "img2": "https://cdn.store.link/products/store18473/ukhykr-csun-0265.jpg?versionId=Q3tUvF7QrR6R9DZsl7tJuFsFOhh0VxV3",
  "tier": "Signature"
 },
 {
  "id": "h012",
  "name": "travelXOXO Travel Blanket",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 1399.0,
  "mrp": 2499,
  "moq": 50,
  "desc": "Product: Large Picnic Outdoor Blanket",
  "longDesc": "Brand: travelXOXO\n\n- Large picnic and outdoor blanket built to withstand harsh weather conditions\n- Solid acrylic flap ensures a neat, tidy fold every time\n- Folds into itself and includes a convenient carry handle for easy portability\n- Generous surface comfortably seats family and friends\n- Ideal for picnics, camping, beach days and outdoor events",
  "feats": [
   "Material: Cotton",
   "Colour: Navy Blue",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p012.jpg",
  "img2": "https://cdn.store.link/products/store18473/tby5eo-csun-0851.jpg?versionId=cnIzG2vRVqInOeeOU.ZZHKJNIOvuvMIO",
  "tier": "Elite"
 },
 {
  "id": "h013",
  "name": "travelXOXO Hapuna Cinch Pack",
  "cat": "Totes & Slings",
  "brand": "travelXOXO",
  "price": 449.0,
  "mrp": 749,
  "moq": 25,
  "desc": "Soft-touch, compactible cinch bag designed to fully secure your possessions while on the go.",
  "longDesc": "Brand: travelXOXO\n\n- Soft-touch, compactible cinch bag designed to fully secure your possessions on the go.\n- Roll-top closure allows quick, easy access and packs down compactly for storage.\n- Double-cord shoulder straps provide comfortable everyday carry.\n- Constructed from durable 300D PU Matty material.\n- A lightweight pick for gym, travel and daily use.",
  "feats": [
   "Material: 300 D Pu Matty",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p013.jpg",
  "img2": "https://cdn.store.link/products/store18473/g3dz4j-hapuna%20cinch%20bag%20a.png?versionId=xNHsgSSywXl9vV8tMlLcomzFozXTfCWT",
  "tier": "Signature",
  "imgs": [
   "assets/holiday/p013-2.jpg"
  ]
 },
 {
  "id": "h014",
  "name": "travelXOXO Never Stop Bucket Bag",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 549.0,
  "mrp": 1129,
  "moq": 25,
  "desc": "Inspired by the lightweight, breathable and durable materials used in outdoor tents, combining rugged\u2026",
  "longDesc": "Brand: travelXOXO\n\n- Tent-inspired everyday pouch in a distinctive chalk-bag-inspired shape.\n- Made from 70D recycled nylon ripstop with 1500 mm PU coating.\n- Non-PFC durable water-repellent finish protects against light moisture.\n- Recycled polyester mono mesh liner with reflective detailing.\n- 4-litre capacity, approximately 140 g; Size: One Size.",
  "feats": [
   "Material: 300D Swade",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p014.jpg",
  "img2": "https://cdn.store.link/products/store18473/ddgled-water%20bottle%20holder%20c.png?versionId=7mZmoLeruT8Sr33bENkiIqKNHFQHIWJw",
  "tier": "Signature",
  "imgs": [
   "assets/holiday/p014-2.jpg"
  ]
 },
 {
  "id": "h015",
  "name": "travelXOXO Everyday Flap Crossbody Bag",
  "cat": "Travel Extreme",
  "brand": "SOIL",
  "price": 649.0,
  "mrp": 1249,
  "moq": 25,
  "desc": "Product Type: Sleek and compact crossbody pouch / belt bag designed for everyday convenience and\u2026",
  "longDesc": "Brand: travelXOXO\n\n- Sleek crossbody pouch and belt bag for hands-free everyday carrying.\n- Made from sturdy nylon in black with a duotone logo flap.\n- Compact 18 x 12 x 2 cm; adjustable braided rope strap with toggle.\n- Rear zippered compartment and front stretch mesh pocket.\n- Snap-button flap closure; ideal for branded giveaways.",
  "feats": [
   "Material: Nylon",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p015.jpg",
  "img2": "https://cdn.store.link/products/store18473/eun2ir-1%20%281%29.jpg?versionId=UnUgOlRib3mVhikwq4vW1HxMDRf543RL",
  "tier": "Signature"
 },
 {
  "id": "h016",
  "name": "CookEase Apron",
  "cat": "Outerwear",
  "brand": "OMG",
  "price": 1399.0,
  "mrp": 2749,
  "moq": 50,
  "desc": "Made of super soft cotton for maximum comfort",
  "longDesc": "Brand: OMG\n\n- Crafted from superior quality rich cotton fabric for maximum comfort\n- Protects against heat and dirt while cooking, baking or working\n- Adjustable neck strap ensures a comfortable fit for every wearer\n- Handy front pocket offers convenient storage for tools and essentials\n- Soft, durable and easy to wash for repeated everyday use",
  "feats": [
   "Material: Cotton",
   "Colour: Navy Blue",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p016.jpg",
  "img2": "https://cdn.store.link/products/store18473/-c3st9-omg%20ember%20apron_navy.png?versionId=jhzVndXakoWk8pc2ikRz7tFyWrOoZnee",
  "tier": "Elite"
 },
 {
  "id": "h017",
  "name": "travelXOXO Sports Sling",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 749.0,
  "mrp": 1499,
  "moq": 25,
  "desc": "Crafted from durable 230D twill polyester with a 240D polyester lining for long-lasting performance.",
  "longDesc": "Brand: travelXOXOX\n\n- Crafted from durable 230D twill polyester with 240D polyester lining.\n- Double-zippered main compartment with front zippered and slip pockets.\n- Back zippered pocket features an integrated elastic cup holder; interior slip pocket.\n- Adjustable padded shoulder sling ensures comfortable all-day carrying.\n- Lightweight design ideal for travel, commuting, work or everyday use.",
  "feats": [
   "Material: Polyester",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p017.jpg",
  "img2": "https://cdn.store.link/products/store18473/a35m7d-im%201.jpg?versionId=OmPFyBRF7I5VTeTW.2no7Gq4vRlpbtdZ",
  "tier": "Signature"
 },
 {
  "id": "h018",
  "name": "travelXOXO Backpack Cooler",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 999.0,
  "mrp": 1999,
  "moq": 25,
  "desc": "Insulated main compartment helps keep food and beverages cool and fresh for extended periods.",
  "longDesc": "Brand: travelXOXO\n\n- Insulated 20-25 L cooler holds roughly 24-30 cans with ice.\n- Secure zippered closure with a food-safe, easy-to-clean lining.\n- Front slip pocket and dual side mesh pockets for bottles.\n- Adjustable shoulder strap allows comfortable, hands-free carrying.\n- Dimensions: 13\" W x 8.5\" D x 15\" H.",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p018.jpg",
  "img2": "https://cdn.store.link/products/store18473/tb7lfc-backpack%20cooler%201.png?versionId=MRERk.5hH63QK4BDppWeP7JO7B5aUqXE",
  "tier": "Signature",
  "top10": 2
 },
 {
  "id": "h019",
  "name": "ET-TU Hoodie in a Bag",
  "cat": "Jackets & Hoodies",
  "brand": "ET-TU",
  "price": 2399.0,
  "mrp": 4329,
  "moq": 100,
  "desc": "Made from 60% recycled cotton and 40% recycled polyester for sustainability.",
  "longDesc": "Brand: ET-TU\n\n- Lightweight full-zip hoodie offering comfort, convertibility and everyday convenience.\n- Made from 60% recycled cotton and 40% recycled polyester for sustainability.\n- Cosy brushed fleece interior adds warmth and softness.\n- Ribbing at the cuffs and waistband ensures a snug, secure fit.\n- A versatile layering piece well suited to custom branding.",
  "feats": [
   "Material: Cotton , Polyester",
   "Colour: Grey",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL",
   "Lead time: ~21 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p019.jpg",
  "img2": "https://cdn.store.link/products/store18473/yyalyu-whatsapp%20image%202026-08-13%20at%2012.07.40%20pm.jpeg?versionId=QSgmwVWX5sNgMqhX6ar1W7o4zENLMSsA",
  "tier": "Supreme"
 },
 {
  "id": "h020",
  "name": "travelXOXO Everywhere Belt Bag 1L",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 799.0,
  "mrp": 1629,
  "moq": 25,
  "desc": "Compact crossbody sling bag designed for everyday use, travel, and casual outings.",
  "longDesc": "Brand: travelXOXO\n\n- Compact crossbody sling for everyday use, travel and casual outings.\n- Water-repellent fabric made with recycled polyester and nylon.\n- Exterior zippered pocket plus interior pockets for phone, wallet and keys.\n- Adjustable strap extends to 106 cm with elastic loops.\n- 1 L capacity; 19 cm W x 5 cm D x 13 cm H.",
  "feats": [
   "Colour: Black",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p020.jpg",
  "img2": "https://cdn.store.link/products/store18473/wvbpcv-whatsapp%20image%202026-06-15%20at%2012.50.38%20pm.jpeg?versionId=rIntgHSWDKfLE190bqfRWSkZ93p94yHe",
  "tier": "Signature"
 },
 {
  "id": "h021",
  "name": "OMG Surrey Sweatshirt",
  "cat": "Jackets & Hoodies",
  "brand": "OMG",
  "price": 1249.0,
  "mrp": 2249,
  "moq": 100,
  "desc": "Made from 100% cotton, compacted, washed, and preshrunk for durability.",
  "longDesc": "Brand: OMG\n\n- Made from 100% cotton, compacted, washed and preshrunk for lasting durability.\n- Crafted with 280 GSM fabric for superior comfort and warmth.\n- Brushed interior provides a soft, cosy feel against the skin.\n- Ribbed cuffs and waistband ensure a snug, polished fit.\n- A versatile everyday layer that takes branding beautifully.",
  "feats": [
   "Material: Cotton",
   "Colour: White",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL",
   "Lead time: ~14 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p021.jpg",
  "img2": "https://cdn.store.link/products/store18473/mga9-e-csun-1118_xs.png?versionId=XdVSEn3sLVOAtBodCdsdsEXwqIInOHzK",
  "tier": "Elite"
 },
 {
  "id": "h022",
  "name": "OMG Full Zipper Hoodie",
  "cat": "Jackets & Hoodies",
  "brand": "OMG",
  "price": 1399.0,
  "mrp": 2749,
  "moq": 100,
  "desc": "Made from 100% cotton, compacted, washed, and preshrunk for durability.",
  "longDesc": "Brand: OMG\n\n- Made from 100% cotton, compacted, washed and preshrunk for durability.\n- Brushed interior provides warmth and all-day comfort.\n- Full-zip closure with a durable YKK zipper for smooth, reliable operation.\n- Kangaroo pocket adds practicality; ribbed cuffs and hem give a polished fit.\n- Crafted from rich, soft fabric ideal for corporate gifting.",
  "feats": [
   "Material: Cotton",
   "Colour: Black/White",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL",
   "Lead time: ~14 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p022.jpg",
  "img2": "https://cdn.store.link/products/store18473/0fh148-csun-0107_xs.png?versionId=OmcbL6j7SQBLvpAY4pWsapLMbinD_XGI",
  "tier": "Elite"
 },
 {
  "id": "h023",
  "name": "travelXOXO Air Packing Cubes - Set of 3",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 1299.0,
  "mrp": 1879,
  "moq": 50,
  "desc": "TravelXOXO three\u2011piece set made of  durable polyester",
  "longDesc": "Brand:travelXOXO\n\n-Three-piece packing cube set made from durable polyester\n-Large, medium and small cubes allow versatile organization\n-Ventilated mesh top panel for easy visibility and airflow\n-Ideal for separating clothing and essentials when packing\n-Sizes: 13\" x 17\" x 3.25\", 11\" x 14.75\" x 3\", 7.75\" x 11.25\" x 2\"",
  "feats": [
   "Material: Polyester",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p023.jpg",
  "img2": "https://cdn.store.link/products/store18473/bbxhsa-csun-0155.jpg?versionId=b1aLuhRDFgcVCVirA7RsvOYBLsMJRsVE",
  "tier": "Elite"
 },
 {
  "id": "h024",
  "name": "travelXOXO Bounce Roll Top Backpack",
  "cat": "Backpacks",
  "brand": "travelXOXO",
  "price": 1349.0,
  "mrp": 2699,
  "moq": 50,
  "desc": "Minimalistic design with a wide-mouth zippered opening for easy access",
  "longDesc": "Brand: travelXOXO\n\n- Minimalistic backpack with a wide-mouth zippered opening for easy access\n- Roll-top offers maximum flexibility and additional storage\n- Internal foam-padded compartment fits a 15\" laptop\n- Stylish, functional choice for commuting and everyday use\n- Size: 28 W x 40 H x 13 D cm rolled, 58 cm H unrolled",
  "feats": [
   "Material: Polyester",
   "Colour: Navy",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p024.jpg",
  "img2": "https://cdn.store.link/products/store18473/kwcwvz-roller%20backpacknavy%20%281%29.png?versionId=BxzSyosnaQqaGp_6fTc3eUinnwSKFbHa",
  "tier": "Elite"
 },
 {
  "id": "h025",
  "name": "travelXOXO Flight Crossbody Sling Bag",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 999.0,
  "mrp": 1679,
  "moq": 50,
  "desc": "Made from durable 300D Ripstop fabric using 100% recycled polyester with PU coating.",
  "longDesc": "Brand: travelXOXO\n\n- Made from 300D ripstop fabric in 100% recycled polyester with PU coating.\n- Fabric sourced from pre-consumer waste for an eco-responsible choice.\n- Side zipper opens a padded sleeve for tablets and e-readers.\n- Tricot-lined top pocket and satin front zip pocket with key keeper.\n- Ambidextrous adjustable strap for shoulder, chest or back carry.",
  "feats": [
   "Material: Polyester",
   "Colour: Black",
   "Lead time: ~21 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p025.jpg",
  "img2": "https://cdn.store.link/products/store18473/-62zae-csun-1707.jpg?versionId=WRRRALBZtwG35O37TKSWf45uT1nNroTx",
  "tier": "Signature"
 },
 {
  "id": "h026",
  "name": "travelXOXO Neoprene Everyday Tote Bag",
  "cat": "Totes & Slings",
  "brand": "travelXOXO",
  "price": 1599.0,
  "mrp": 2709,
  "moq": 25,
  "desc": "Made from 600D TPU coated rPET and neoprene using recycled materials",
  "longDesc": "Brand: TravelXOXO\n\n- Made from 600D TPU-coated rPET and neoprene using recycled materials\n- Spacious open cavity easily fits towels and large beach essentials\n- Interior water-resistant zippered pocket keeps valuables organized and dry\n- Padded grab handles and fixed shoulder straps offer versatile carry options\n- Ideal for beach days, pool trips and weekend outings",
  "feats": [
   "Material: R-Pet",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p026.jpg",
  "img2": "https://cdn.store.link/products/store18473/lo4jee-csun-1580.jpg?versionId=4jTPU8005l_sboXwvlsd67css6xAAhl7",
  "tier": "Prestige"
 },
 {
  "id": "h027",
  "name": "travelXOXO Weekender Duffle Bag",
  "cat": "Duffles",
  "brand": "travelXOXO",
  "price": 2299.0,
  "mrp": 3749,
  "moq": 50,
  "desc": "Essential overnight bag designed with a clean and contemporary look, combining style with everyday\u2026",
  "longDesc": "Brand: travelXOXO\n\n- Essential overnight bag with a clean, contemporary look.\n- Spacious main compartment fits clothing, tech and travel essentials.\n- Coated zip closure adds water resistance to keep belongings dry.\n- Ideal for work trips, short business travel and weekend getaways.\n- 36-litre capacity; approximately H27 x D26.5 x W52 cm.",
  "feats": [
   "Colour: Grey",
   "Lead time: ~14 days",
   "MOQ 50 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p027.jpg",
  "img2": "https://cdn.store.link/products/store18473/29egmd-travelxoxo-weekender-duffel.jpg?versionId=3OdA0xPmIGEBWdJO30dUim.r9vfyvE7C",
  "tier": "Supreme"
 },
 {
  "id": "h028",
  "name": "SOIL Recharge Lunch Bag",
  "cat": "Home Essentials",
  "brand": "SOIL",
  "price": 649.0,
  "mrp": 1049,
  "moq": 25,
  "desc": "Lined with thick eco-friendly food-grade aluminum foil",
  "longDesc": "Brand: SOIL\n\n- Leakproof, freezable cooler lined with food-grade aluminium foil\n- Padded with 5 mm insulation pearl foam; 300D water-resistant matte outer\n- Front zipper pocket and two mesh pockets for keys and cards\n- Adjustable shoulder strap for easy carrying\n- Size: 10 x 6.5 x 8 inches; ideal for office, picnics and beach",
  "feats": [
   "Material: R-Pet",
   "Colour: Grey",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p028.jpg",
  "img2": "https://cdn.store.link/products/store18473/q0tdz7-csun-0805.jpg?versionId=xuTjrP5EvKXSKJrCauuEiUQh9PvE6Tbl",
  "tier": "Signature"
 },
 {
  "id": "h029",
  "name": "OMG Two Tone Twill Cap",
  "cat": "Headwear",
  "brand": "OMG",
  "price": 979.0,
  "mrp": null,
  "moq": 25,
  "desc": "6-panel design with a two-tone color scheme",
  "longDesc": "Brand: OMG\n\n- Six-panel cap design in a smart two-tone colour scheme\n- Eyelets, button and beak in a contrasting colour for added appeal\n- Beak features four rows of stitching for durability\n- Made from 100% brushed cotton twill for a soft, comfortable feel\n- Structured design maintains shape; hook and loop (Velcro) closure",
  "feats": [
   "Material: Cotton",
   "Colour: Beige With Black",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p029.jpg",
  "img2": "https://cdn.store.link/products/store18473/9gwhuu-csun-0695.jpg?versionId=HO9wJktCRRwyY973TgZDZVF_TqcCjy8w",
  "tier": "Signature"
 },
 {
  "id": "h030",
  "name": "OMG Back Mesh Cap",
  "cat": "Headwear",
  "brand": "OMG",
  "price": 729.0,
  "mrp": null,
  "moq": 25,
  "desc": "Adjustable closure with Velcro / hook and loop for a secure fit",
  "longDesc": "Brand: OMG\n\n- Six-panel cap crafted in cotton with nylon mesh for everyday breathability\n- Adjustable Velcro hook-and-loop closure ensures a secure, comfortable fit\n- Suitable for all-day wear during sports, travel or leisure activities\n- Lightweight, airy construction helps keep you cool\n- Easy to personalise with embroidery or printing for corporate gifting",
  "feats": [
   "Material: Cotton/Nylon",
   "Colour: Red",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p030.jpg",
  "img2": "https://cdn.store.link/products/store18473/88bmwg-csun-0639.jpg?versionId=pxZiF6UiW0Fw1l2bN69HLwUymKo354pS",
  "tier": "Signature"
 },
 {
  "id": "h031",
  "name": "OMG Supreme Cap",
  "cat": "Headwear",
  "brand": "OMG",
  "price": 729.0,
  "mrp": null,
  "moq": 25,
  "desc": "structured cap made from 100% cotton twill fabric",
  "longDesc": "Brand: OMG\n\n- Structured cap made from 100% cotton twill for a soft, durable finish\n- Holds its shape well through regular everyday wear\n- Closure: hook and loop (Velcro) for easy size adjustment\n- Classic silhouette suits uniforms, events and casual outings\n- An ideal canvas for embroidery, printing and corporate branding",
  "feats": [
   "Material: Cotton",
   "Colour: Royal Blue",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p031.jpg",
  "img2": "https://cdn.store.link/products/store18473/hv2z7o-csun-0626.jpg?versionId=1qqqn5C8waNaquT_cKAh4EGaqhPNVz2g",
  "tier": "Signature"
 },
 {
  "id": "h032",
  "name": "travelXOXO Base Camp Shoulder Duffle Bag - 5L",
  "cat": "Duffles",
  "brand": "travelXOXO",
  "price": 899.0,
  "mrp": 1499,
  "moq": 25,
  "desc": "Miniature version of the iconic Base Camp Duffel, designed for everyday use.",
  "longDesc": "Brand: travelXOXO\n\n- Miniature version of the iconic base camp duffel for everyday use.\n- Made with 300D recycled polyester tarpaulin and 840D recycled ballistic nylon.\n- PU coating and non-PFC DWR finish protect against light moisture.\n- Nylon mesh lining with multiple carrying options.\n- 5-litre capacity; 10.5\" x 5.5\" x 5.5\", approximately 300 g.",
  "feats": [
   "Material: 900 D Polyester",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p032.jpg",
  "img2": "https://cdn.store.link/products/store18473/jfruxv-base%20camp%E2%84%A2%20duffel%20shoulder%20bag3%20%282%29.png?versionId=lrepNNwSVbiDigz04p_xzSHFq7.eGvpf",
  "tier": "Signature",
  "imgs": [
   "assets/holiday/p032-2.jpg"
  ]
 },
 {
  "id": "h033",
  "name": "travelXOXO Saba Sling",
  "cat": "Totes & Slings",
  "brand": "travelXOXO",
  "price": 1399.0,
  "mrp": 2299,
  "moq": 25,
  "desc": "Durable hard cotton canvas exterior offers a rugged look and long-lasting performance.",
  "longDesc": "Brand: travelXOXO\n\n- Durable hard cotton canvas exterior with a nylon interior lining.\n- Spacious main compartment plus a detachable inner pouch.\n- Premium YKK metal zipper and technical nylon webbing handles.\n- Reinforced construction for work, travel, shopping and commuting.\n- Bag 45 x 13 x 33.5 cm; pouch 9.5 x 18 cm.",
  "feats": [
   "Material: cotton canvas , Nylon",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p033.jpg",
  "imgs": [
   "assets/holiday/p033-2.jpg"
  ],
  "img2": "https://cdn.store.link/products/store18473/oze04u-arthefact-saba-sling-bag---blacka.jpg?versionId=mUppt2_i1qB69k.FpRlCPJpZtSpC54x.",
  "tier": "Elite",
  "top10": 1
 },
 {
  "id": "h034",
  "name": "Portronics Luxcell Wireless Mini 10K",
  "cat": "Gadget & Tech",
  "brand": "Portronics",
  "price": 1880.0,
  "mrp": 3999,
  "moq": 25,
  "desc": "Compact 10,000mAh power bank with 15W MagSafe wireless charging for compatible Qi-enabled smartphones and\u2026",
  "longDesc": "Brand: Portronics\n\n- Compact 10,000 mAh power bank with 15W MagSafe wireless charging.\n- Up to 22.5W fast wired charging via USB-A and USB Type-C PD.\n- Dual outputs charge multiple devices; LED battery level indicator.\n- BIS-certified with protection against short circuits and overheating.\n- Includes a USB Type-C to Type-C charging cable.",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p034.jpg",
  "img2": "https://cdn.store.link/products/store18473/90t3yo-62.png?versionId=qZpOLWuDwgTct8rVD0mFSB1lITH5eC9a",
  "tier": "Prestige"
 },
 {
  "id": "h035",
  "name": "Fur Jaden Crossbody Sling Bag (MW65)",
  "cat": "Totes & Slings",
  "brand": "Fur Jaden",
  "price": 1517.0,
  "mrp": 2500,
  "moq": 25,
  "desc": "Premium lightweight fabric construction, water\u2011resistant and durable",
  "longDesc": "Brand: Fur Jaden\n\n- Premium lightweight fabric construction that is water-resistant and durable\n- Ventilated padded shoulder strap with airflow-optimized mesh back panel for support\n- Dedicated padded compartment designed to hold tablets securely\n- Easy-access front pockets and high-quality zippers for smooth, reliable use\n- Available in two colours: Midnight Black and Space Grey",
  "feats": [
   "Material: Premium Fabric Light Weight & Water Resistnace",
   "Colour: Midnight Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p035.jpg",
  "img2": "https://cdn.store.link/products/store18473/luwjaf-fur%20jaden%20crossbody%20sling%20bag%20%28mw65%29.png?versionId=YLQY63EZmXBH3pcecGviULNR9bHI80Tk",
  "tier": "Prestige"
 },
 {
  "id": "h036",
  "name": "FurJaden 30L Travel Duffle",
  "cat": "Duffles",
  "brand": "Fur Jaden",
  "price": 1409.0,
  "mrp": 2500,
  "moq": 25,
  "desc": "30-litre capacity provides ample space for clothing, travel essentials, gym gear, and everyday belongings.",
  "longDesc": "Brand: Furjaden\n\n- Spacious 30-litre duffle crafted from sustainable vegan leather.\n- Quilted front panel and antique-finish hardware create a premium, timeless look.\n- Padded base protection adds durability and stability during use.\n- Versatile for travel, weekend getaways, gym sessions and everyday carry.\n- Available in Black, Forest Green and Tan colour options.",
  "feats": [
   "Material: Vegan Leather",
   "Colour: Green",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p036.jpg",
  "img2": "https://cdn.store.link/products/store18473/q79o9x-30l%20travel%20duffle.png?versionId=bhoBFngaUmjEfZRkaHPHcRmOcJCOEFPB",
  "tier": "Elite"
 },
 {
  "id": "h037",
  "name": "Rare Rabbit Unisex Hoodie",
  "cat": "Jackets & Hoodies",
  "brand": "Rare Rabbit",
  "price": 2500.0,
  "mrp": 3999,
  "moq": 25,
  "desc": "Product: Hoodie",
  "longDesc": "Brand: Rare Rabbit\n\n- Unisex hoodie crafted for everyday comfort and relaxed, versatile styling\n- Material: 60% cotton and 40% polyester for softness with durability\n- Colour: Black Melange, an easy-to-pair neutral shade\n- Available in sizes XS, S, M, L, XL, XXL, 3XL and 4XL\n- A smart pick for corporate gifting, team merchandise and casual wear",
  "feats": [
   "Material: Cotton, Polyester",
   "Colour: Black Melange",
   "Sizes: XS, S, M, L, XL, XXL, 3XL, 4XL",
   "Lead time: ~21 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p037.jpg",
  "img2": "https://cdn.store.link/products/store18473/m6m860-rare-rabbit-hoodie-black-melange.jpg?versionId=_tVsS8cQMoVRlu.2H4G24DW_qh5FxbvG",
  "tier": "Supreme"
 },
 {
  "id": "h038",
  "name": "Oblique Mystique",
  "cat": "Duffles",
  "brand": "Oblique",
  "price": 2249.0,
  "mrp": 3950,
  "moq": 25,
  "desc": "MYSTIQUE is a durable and stylish duffle bag crafted for travel or gym use",
  "longDesc": "Brand: Oblique\n\n- MYSTIQUE duffle in coated polyester for resilience and water resistance\n- Detachable adjustable long handle plus short handles for comfort\n- Back zipper pocket and inner shoe pouch keep footwear separate\n- Trolley strap and quick-access features ease journeys\n- 34 x 43 x 23 cm, 830 gms; sleek blue finish",
  "feats": [
   "Material: Coated Polyester",
   "Colour: Blue",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p038.jpg",
  "img2": "https://cdn.store.link/products/store18473/7cra9s-mystic.png?versionId=cP1Gq99QFj2CpXaUi_F4Z18w1IY5DGlj",
  "tier": "Supreme"
 },
 {
  "id": "h039",
  "name": "Oblique Fir - Jute Bag",
  "cat": "Totes & Slings",
  "brand": "Oblique",
  "price": 549.0,
  "mrp": 615,
  "moq": 25,
  "desc": "Natural jute blended with cotton material",
  "longDesc": "Brand: Oblique\n\n- Crafted from natural jute blended with cotton for an earthy, durable finish\n- Comfortable cotton webbing handles with a 16\" handle length\n- Top closure: elastic with button to keep contents secure\n- Size: 16\" width x 11.75\" height x 5\" depth\n- An eco-friendly choice for shopping, gifting and everyday carry",
  "feats": [
   "Material: Jute Blended With Cotton",
   "Colour: Brown",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p039.jpg",
  "img2": "https://cdn.store.link/products/store18473/c3ynfd-oblique-fir.jpg?versionId=20CQU1uSoopPJRASaH4.ts4l0GbFQxnR",
  "tier": "Signature"
 },
 {
  "id": "h040",
  "name": "OMG Rib Beanie",
  "cat": "Headwear",
  "brand": "OMG",
  "price": 449.0,
  "mrp": 1499,
  "moq": 25,
  "desc": "Sustainably crafted from 100% recycled polyester acrylic knit",
  "longDesc": "Brand: OMG\n\n- Sustainably crafted from 100% recycled polyester acrylic knit\n- Soft, warm and durable construction built for cold-weather comfort\n- Classic 9\" cuffed design delivers a secure, snug fit\n- Timeless warm white colour with subtle debossed detailing\n- Lightweight yet insulating, ideal for outdoor activities and winter layering",
  "feats": [
   "Material: Polyester , Acrylic Knit",
   "Colour: Black",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p040.jpg",
  "img2": "https://cdn.store.link/products/store18473/4q6hf7-beanie%20cap1.png?versionId=cXwUsTcY3KTxOVDwZzNbS9SnWMtxVE4d",
  "tier": "Signature"
 },
 {
  "id": "h041",
  "name": "IRIS Shot Glass Scented Candle",
  "cat": "Home Essentials",
  "brand": "IRIS",
  "price": 90.0,
  "mrp": null,
  "moq": 25,
  "desc": "Premium scented candle crafted to create a warm, relaxing, and inviting ambiance.",
  "longDesc": "Brand: IRIS\n\n- Premium scented candle crafted to create a warm, inviting ambiance.\n- High-quality wax blend ensures a clean, even, long-lasting burn.\n- Lead-free wick delivers a safe, smoke-minimized experience.\n- Reusable glass container can be repurposed afterwards.\n- Ideal for home decor, festive occasions and corporate gifting.",
  "feats": [
   "Material: Wax , Glass",
   "Colour: Pink",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p041.jpg",
  "img2": "https://cdn.store.link/products/store18473/3-0onj-91.png?versionId=6Sonw4jSL8esjbntqFZmvvMrzPa4jqDS",
  "tier": "Signature"
 },
 {
  "id": "h042",
  "name": "SOIL Notecard - Custom",
  "cat": "Kit Busters",
  "brand": "SOIL",
  "price": 99.0,
  "mrp": 129,
  "moq": 25,
  "desc": "Fun and playful custom notecard featuring a cute cartoon cat illustration",
  "longDesc": "Brand: SOIL\n\n- Playful notecard featuring a cute cartoon cat holding a coffee cup\n- Light aqua blue border with large white space for personal messages\n- Printed on premium paper for a smooth writing experience\n- Compact, stackable set neatly packaged for gifting or desk use\n- Ideal for notes, gift tags and thank-you cards",
  "feats": [
   "Material: Paper",
   "Colour: Custom",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p042.jpg",
  "img2": "https://cdn.store.link/products/store18473/9jj4ht-csun-1281.jpg?versionId=NXcCTSeEHW5Ofo.g.ie3otbGQZf_0sa8",
  "tier": "Signature"
 },
 {
  "id": "h043",
  "name": "Smoor No Added Sugar Hazelnut Chocolate Nibbles",
  "cat": "Food & Edibles",
  "brand": "Smoor",
  "price": 295.0,
  "mrp": null,
  "moq": 25,
  "desc": "Premium roasted hazelnuts generously coated in rich, sugar-free dark chocolate for a satisfying gourmet treat.",
  "longDesc": "Brand: Smoor\n\n- Premium roasted hazelnuts coated in rich, sugar-free dark chocolate.\n- Crafted with high-quality Indian estate cocoa for a bold, smooth flavour.\n- No added sugar, making it a mindful indulgence.\n- Balances crunchy roasted nuts with intense dark chocolate.\n- Ideal for festive gifting, hampers and everyday snacking.",
  "feats": [
   "Material: Food & Edibles",
   "Colour: Custom",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p043.jpg",
  "img2": "https://cdn.store.link/products/store18473/eveh00-4.png?versionId=nfqRVNwUVBwJmg3N97iysl1SoRRFgoWw",
  "tier": "Signature"
 },
 {
  "id": "h044",
  "name": "Peanut Butter Choco Cups Pack of 8",
  "cat": "Food & Edibles",
  "brand": "Smoor",
  "price": 595.0,
  "mrp": null,
  "moq": 25,
  "desc": "Premium chocolate gift box featuring indulgent chocolate shells with a rich and creamy peanut butter filling.",
  "longDesc": "Brand: Smoor\n\n- Premium gift box of chocolate shells with creamy peanut butter filling.\n- Crafted for a delightful balance of smooth chocolate and luscious filling.\n- Made with high-quality ingredients for a rich gourmet experience.\n- Elegantly presented for festive celebrations and special occasions.\n- Ideal for corporate gifting, hampers and client appreciation.",
  "feats": [
   "Material: Food & Edibles",
   "Colour: Custom",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p044.jpg",
  "img2": "https://cdn.store.link/products/store18473/5p6kj4-3.png?versionId=iiNXAwrXWU7n_SQdRjxWbMlq5yEvydMN",
  "tier": "Signature"
 },
 {
  "id": "h045",
  "name": "Wonderchef Regalia Milk Frother",
  "cat": "Home Essentials",
  "brand": "Wonderchef",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Creates rich, creamy milk froth in seconds, adding a professional touch to lattes, cappuccinos,\u2026",
  "longDesc": "Brand: Wonderchef\n\n- Creates rich, creamy froth in 20-30 seconds for lattes and cappuccinos.\n- Stainless steel body and whisk with low-noise, one-handed operation.\n- Powered by AA batteries for cordless convenience anywhere.\n- Also makes lassi, cold coffee and shakes, whips cream and beats eggs.\n- Easy to rinse clean; comes with Wonderchef warranty.",
  "feats": [
   "Material: Stainless Steel",
   "Colour: Navy Blue",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p045.jpg",
  "tier": "Signature"
 },
 {
  "id": "h046",
  "name": "Urban Gear Eye Mask Travel Passport Cover",
  "cat": "Travel Extreme",
  "brand": "Urban Gear",
  "price": 72.0,
  "mrp": 199,
  "moq": 50,
  "desc": "Urban Gear EYE MASK Travel Comfort Accessory",
  "longDesc": "Brand: Urban Gear\n\n- Travel comfort eye mask (Model UG-EM01) with a soft, comfortable design\n- Blocks unwanted light and remains suitable in any sleep position\n- Stretchable strap ensures a secure, gentle fit\n- Available in Black (BK)\n- Branding options include screen printing, DTF printing and embroidery (conditions apply)",
  "feats": [
   "Colour: Black",
   "Lead time: ~30 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p046.jpg",
  "img2": "https://cdn.store.link/products/store18473/5i7u81-eye%20masj.png?versionId=VgB89FpDzBnxs7Tru8N405O8pUnaRQzV",
  "tier": "Signature"
 },
 {
  "id": "h047",
  "name": "Fuzo Globetrotter Travel Kit",
  "cat": "Travel Extreme",
  "brand": "Fuzo",
  "price": 125.0,
  "mrp": 299,
  "moq": 25,
  "desc": "Perfect companion for travel, designed to hold essential items",
  "longDesc": "Brand: Fuzo\n\n- Complete travel kit designed to hold essential comfort items\n- Includes an inflatable neck pillow, satin eye mask and ear plugs\n- Mask blocks sunlight while ear plugs reduce noise for deeper rest\n- Compact 16 x 11 x 3.5 cm with ample space for branding\n- Ideal for gifting, business travel or personal use",
  "feats": [
   "Material: Poly Bag, Satin",
   "Colour: Grey",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p047.jpg",
  "img2": "https://cdn.store.link/products/store18473/9lebqv-csun-0321.jpg?versionId=B04AgkvnXYOgXcuaMouBhJRMRn.7SIQ9",
  "tier": "Signature"
 },
 {
  "id": "h048",
  "name": "Portronics Muffs M2 Bluetooth Headphone",
  "cat": "Gadget & Tech",
  "brand": "Portronics",
  "price": 1500.0,
  "mrp": 2499,
  "moq": 25,
  "desc": "Dual mode connectivity: Bluetooth 5.3 for wireless use or 3.5mm AUX port for wired connection",
  "longDesc": "Brand: Portronics\n\n- Dual-mode connectivity: Bluetooth 5.3 or 3.5 mm AUX wired connection\n- 40-hour playtime; a 10-minute fast charge gives up to 10 hours playback\n- Powerful 40 mm drivers deliver enhanced bass and treble\n- Plush memory foam earcups and headband; flexible, foldable design\n- Built-in mic for clear calls; Type-C charging",
  "feats": [
   "Material: Plastic",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p048.jpg",
  "img2": "https://cdn.store.link/products/store18473/a5wmzp-csun-0403.jpg?versionId=PB9DhDRUXGR0OEnFbnUeoOYX_WTwN955",
  "tier": "Elite"
 },
 {
  "id": "h049",
  "name": "SOIL 6-in-1 Game Set",
  "cat": "Home Essentials",
  "brand": "SOIL",
  "price": 3749.0,
  "mrp": 6899,
  "moq": 25,
  "desc": "Includes six classic games for endless entertainment.",
  "longDesc": "Brand: SOIL\n\n- Six classic games in one set for endless entertainment.\n- Includes Chess and Othello for strategic two-player play.\n- Knots and Crosses offers timeless, quick-play fun.\n- Fitness Dice adds exercise names and reps to liven up workouts.\n- Also includes a standard 52-card deck and UNO for fast-paced card games.",
  "feats": [
   "Material: Wood",
   "Colour: Beige",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p049.jpg",
  "img2": "https://cdn.store.link/products/store18473/k6go5p-csun-0898.png?versionId=sNag3yTbXCzJZC8OHV668D51mEbQfZ8v",
  "tier": "Pinnacle"
 },
 {
  "id": "h050",
  "name": "Catan Strategy Board Game",
  "cat": "Games & Toys",
  "brand": "toys Heaven",
  "price": 667.0,
  "mrp": 899,
  "moq": 25,
  "desc": "Engaging strategy board game focused on resource management, trading, settlement building, and expansion.",
  "longDesc": "Brand: toys Heaven\n\n- Engaging strategy board game of resource management, trading and expansion.\n- Players collect resources, negotiate trades and build settlements for points.\n- Modular board layout creates high replay value every session.\n- Builds strategic thinking, negotiation and decision-making skills.\n- Durable components; suitable for ages 10 and above.",
  "feats": [
   "Material: Card Board",
   "Colour: Multicolor",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p050.jpg",
  "img2": "https://cdn.store.link/products/store18473/e2ag19-73.png?versionId=jPGeGYKLyGRdz0Bfb775zA7.MRRptAbG",
  "tier": "Signature"
 },
 {
  "id": "h051",
  "name": "SOIL Set of 3 Wooden Cubes",
  "cat": "Games & Toys",
  "brand": "SOIL",
  "price": 1199.0,
  "mrp": null,
  "moq": 25,
  "desc": "Crafted from smooth natural wood with a polished finish and rounded corners for a refined look.",
  "longDesc": "Brand: SOIL\n\n- Crafted from smooth natural wood with a polished finish and rounded corners.\n- Crisp laser-engraved minute markings on each side for easy time tracking.\n- Premium natural wood construction built for durability.\n- Compact cube of approximately 5.5 x 5.5 x 5.5 cm.\n- Ideal for focused work, study sessions and corporate gifting.",
  "feats": [
   "Material: Wood",
   "Colour: SOIL",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p051.jpg",
  "img2": "https://cdn.store.link/products/store18473/hp8ahh-set%20of%203%20wooden%20cubes.png?versionId=HYcZL0qeSv2bx1O3W4ABSo3udvgq9RZC",
  "tier": "Elite"
 },
 {
  "id": "h052",
  "name": "ET-TU Basic Bonded Fleece Jacket II",
  "cat": "Jackets & Hoodies",
  "brand": "ET-TU",
  "price": 6249.0,
  "mrp": null,
  "moq": 500,
  "desc": "Made from 100% polyester jersey bonded with 100% polyester microfleece for warmth and comfort.",
  "longDesc": "Brand: OMG\n\n- Made from 100% polyester jersey bonded with polyester microfleece for warmth.\n- Centre front reversed coil zipper with semi-autolock pull tab.\n- Self-fabric banded cuffs and waistband for a snug fit.\n- Front zippered pockets add everyday convenience.\n- Lower pockets with contrast reverse coil zippers for extra style.",
  "feats": [
   "Material: Polyester Jersey , Polyester Microfleece",
   "Colour: Black",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL",
   "Lead time: ~30 days",
   "MOQ 500 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p052.jpg",
  "img2": "https://cdn.store.link/products/store18473/8sxlsn-csun-1523_xs.png?versionId=Obrb8_sj6UiDSy5lw6akwC7C5tQISlmh",
  "tier": "Pinnacle"
 },
 {
  "id": "h053",
  "name": "Funskool Jenga-Truth or Dare (Multicolor)",
  "cat": "Toy & Plush",
  "brand": "FUNSKOOL",
  "price": 849.0,
  "mrp": null,
  "moq": 25,
  "desc": "Exciting block-stacking game with a fun Truth or Dare twist that adds excitement and laughter to every round.",
  "longDesc": "Brand: Funskool\n\n- Block-stacking game with a fun Truth or Dare twist.\n- Red blocks carry dares while green blocks hold truth questions.\n- Builds concentration, strategy, hand-eye coordination and motor skills.\n- Promotes social interaction, teamwork and friendly competition.\n- Durable materials for repeated play; an ideal gift for all ages.",
  "feats": [
   "Material: Wood",
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p053.jpg",
  "img2": "https://cdn.store.link/products/store18473/8xwnda-24.png?versionId=BUO6RWu0TLGrIotVQsBvAHkJ6OU8aCNG",
  "tier": "Signature"
 },
 {
  "id": "h054",
  "name": "Phool Marble Jali Aroma Oil Burner",
  "cat": "Home Essentials",
  "brand": "Phool",
  "price": 3209.0,
  "mrp": 3425,
  "moq": 25,
  "desc": "A thoughtfully curated gift box inspired by the mysterious charm of regal secrets and rich Indian heritage.",
  "longDesc": "Brand: Phool\n\n- Curated gift box inspired by regal secrets and rich Indian heritage.\n- Includes an elegant Marble Jali aroma oil burner.\n- Comes with Soumya Chandan sandalwood and Basant diffuser oils, 10 ml each.\n- Includes 4 T-light candles to warmly illuminate any room.\n- Doubles as a luxurious gift and elegant decor piece.",
  "feats": [
   "Material: Esssential Oil",
   "Colour: Multicolor",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p054.jpg",
  "img2": "https://cdn.store.link/products/store18473/olm8si-inar-002.png?versionId=3gmgQodKZKTPLn_pqchfthbzhoc7AFo0",
  "tier": "Pinnacle"
 },
 {
  "id": "h055",
  "name": "Oodai Treasure Chest | Gifting",
  "cat": "Home Essentials",
  "brand": "Oodai",
  "price": 864.0,
  "mrp": 990,
  "moq": 25,
  "desc": "Curated set of 3 hand towels featuring a blend of textures, colors, and contemporary designs.",
  "longDesc": "Brand: Oodai\n\n- Curated set of 3 hand towels blending textures, colours and design.\n- Includes a Glow Sketchbook cotton hammam terry hand towel.\n- Includes Terracotta and Teal cotton-bamboo waffle hand towels.\n- Cotton and cotton-bamboo construction feels soft and absorbent.\n- Practical for daily use, travel, guest bathrooms and gifting.",
  "feats": [
   "Material: Cotton Bamboo",
   "Colour: Multicolor",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p055.jpg",
  "img2": "https://cdn.store.link/products/store18473/ebfft9-35.png?versionId=fK1Vyy6qhhgWQHl3X7YIp4AGuukBfw0l",
  "tier": "Signature"
 },
 {
  "id": "h056",
  "name": "Universal 5 in 1 Multi USB Connector",
  "cat": "Gadget & Tech",
  "brand": "Sync",
  "price": 675.0,
  "mrp": 1125,
  "moq": 50,
  "desc": "Plastic USB charging cable with micro-USB, dual-tip micro, Apple\u00ae 8-pin, and Type-C connectors",
  "longDesc": "Brand: Sync\n\n- USB cable with micro-USB, dual-tip micro, Apple 8-pin and Type-C connectors\n- Designed to charge multiple mobile devices simultaneously\n- Plugs into any adequately powered USB port as a universal adapter\n- Compatibility may vary and may not suit all devices\n- Size: 3/4\" W x 5-3/4\" H",
  "feats": [
   "Material: Plastic",
   "Colour: Black",
   "Lead time: ~21 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p056.jpg",
  "img2": "https://cdn.store.link/products/store18473/jrhv55-csun-0324.jpg?versionId=5kQNJl_emaNoz_4KTDZQM7sBFjRKc82W",
  "tier": "Signature"
 },
 {
  "id": "h057",
  "name": "Zeb Heat Buster 200",
  "cat": "Gadget & Tech",
  "brand": "Zebronics",
  "price": 1017.0,
  "mrp": 1499,
  "moq": 25,
  "desc": "Delivers up to 12 hours of backup for extended and convenient use.",
  "longDesc": "Brand: Zebronics\n\n- Portable fan delivering up to 12 hours of backup per charge.\n- Five speed modes with up to 5000 RPM and 5.9 m/s airflow.\n- LED display with battery percentage indicator for easy monitoring.\n- 3600 mAh battery and brushless motor ensure quiet performance.\n- Lightweight, portable design with Type-C charging.",
  "feats": [
   "Material: Plastic",
   "Colour: Blue",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p057.jpg",
  "img2": "https://cdn.store.link/products/store18473/mso8hj-zebronics.png?versionId=vFJaZEGZRIQp_mHzaX0u8eLuvQq4haLJ",
  "tier": "Elite",
  "top10": 5
 },
 {
  "id": "h058",
  "name": "Aerosync Maglite Wireless Power Bank",
  "cat": "Gadget & Tech",
  "brand": "Ambrane",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Wireless power bank with MagSafe-compatible charging for iPhone and Qi-enabled devices",
  "longDesc": "Brand: Ambrane\n\n- 10,000 mAh wireless power bank with MagSafe-compatible charging\n- 22W BoostedSpeed technology enables faster charging\n- Built-in stand allows hands-free viewing while charging\n- Type-C port supports fast wired charging and wide compatibility\n- Compact matte design ideal for travel and corporate gifting",
  "feats": [
   "Colour: Blue",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p058.jpg",
  "img2": "https://cdn.store.link/products/store18473/wpg2co-aerosync%20maglite%20wireless%20power%20bank.png?versionId=.L3okPmRfV9QU2niJiuZwpd0FsUrR1cR",
  "tier": "Supreme"
 },
 {
  "id": "h059",
  "name": "Nuuk STR\u00d6M GO v2",
  "cat": "Gadget & Tech",
  "brand": "Nuuk",
  "price": 3727.0,
  "mrp": 4499,
  "moq": 25,
  "desc": "Compact and travel-friendly garment steamer designed to keep outfits fresh, smooth, and crease-free\u2026",
  "longDesc": "Brand: NUUK\n\n- Compact, travel-friendly garment steamer that heats up in 30 seconds.\n- Delivers 20 g of steam per minute for effective wrinkle removal.\n- Horizontal and vertical steaming work as both steamer and iron.\n- 120 ml water tank allows up to 10 minutes of continuous steaming.\n- Ideal for refreshing clothes at home or while travelling.",
  "feats": [
   "Material: ABS",
   "Colours: Serene Grey, Red",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p059.jpg",
  "img2": "https://cdn.store.link/products/store18473/ven9i5-nuuk.png?versionId=5UwP9rFW1hEftnMqniDDeChJF_WRMzwe",
  "tier": "Pinnacle",
  "variants": [
   {
    "name": "Serene Grey",
    "img": "assets/holiday/p059.jpg"
   },
   {
    "name": "Red",
    "img": "assets/holiday/p076.jpg"
   }
  ]
 },
 {
  "id": "h060",
  "name": "OMG Classic Cap",
  "cat": "Headwear",
  "brand": "OMG",
  "price": 799.0,
  "mrp": null,
  "moq": 25,
  "desc": "structured cap made from 100% cotton twill fabric",
  "longDesc": "Brand: OMG\n\n- Structured cap made from 100% cotton twill for a soft, sturdy finish\n- Value-priced style with a flattering high-profile design\n- Maintains shape well for a smart, consistent look\n- Available in a wide range of colours to match team uniforms or branding needs\n- A dependable pick for events, giveaways and corporate merchandise",
  "feats": [
   "Material: Cotton",
   "Colour: White",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p060.jpg",
  "img2": "https://cdn.store.link/products/store18473/6wjxau-csun-0632.jpg?versionId=KVZvw2XoSlk7T6z6MkhD_x7JulwDoB4V",
  "tier": "Signature"
 },
 {
  "id": "h061",
  "name": "Regal Nutri Blender with 3 Jars, 400 Watts Personal Blender with 100% Copper Motor",
  "cat": "Home Essentials",
  "brand": "Agaro",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Blends, chops, grinds and purees ingredients for smoothies, juices, milkshakes, cold coffee, chutneys and\u2026",
  "longDesc": "Brand: Agaro\n\n- Blends, chops, grinds and purees smoothies, juices, milkshakes and chutneys.\n- 400W motor with 100% copper winding (220-240V, 50Hz) for durability.\n- Dual-blade system with 2-leaf cross and 4-leaf serrated steel blades.\n- Includes 3 BPA-free jars of 700 ml, 500 ml and 300 ml.\n- Comes with sipper, sieve and resealable lids.",
  "feats": [
   "Colour: Red",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p061.jpg",
  "tier": "Pinnacle"
 },
 {
  "id": "h062",
  "name": "HRX Force Urban 2.0",
  "cat": "Travel Extreme",
  "brand": "HRX",
  "price": 2667.0,
  "mrp": 10999,
  "moq": 25,
  "desc": "Durable hard-shell cabin trolley crafted from premium polycarbonate for superior impact resistance and\u2026",
  "longDesc": "Brand: HRX\n\n- Hard-shell cabin trolley in premium polycarbonate for impact resistance.\n- 48L capacity with two main compartments, laptop and tablet pockets.\n- Soft lining, compression straps and mesh pocket keep items organized.\n- Eight spinner wheels, telescopic handle and integrated number lock.\n- 57 x 36 x 25 cm; weighs just 2.99 kg.",
  "feats": [
   "Material: Polycarbonate",
   "Colour: Silver",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p062.jpg",
  "img2": "https://cdn.store.link/products/store18473/denxwn-hrx-001.png?versionId=qj4YEeWyLoJm0mhYTemGvsaLzpcT58bM",
  "tier": "Pinnacle"
 },
 {
  "id": "h063",
  "name": "travelXOXO Cabin Luggage Harness & Backpack",
  "cat": "Travel Extreme",
  "brand": "travelXOXO",
  "price": 8249.0,
  "mrp": 8250,
  "moq": 25,
  "desc": "Crafted from high-quality recycled nylon for enhanced durability and sustainability.",
  "longDesc": "Brand: travelXOXO\n\n- Crafted from high-quality recycled nylon for durability and sustainability.\n- Works as both a cabin luggage harness and a convertible backpack.\n- Attaches to suitcases with adjustable straps and non-slip silicone strips.\n- Two zippered pockets fit laptops up to 16 inches.\n- 39 x 31 x 9 cm; weight 0.6 kg.",
  "feats": [
   "Material: Nylon",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p063.jpg",
  "img2": "https://cdn.store.link/products/store18473/01fl1--image%20%2835%29.png?versionId=V_I6XY6YSyCrhB4rK8YZgU1up1hhgieo",
  "tier": "Pinnacle",
  "imgs": [
   "assets/holiday/p063-2.jpg",
   "assets/holiday/p063-3.jpg"
  ]
 },
 {
  "id": "h064",
  "name": "Forest Essentials Sleep & Stress Relief Therapy Kit",
  "cat": "Wellness",
  "brand": "Forest Essentials",
  "price": 2350.0,
  "mrp": null,
  "moq": 25,
  "desc": "Includes a comprehensive Sleep & Stress Relief Therapy Kit featuring both Tranquil Sleep and Stress Relief\u2026",
  "longDesc": "Brand: Forest Essentials\n\n- Therapy kit featuring both Tranquil Sleep and Stress Relief sprays.\n- Formulated with pure essential oils of Geranium, Lavender, Nutmeg and Sandalwood.\n- Steam-distilled oils soothe the senses and help calm the mind.\n- Free from harsh chemicals, parabens and petrochemicals.\n- Eco-friendly packaging; ideal for premium wellness gifting.",
  "feats": [
   "Material: Essential Oils",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p064.jpg",
  "img2": "https://cdn.store.link/products/store18473/lxpxxh-9761.png?versionId=HIvLQdiPOoHm78It5BPG4fydvydL.OfL",
  "tier": "Supreme"
 },
 {
  "id": "h065",
  "name": "Meyaar Silicone Phone Sticky Grip",
  "cat": "Gadget & Tech",
  "brand": "Jaymir Enterprises",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Made from durable, reusable silicone, these suction phone stickers attach securely to mirrors, glass,\u2026",
  "longDesc": "Brand: Jaymir Enterprises\n\n- Reusable silicone suction phone stickers attach to mirrors, glass and tiles.\n- Strong suction holds the phone securely yet removes easily.\n- Universally compatible with most devices and phone cases.\n- Ideal for videos, recipes, video calls and selfies.\n- Value pack of 2 multicolour stickers for repeated use.",
  "feats": [
   "Material: Silicone",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p065.jpg",
  "tier": "Signature"
 },
 {
  "id": "h066",
  "name": "Mattel Games UNO Cards Pack of 2",
  "cat": "Home Essentials",
  "brand": "Mattel Games",
  "price": 150.0,
  "mrp": 199,
  "moq": 23,
  "desc": "Exciting bluffing card game where players strategically deceive opponents to be the first to discard all\u2026",
  "longDesc": "Brand: Mattel Games\n\n- Bluffing card game where players deceive opponents to discard all cards.\n- Place cards face down and announce your play; others challenge or trust.\n- Caught lies and wrong challenges mean drawing extra cards.\n- Graphic symbols on every card support colour vision deficiencies.\n- For 2 or more players aged 7 and above.",
  "feats": [
   "Material: Paper",
   "Lead time: ~7 days",
   "MOQ 23 units"
  ],
  "img": "assets/holiday/p066.jpg",
  "img2": "Retail",
  "tier": "Signature"
 },
 {
  "id": "h067",
  "name": "Augen Pickleball Paddles Kit",
  "cat": "Wellness",
  "brand": "Augen",
  "price": 1250.0,
  "mrp": 3199,
  "moq": 6,
  "desc": "Complete pickleball set includes 2 high-performance paddles and 4 durable pickleball balls, making it\u2026",
  "longDesc": "Brand: Augen\n\n- Complete pickleball set with 2 high-performance paddles and 4 durable balls.\n- Lightweight fiberglass paddles with honeycomb core balance power, control and manoeuvrability.\n- Ergonomic, non-slip grips stay comfortable through extended playing sessions.\n- Wind-resistant outdoor balls deliver consistent flight in varied conditions.\n- Suits all skill levels; ideal for parks, courts, driveways and gifting.",
  "feats": [
   "Material: Wood",
   "Colour: Red",
   "Lead time: ~14 days",
   "MOQ 6 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p067.jpg",
  "img2": "Retail",
  "tier": "Elite"
 },
 {
  "id": "h068",
  "name": "boAt Stone 135 Portable Bluetooth Speaker",
  "cat": "Gadget & Tech",
  "brand": "boAt",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Speaker Maximum Output Power: 5 Watts",
  "longDesc": "Brand: boAt\n\n- 5W RMS wireless Bluetooth speaker for an engaging surround experience\n- Supports TWS pairing of two Stone 135 speakers for dual impact\n- Up to 11 hours of playtime per charge at 80% volume\n- IPX4 rated; hanging or tabletop mounting\n- Bluetooth, FM and TF card modes with mic for hands-free calling",
  "feats": [
   "Colour: Blue",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p068.jpg",
  "img2": "https://cdn.store.link/products/store18473/yztfox-csun-0482.jpg?versionId=PREPklF8EvqPzGlcldBLOolnDqQew7J2",
  "tier": "Prestige"
 },
 {
  "id": "h069",
  "name": "boAt Stone 580 Portable Bluetooth Speaker",
  "cat": "Gadget & Tech",
  "brand": "boAt",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Speaker Maximum Output Power: 12 Watts",
  "longDesc": "Brand: boAt\n\n- 12W RMS stereo speaker with Bluetooth, AUX and USB connectivity\n- Supports TWS pairing of two Stone 580 speakers for double the sound\n- Up to 8 hours of playback at 60% volume via Type-C charging\n- IPX4 water and splash-resistant design for easy portability\n- Built-in FM radio and stylish LED party lights",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p069.jpg",
  "img2": "https://cdn.store.link/products/store18473/vko91d-csun-0497.jpg?versionId=x6u2GEMtdeY90LBH18OnAV6wPy7JN0Xn",
  "tier": "Pinnacle"
 },
 {
  "id": "h070",
  "name": "JBL Go Essential",
  "cat": "Gadget & Tech",
  "brand": "JBL",
  "price": 2825.0,
  "mrp": 2999,
  "moq": 25,
  "desc": "Portable Bluetooth speaker with high-quality JBL sound",
  "longDesc": "Brand: JBL\n\n- Portable Bluetooth speaker delivering signature high-quality JBL sound\n- Offers up to 5 hours of playtime on a single charge\n- IPX7 waterproof design suits outdoor use including poolside and parks\n- Bluetooth 4.2 enables easy wireless streaming from phones, tablets and other devices\n- Compact, grab-and-go form factor ideal for travel and gifting",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p070.jpg",
  "img2": "https://cdn.store.link/products/store18473/pa9g4l-jbl-067.png?versionId=uUG8XyvkmHgWj9YFw0kM20I2qntf5RiL",
  "tier": "Pinnacle"
 },
 {
  "id": "h071",
  "name": "JBL Flip Essential 2",
  "cat": "Gadget & Tech",
  "brand": "JBL",
  "price": 6780.0,
  "mrp": 9999,
  "moq": 25,
  "desc": "Portable speaker with bold, high-quality sound",
  "longDesc": "Brand: JBL\n\n- Portable speaker delivering bold, high-quality sound from a compact body\n- Up to 10 hours of playtime on a single charge\n- IPX7 waterproof rating for dependable everyday durability\n- Wireless Bluetooth streaming from phones, tablets and laptops\n- Made with recycled materials and an eco-friendly design for conscious gifting",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p071.jpg",
  "img2": "https://cdn.store.link/products/store18473/g-8bnm-flip%20essential%202.png?versionId=2d.v2MPEG.daCeb3Kf0j9Mtzs9HOZYuX",
  "tier": "Pinnacle"
 },
 {
  "id": "h072",
  "name": "REP - 24x7 Fitness Tracker",
  "cat": "Gadget & Tech",
  "brand": "Noise",
  "price": 9999.0,
  "mrp": null,
  "moq": 25,
  "desc": "Continuously tracks key body signals to provide insights into sleep, recovery and physical strain.",
  "longDesc": "Brand: Noise\n\n- Continuously tracks key body signals for sleep, recovery and strain insights.\n- Helps gauge readiness and decide training intensity.\n- Lightweight 27 g design suits all-day and overnight wear.\n- Up to 10 days of battery life; screen-free, distraction-free design.\n- No subscription required, with personal data from day one.",
  "feats": [
   "Material: Gadget & Tech",
   "Colours: Black, Orange",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p072-black.jpg",
  "tier": "Pinnacle",
  "variants": [
   {
    "name": "Black",
    "img": "assets/holiday/p072-black.jpg"
   },
   {
    "name": "Orange",
    "img": "assets/holiday/p072-orange.jpg"
   }
  ]
 },
 {
  "id": "h073",
  "name": "Nuuk BFF",
  "cat": "Home Essentials",
  "brand": "NUUK",
  "price": 2700.0,
  "mrp": null,
  "moq": 25,
  "desc": "Compact, lightweight handheld fan weighing under 250 g, designed for portability and everyday comfort.",
  "longDesc": "Brand: NUUK\n\n- Compact handheld fan weighing under 250 g for everyday portability.\n- IceTouch technology delivers rapid surface cooling of up to 5 degrees.\n- 180-degree adjustable head with foldable design for easy storage.\n- 3,600 mAh battery gives up to 10 hours; 100 speed settings.\n- USB-C fast charging with a wearable lanyard.",
  "feats": [
   "Colour: Pink",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p073.jpg",
  "img2": "https://cdn.store.link/products/store18473/va0-m7-nuuk%20bff.png?versionId=P2HltOTvmbWgaZBfFWNzdN7FUXEzLB0.",
  "tier": "Pinnacle"
 },
 {
  "id": "h074",
  "name": "Nuuk Krush",
  "cat": "Home Essentials",
  "brand": "NUUK",
  "price": 3494.0,
  "mrp": 5299,
  "moq": 25,
  "desc": "Compact, high-speed smoothie blender powered by a 500W motor running at 24,500 RPM.",
  "longDesc": "Brand: Nuuk\n\n- Compact, high-speed smoothie blender with a 500W motor at 24,500 RPM.\n- Patented 6-blade titanium technology blends fruits, greens, nuts and ice.\n- Includes a 460 ml leak-proof, BPA-free Go Jar.\n- Portable jar fits standard car cupholders for on-the-go use.\n- Press to Play safety technology; easy to clean.",
  "feats": [
   "Colour: Red",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p074.jpg",
  "img2": "https://cdn.store.link/products/store18473/s0cq2t-nuuk%20kr%C3%BCsh.png?versionId=m.n2jhdnD4QHBZKw3nHl3o.hjog.4QVd",
  "tier": "Pinnacle"
 },
 {
  "id": "h075",
  "name": "Nuuk Ren Go",
  "cat": "Home Essentials",
  "brand": "NUUK",
  "price": 4227.0,
  "mrp": 5699,
  "moq": 25,
  "desc": "4-in-1 cordless portable vacuum cleaner with vacuuming, blowing, inflating, and deflating functions.",
  "longDesc": "Brand: Nuuk\n\n- 4-in-1 cordless vacuum with vacuuming, blowing, inflating and deflating.\n- Delivers 11 kPa suction via a BLDC motor with Eco and Turbo modes.\n- 4,400 mAh battery gives up to 20 minutes runtime; Type-C charging.\n- Includes 7 attachments and dual filtration with dust shield.\n- Lightweight with a rubberised ergonomic grip.",
  "feats": [
   "Material: ABS",
   "Colour: Black",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p075.jpg",
  "img2": "https://cdn.store.link/products/store18473/80aqx0-nuuk%20ren%20go.png?versionId=6gotb8Vo2ZUKDfKTzlYOxye4Tn1yO6iL",
  "tier": "Pinnacle"
 },
 {
  "id": "h077",
  "name": "travelXOXO Keep It Cold",
  "cat": "Home Essentials",
  "brand": "travelXOXO",
  "price": 599.0,
  "mrp": 600,
  "moq": 25,
  "desc": "Made from high-quality neoprene",
  "longDesc": "Brand: tarvelXOXO\n\n- Made from high-quality neoprene for a snug, insulating fit\n- Stitching and bias trim at the top add durability and a clean finish\n- Designed to carry your favourite cans and bottles securely\n- Keeps beverages cool for up to 1.5 hours\n- Easy to use, easy to clean and simple to brand for giveaways",
  "feats": [
   "Material: neoprene",
   "Colour: Navy Blue",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p077.jpg",
  "img2": "https://cdn.store.link/products/store18473/gdj8hw-10.png?versionId=p1F.1Y6Tc.udsK30zhu7Cvf8nPuW3GQZ",
  "tier": "Signature"
 },
 {
  "id": "h078",
  "name": "Portronics Vayu 8.0",
  "cat": "Gadget & Tech",
  "brand": "Portronics",
  "price": 2309.0,
  "mrp": 4999,
  "moq": 25,
  "desc": "Powerful portable air inflator featuring 2 \u00d7 2000mAh rechargeable batteries for multiple inflations on a\u2026",
  "longDesc": "Brand: Portronics\n\n- Portable air inflator with 2 x 2000 mAh batteries for multiple inflations.\n- Delivers up to 150 PSI for car, bike, cycle and scooter tyres.\n- Preset modes and dual-line display show current and preset pressure.\n- Auto shut-off prevents over-inflation; LED torch with SOS mode.\n- Compact, travel-friendly design with hanging loop.",
  "feats": [
   "Material: ABS Plastic",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p078.jpg",
  "img2": "https://cdn.store.link/products/store18473/smin5h-39.png?versionId=QqRgolUSp69dcZYbDtnbK.0.camDytgD",
  "tier": "Supreme",
  "top10": 4
 },
 {
  "id": "h079",
  "name": "Philips Beard Trimmer Series 3000",
  "cat": "Gadget & Tech",
  "brand": "Philips",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Advanced Lift & Trim Technology lifts and guides low-lying hairs towards the blades for fast, precise, and\u2026",
  "longDesc": "Brand: Phililps\n\n- Lift and Trim technology guides low-lying hairs towards the blades.\n- Self-sharpening stainless steel blades stay sharp without oiling.\n- Integrated 1 mm precision settings shape beards, moustaches and stubble.\n- Up to 60 minutes of cordless use per 1.5-hour charge.\n- Skin-friendly tips and detachable head for easy cleaning.",
  "feats": [
   "Material: ABS Plastic",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p079.jpg",
  "img2": "https://cdn.store.link/products/store18473/8ohfpn-40.png?versionId=z4HcO7d28Wa2ZUCxKOzzn3hDQZ3adG9G",
  "tier": "Elite"
 },
 {
  "id": "h080",
  "name": "Xech X-Jet Neo",
  "cat": "Gadget & Tech",
  "brand": "Xech",
  "price": 1712.0,
  "mrp": 4299,
  "moq": 25,
  "desc": "Powerful 120W brushless motor delivers up to 110,000 RPM airflow for fast and efficient dust removal.",
  "longDesc": "Brand: Xech\n\n- 120W brushless motor delivers up to 110,000 RPM airflow for dust removal.\n- Six adjustable speed levels for delicate electronics to heavy-duty use.\n- Digital display shows speed and battery; built-in LED light.\n- Weighs only 243 g; recharges in about 2 hours via USB Type-C.\n- Reusable, chemical-free alternative to compressed air cans.",
  "feats": [
   "Material: ABS Plastic",
   "Colour: White",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p080.jpg",
  "img2": "https://cdn.store.link/products/store18473/ah1kup-45.png?versionId=HzBurEchNLZHWcRAagf5VshIYxLrvatL",
  "tier": "Prestige"
 },
 {
  "id": "h081",
  "name": "Curapod by Litemed | Non Invasive Pain Management Device",
  "cat": "Gadget & Tech",
  "brand": "Curapod",
  "price": 6665.0,
  "mrp": 8399,
  "moq": 25,
  "desc": "Uses red and near-infrared light therapy (photobiomodulation) to support the body's natural healing and\u2026",
  "longDesc": "Brand: Curapod\n\n- Uses red and near-infrared light therapy to support natural recovery.\n- Designed to help ease joint and muscle discomfort in knees, back and legs.\n- Non-invasive, drug-free therapy for safe, convenient daily use.\n- Targets cells to support energy production and tissue repair.\n- Lightweight and portable for home, office or travel.",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p081.jpg",
  "img2": "https://cdn.store.link/products/store18473/4lht37-71.png?versionId=4O_95Ifavx2iSdQGarApFGHhe20LnUGi",
  "tier": "Pinnacle"
 },
 {
  "id": "h082",
  "name": "The Body Keeps the Score Book",
  "cat": "Office Essentials",
  "brand": "NA",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 5,
  "desc": "THE INTERNATIONAL BESTSELLER - OVER 3 MILLION COPIES SOLD",
  "longDesc": "Brand: Penguin\n\n- International bestseller on traumatic stress by a leading world expert.\n- Explores how trauma affects individuals, families and future generations.\n- Offers a bold new paradigm beyond standard talking and drug therapies.\n- Draws on powerful case histories and decades of research.\n- Over 3 million copies sold worldwide.",
  "feats": [
   "Material: Paper",
   "Lead time: ~14 days",
   "MOQ 5 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p082.jpg",
  "tier": "Prestige"
 },
 {
  "id": "h083",
  "name": "Ice Cream Maker",
  "cat": "Home Essentials",
  "brand": "Ninja",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 5,
  "desc": "Create smooth, creamy frozen desserts at home with 7 one-touch digital programs, including ice cream,\u2026",
  "longDesc": "Brand: Ninja\n\n- Creates smooth, creamy frozen desserts with 7 one-touch digital programs.\n- Modes cover ice cream, gelato, sorbet, milkshakes, smoothies and mix-ins.\n- Creamify technology with dual-drive motor delivers a creamy texture.\n- Customise for protein-rich, low-sugar, dairy-free and vegan desserts.\n- 800W motor with 2 pint containers and shaving blade.",
  "feats": [
   "Material: Plastic & Metal",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 5 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p083.jpg",
  "tier": "Pinnacle",
  "top10": 6
 },
 {
  "id": "h084",
  "name": "SOIL Everwood Frame",
  "cat": "Home Essentials",
  "brand": "SOIL",
  "price": 499.0,
  "mrp": null,
  "moq": 25,
  "desc": "Elegant wooden finish with a minimalist and modern design",
  "longDesc": "Brand: SOIL\n\n- Elegant wooden photo frame with a minimalist, modern finish\n- Magnetic closure holds the photo securely, needing no screws or nails\n- Showcases your favourite memories in a clean, stylish way\n- Sits neatly on desks, shelves, mantels and side tables\n- Size: 18.5 cm (W) x 12.5 cm (H) x 2 cm (D)",
  "feats": [
   "Material: Wood",
   "Colour: Brown",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p084.jpg",
  "img2": "https://cdn.store.link/products/store18473/c9ce0z-csun-0353.jpg?versionId=TaLu9JLeh614RzdWuRNdVcqEJ7YHlYUU",
  "tier": "Signature"
 },
 {
  "id": "h085",
  "name": "iRobot Roomba S9+",
  "cat": "Home Essentials",
  "brand": "iRobot",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Backed by over 30 years of robotics expertise, iRobot has sold more than 30 million home robots worldwide.",
  "longDesc": "Brand: iRobot\n\n- Robot vacuum with PerfectEdge Technology and sensors for edges and corners.\n- 3-Stage Cleaning System gives up to 40x the suction of the 600 series.\n- Imprint Smart Mapping allows custom schedules and room selection.\n- Automatically empties dirt into an AllergenLock bag.\n- App and voice assistant compatible; Java Black finish.",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p085.jpg",
  "tier": "Pinnacle"
 },
 {
  "id": "h086",
  "name": "PCN 24\u2013 Stillness of Sakura",
  "cat": "Wellness",
  "brand": "Art Therapy",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Features a serene Japanese-inspired design, Stillness of Sakura, celebrating tranquillity, balance and\u2026",
  "longDesc": "Brand: Art Therapy\n\n- Paint-by-numbers kit featuring the Japanese-inspired Stillness of Sakura design.\n- Delicate sakura blossoms, reflective waters and a timeless pagoda.\n- Relaxing activity that encourages mindfulness and creativity.\n- Includes numbered linen canvas, acrylic paints, 3-piece brushes and scanner.\n- Suits beginners and experts; canvas 38.1 x 58 cm.",
  "feats": [
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p086.jpg",
  "tier": "Elite"
 },
 {
  "id": "h087",
  "name": "Brick",
  "cat": "Gadget & Tech",
  "brand": "Brick",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Blocks distracting apps instantly by tapping your phone against The Brick, helping you stay focused and\u2026",
  "longDesc": "Brand: Brick\n\n- Blocks distracting apps instantly by tapping your phone against The Brick.\n- Requires the physical device to unlock, preventing impulsive workarounds.\n- Customise which apps to block or keep accessible.\n- Personalised modes for Work, Family Time, Sleep and Study.\n- Helps reduce screen time and build focused daily habits.",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p087.jpg",
  "tier": "Pinnacle"
 },
 {
  "id": "h088",
  "name": "Camping Kit 11 in 1",
  "cat": "Travel Extreme",
  "brand": "TrekEaze",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Comprehensive 11-in-1 camping kit designed for outdoor adventures, camping trips and emergency preparedness.",
  "longDesc": "Brand: TrekEaze\n\n- Comprehensive 11-in-1 camping kit for outdoor trips and emergencies.\n- Includes thermal blanket, fire starter, scraper, compass, Swiss card and flashlight.\n- Paracord bracelet combines compass, fire starter and whistle.\n- Aluminium alloy whistle reaches 120 dB; blanket retains up to 90% body heat.\n- Compact 15 x 8 x 5 cm, 250 g with storage box.",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p088.jpg",
  "tier": "Prestige",
  "top10": 7
 },
 {
  "id": "h089",
  "name": "Airplane Foot Hammock",
  "cat": "Travel Extreme",
  "brand": "Basic Concepts",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Designed to enhance travel comfort by providing elevated foot support, helping reduce discomfort and\u2026",
  "longDesc": "Brand: Basic Concepts\n\n- Travel footrest gives elevated support, reducing strain on feet and back.\n- Extra-long strap adjusts from 17 to 34 inches onto the tray table ahead.\n- Evenly padded support measures 18 inches wide and 9 inches deep.\n- Suits adults and children on aeroplanes and trains.\n- Includes a travel bag for easy portability.",
  "feats": [
   "Material: Memory Foam",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p089.jpg",
  "tier": "Pinnacle",
  "imgs": [
   "assets/holiday/p089-2.jpg"
  ]
 },
 {
  "id": "h090",
  "name": "Eco Friendly Gifting \u2013 Cork Lid Soy Candles \u2013 The Bamboo Bae",
  "cat": "Home Essentials",
  "brand": "Bamboo Bae",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Hand-poured using natural soy wax for a clean and long-lasting burn.",
  "longDesc": "Brand: Bamboo Bae\n\n- Hand-poured using natural soy wax for a clean, long-lasting burn.\n- Reusable glass jar with natural cork lid for premium, eco-friendly appeal.\n- Four fragrances: Cafe Mocha, Love Vanilla, Lemongrass and Night Jasmine.\n- Scents range from rich and comforting to fresh and floral.\n- Ideal for festive hampers and corporate gifting.",
  "feats": [
   "Colour: Love Vanilla",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p090.jpg",
  "tier": "Signature"
 },
 {
  "id": "h091",
  "name": "Bamboo Charcoal Soap | Handmade Spa Bar | With Aloe Vera Extract",
  "cat": "Wellness",
  "brand": "Bamboo Bae",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Premium vegan spa soap bar made using natural ingredients and a gentle manufacturing process.",
  "longDesc": "Brand: Bamboo Bae\n\n- Premium vegan spa soap bar made with natural, gentle ingredients.\n- Enriched with activated bamboo charcoal to cleanse deeper impurities.\n- Moisturizes the skin while creating a gentle, rich lather.\n- Key ingredients include aloe vera extract, essential oils and glycerin.\n- Cruelty-free, no artificial colours; net weight 100 g.",
  "feats": [
   "Colour: Charcoal",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p091.jpg",
  "tier": "Signature"
 },
 {
  "id": "h092",
  "name": "Tyffyn - 600 ml - Black",
  "cat": "Home Essentials",
  "brand": "Vaya",
  "price": 2374.0,
  "mrp": 2790,
  "moq": 25,
  "desc": "Sleek black lunchbox with a matte finish that offers a sophisticated, versatile, and modern look.",
  "longDesc": "Brand: Vaya\n\n- Sleek black lunchbox with a matte finish for a sophisticated look.\n- Includes 1 outer shell, 1 base and 2 inner containers with lids.\n- Two 300 ml containers give a total capacity of 600 ml.\n- Stainless steel shell and containers with FDA-approved, BPA-free parts.\n- Compact 13 H x 16 W x 11.5 D cm with steel latches.",
  "feats": [
   "Material: Stainless Steel",
   "Colour: Black",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p092.jpg",
  "img2": "https://cdn.store.link/products/store18473/223nua-vaya%20lunch%20box.png?versionId=yGjXen_bWmqRiUJzMb_03GtbxZytp558",
  "tier": "Supreme",
  "imgs": [
   "assets/holiday/p092-2.jpg"
  ]
 },
 {
  "id": "h093",
  "name": "Hot Chocolate Mint Stir It Up",
  "cat": "Food & Edibles",
  "brand": "Smoor",
  "price": 195.0,
  "mrp": null,
  "moq": 25,
  "desc": "Brand; Smoor",
  "longDesc": "Brand; Smoor\n\n- Combines rich milk chocolate with refreshing mint for a bold flavour.\n- Innovative chocolate-on-a-stick design makes hot chocolate effortless.\n- Simply stir into a cup of warm milk for a drink in seconds.\n- Delightful blend of creamy chocolate and cool mint notes.\n- Ideal for cosy evenings, festive hampers and gifting.",
  "feats": [
   "Material: Edibles",
   "Colour: Mint",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p093.jpg",
  "tier": "Signature"
 },
 {
  "id": "h094",
  "name": "Hot Chocolate Mocha Stir It Up",
  "cat": "Food & Edibles",
  "brand": "Smoor",
  "price": 195.0,
  "mrp": null,
  "moq": 25,
  "desc": "Brand; Smoor",
  "longDesc": "Brand; Smoor\n\n- Combines rich milk chocolate with refreshing mint for a bold flavour.\n- Innovative chocolate-on-a-stick design makes hot chocolate effortless.\n- Simply stir into a cup of warm milk for a drink in seconds.\n- Delightful blend of creamy chocolate and cool mint notes.\n- Ideal for cosy evenings, festive hampers and gifting.",
  "feats": [
   "Material: Edibles",
   "Colour: Mocha",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p094.jpg",
  "tier": "Signature"
 },
 {
  "id": "h095",
  "name": "Hot Chocolate 35% Milk - Stir It Up",
  "cat": "Food & Edibles",
  "brand": "Smoor",
  "price": 195.0,
  "mrp": null,
  "moq": 25,
  "desc": "Brand; Smoor",
  "longDesc": "Brand; Smoor\n\n- Combines rich milk chocolate with refreshing mint for a bold flavour.\n- Innovative chocolate-on-a-stick design makes hot chocolate effortless.\n- Simply stir into a cup of warm milk for a drink in seconds.\n- Delightful blend of creamy chocolate and cool mint notes.\n- Ideal for cosy evenings, festive hampers and gifting.",
  "feats": [
   "Material: Edibles",
   "Colour: Mocha",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p095.jpg",
  "tier": "Signature"
 },
 {
  "id": "h096",
  "name": "Tritan Bottle-500 ml",
  "cat": "Drinkware",
  "brand": "Hydromonk",
  "price": 434.0,
  "mrp": 1300,
  "moq": 100,
  "desc": "BPA-free and FDA certified, made from Tritan material",
  "longDesc": "Brand: Hydromonk\n\n- Durable 750 ml bottle made from BPA-free, FDA-certified Tritan material\n- Stainless steel base and cap add strength and a premium finish\n- Clear body lets you track water intake at a glance\n- Hand wash recommended; not suitable for microwave use\n- Dimensions: 2-7/8\" diameter x 11-1/8\" height",
  "feats": [
   "Material: Tritan",
   "Colour: Black",
   "Lead time: ~30 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p096.jpg",
  "img2": "https://cdn.store.link/products/store18473/4kqi-g-csun-1354.png?versionId=iUn2btjh4FxnbJ_1vb8SzGW0JHrWwDtb",
  "tier": "Signature"
 },
 {
  "id": "h097",
  "name": "Urban Gear Hydra Pro Stainless Steel Travel Mug with Handle",
  "cat": "Drinkware",
  "brand": "Urban Gear",
  "price": 870.0,
  "mrp": 1499,
  "moq": 25,
  "desc": "1200 ml capacity, ideal for carrying generous amounts of beverages throughout the day",
  "longDesc": "Brand: Urban Gear\n\n- Generous 1200 ml capacity for hot or cold beverages all day\n- Made from durable 18/8 stainless steel with double-wall vacuum insulation\n- Comfortable grip handle and stainless steel straw for easy sipping\n- BPA-free; suits travel, work, gym and outdoor use\n- Approximately 7.5 x 14.5 x 27 cm and 468 g",
  "feats": [
   "Material: Stainless Steel",
   "Colour: White",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p097.jpg",
  "img2": "https://cdn.store.link/products/store18473/nue3cb-hydra%20pro%20-%20white.png?versionId=ug.3z2YuoFYTW8Qn6HGlf6ZSqfozuQCw",
  "tier": "Signature"
 },
 {
  "id": "h098",
  "name": "Sleepy Owl Vanilla Iced Matcha Latte Premix",
  "cat": "Food & Edibles",
  "brand": "Sleepy Owl",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Instant iced matcha latte premix powder made with premium Japanese matcha green tea powder.",
  "longDesc": "Brand: Sleepy Owl\n\n- Instant iced matcha latte premix made with premium Japanese matcha.\n- Vanilla flavour delivers a smooth, creamy, cafe-style experience.\n- Just add cold water and stir, with no whisking required.\n- No added sugar and about 90 kcal per cup; vegetarian.\n- Net quantity 60 g in sachet packaging.",
  "feats": [
   "Material: Edibles",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p098.jpg",
  "tier": "Signature"
 },
 {
  "id": "h099",
  "name": "OMG Scarf",
  "cat": "Outerwear",
  "brand": "OMG",
  "price": 1399.0,
  "mrp": null,
  "moq": 100,
  "desc": "Soft cotton scarf designed for everyday comfort and effortless style.",
  "longDesc": "Brand: OMG\n\n- Soft cotton scarf designed for everyday comfort and effortless style.\n- Crafted from pure cotton for softness, breathability and durability.\n- Lightweight and breathable, making it perfect for year-round wear.\n- Simple yet elegant design adds a timeless touch to any look.\n- A versatile classic suited to all occasions and easy to brand.",
  "feats": [
   "Material: Cotton , Polyester , Acrylic",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p099.jpg",
  "img2": "https://cdn.store.link/products/store18473/46gr4j-csun-1533.png?versionId=laspY_Y_8T1_SKb_kz4KvIzRxpkp_rbs",
  "tier": "Elite"
 },
 {
  "id": "h100",
  "name": "Philips 1000 Series Airfryer 4.2L",
  "cat": "Home Essentials",
  "brand": "Philips",
  "price": 5995.0,
  "mrp": null,
  "moq": 10,
  "desc": "Rapid air circulation technology delivers crispy, golden results with little to no added oil.",
  "longDesc": "Brand: Philips\n\n- Rapid air circulation delivers crispy, golden results with little or no oil.\n- Cooks with up to 90% less fat while keeping taste and texture.\n- Twelve modes cover air frying, baking, roasting, grilling and dehydrating.\n- Adjustable time and temperature with fast, even heat distribution.\n- Non-stick basket and dishwasher-safe removable parts.",
  "feats": [
   "Material: Aluminium",
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p100.jpg",
  "img2": "Retail",
  "tier": "Pinnacle"
 },
 {
  "id": "h101",
  "name": "Regalia Pronto Brew Coffee Maker",
  "cat": "Home Essentials",
  "brand": "Wonderchef",
  "price": 3165.0,
  "mrp": 5200,
  "moq": 10,
  "desc": "Brews fresh, aromatic drip coffee for a refreshing start to the day.",
  "longDesc": "Brand: Wonderchef\n\n- Brews fresh, aromatic drip coffee for a refreshing start to the day.\n- Premium 750 ml borosilicate glass carafe serves up to 6 cups.\n- Integrated keep-warm hot plate maintains coffee temperature.\n- Drip controller prevents dripping when the carafe is removed.\n- Removable, reusable conical filter makes cleaning simple.",
  "feats": [
   "Colour: Black",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "img": "assets/holiday/p101.jpg",
  "tier": "Pinnacle"
 },
 {
  "id": "h102",
  "name": "Tag8 Smart Family Passport Tan",
  "cat": "Travel Extreme",
  "brand": "Tag 8",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Premium vegan leather passport case featuring an integrated BLE tracker and RFID-blocking technology for\u2026",
  "longDesc": "Brand: Tag8\n\n- Premium vegan leather passport case with BLE tracker and RFID blocking.\n- Shows real-time location in Bluetooth range and last-seen location beyond.\n- Works with Android and iOS via the DOLPHIN Tracker app.\n- Anti-loss alarm plus passport recovery and replacement reimbursement.\n- Holds up to 4 passports with cards, cash and boarding passes.",
  "feats": [
   "Material: Leather",
   "Colour: Tan",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p102.jpg",
  "tier": "Pinnacle",
  "top10": 8
 },
 {
  "id": "h103",
  "name": "Oats and Raisins Big Cookies",
  "cat": "Food & Edibles",
  "brand": "Theobrama",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Soft and chewy cookie with a delicious, satisfying texture.",
  "longDesc": "Brand: Theobrama\n\n- Soft and chewy cookie with a delicious, satisfying texture.\n- Made with super grain oats, raisins, butter and jaggery.\n- Contains zero maida, making it a wholesome snacking option.\n- Naturally sweet flavour that pairs well with tea or coffee.\n- Allergens: milk, oats and wheat.",
  "feats": [
   "Material: Edibles",
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "img": "assets/holiday/p103.jpg",
  "tier": "Signature"
 },
 {
  "id": "h104",
  "name": "Chocolate Chip Big Cookie",
  "cat": "Food & Edibles",
  "brand": "Theobrama",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Soft and rich cookie made with couverture chocolate and butter.",
  "longDesc": "Brand: Theobrama\n\n- Soft and rich cookie made with couverture chocolate and butter.\n- Loaded with dark chocolate chunks for an indulgent chocolate experience.\n- Decadent texture that stays soft and satisfying bite after bite.\n- Ideal for gifting, hampers and everyday treats.\n- Allergens: wheat, milk and soy.",
  "feats": [
   "Material: Edibles",
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "img": "assets/holiday/p104.jpg",
  "tier": "Signature"
 },
 {
  "id": "h105",
  "name": "Cheese Crackers",
  "cat": "Food & Edibles",
  "brand": "Theobrama",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Crisp and flavourful crackers made with cheese, butter, mustard, and chilli.",
  "longDesc": "Brand: Theobrama\n\n- Crisp and flavourful crackers made with cheese, butter, mustard and chilli.\n- Savoury, mildly spiced profile satisfies snack cravings anytime.\n- Light, crunchy bite that pairs well with dips and beverages.\n- Convenient option for office snacking, hampers and gifting.\n- Allergens: wheat and milk.",
  "feats": [
   "Material: Edibles",
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "img": "assets/holiday/p105.jpg",
  "tier": "Signature"
 },
 {
  "id": "h106",
  "name": "Assorted Tea Bags Sampler | 15 Variants, 15 Count",
  "cat": "Food & Edibles",
  "brand": "Vahdam",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Tea sampler featuring 15 unique tea variants, each offering distinct and delightful flavours.",
  "longDesc": "Brand: Vahdam\n\n- Tea sampler featuring 15 unique tea variants, each with a distinct flavour.\n- Ideal for exploring a variety of blends and discovering new favourites.\n- Includes 15 plant-based, biodegradable pyramid tea bags for convenient brewing.\n- Thoughtfully presented for easy gifting and tasting sessions.\n- A versatile choice for festive hampers and corporate gifting.",
  "feats": [
   "Material: Edibles",
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "img": "assets/holiday/p106.jpg",
  "tier": "Signature"
 },
 {
  "id": "h107",
  "name": "Jade Mini Prosperity Diwali Gift Plant",
  "cat": "Home Essentials",
  "brand": "Ugaoo",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Mini Jade plant presented in a pot, ideal for desks, workspaces, and home d\u00e9cor.",
  "longDesc": "Brand: Ugaoo\n\n- Mini Jade plant in a pot, ideal for desks, workspaces and home decor.\n- Pot size: 4-inch diameter, compact enough for any surface.\n- Soil medium blends coco peat, coco chips and soil for healthy growth.\n- Comes in recyclable, eco-friendly packaging.\n- Includes a message card, making it ready for gifting.",
  "feats": [
   "Material: Soil",
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p107.jpg",
  "tier": "Signature",
  "top10": 9
 },
 {
  "id": "h108",
  "name": "Haworthia Turgida",
  "cat": "Home Essentials",
  "brand": "Ugaoo",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Compact Haworthia Turgida succulent featuring rosettes of glossy, light green leaves with a distinctive\u2026",
  "longDesc": "Brand: Ugaoo\n\n- Compact Haworthia Turgida succulent with glossy light green rosettes.\n- Curved, translucent leaf tips with attractive green striations.\n- Thrives indoors in bright, indirect sunlight; grows up to 4 inches.\n- Water once every two weeks; pet-friendly and beginner-friendly.\n- May produce delicate white tubular flowers.",
  "feats": [
   "Material: Soil",
   "Colour: Custom",
   "Lead time: ~14 days",
   "MOQ 10 units"
  ],
  "img": "assets/holiday/p108.jpg",
  "tier": "Signature"
 },
 {
  "id": "h109",
  "name": "Stuffcool Revel Magnetic Wireless Qi2 Certified Charger",
  "cat": "Gadget & Tech",
  "brand": "StuffCool",
  "price": 1625.0,
  "mrp": 2999,
  "moq": 25,
  "desc": "Qi2-certified magnetic wireless charger delivers up to 15W fast wireless charging for compatible devices.",
  "longDesc": "Brand: Stuffcool\n\n- Qi2-certified magnetic wireless charger delivering up to 15W fast charging.\n- Strong magnetic alignment ensures secure attachment and efficiency.\n- Works with MagSafe iPhones, compatible Android cases and Qi earbuds.\n- Includes a 20W USB-C PD adapter and 1 m USB-C cable.\n- Protection against overcharging, overheating and short circuits.",
  "feats": [
   "Colour: Black",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p109.jpg",
  "img2": "https://cdn.store.link/products/store18473/bipsk6-stco-001.png?versionId=k.HPoXUbXQJXjSMJVdOfquRZnJBMU_KD",
  "tier": "Prestige"
 },
 {
  "id": "h110",
  "name": "Remaxx Mini Portable Desktop Vacuum Cleaner",
  "cat": "Gadget & Tech",
  "brand": "Remaxx",
  "price": 475.0,
  "mrp": 2299,
  "moq": 25,
  "desc": "Compact and lightweight desktop vacuum cleaner designed for quick and convenient cleaning of small spaces.",
  "longDesc": "Brand: Remaxx\n\n- Compact, lightweight desktop vacuum for quick cleaning of small spaces.\n- High-speed motor delivers up to 12,000 RPM suction for dust and crumbs.\n- Cordless design cleans desks, keyboards, laptops and car interiors.\n- Simple one-handed operation; runs on 2 AA batteries (not included).\n- A practical gift for students and office professionals.",
  "feats": [
   "Material: Plastic",
   "Colour: REMAXX",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p110.jpg",
  "img2": "https://cdn.store.link/products/store18473/-gaprw-7.png?versionId=Gmm86EQNcjG4_ANwJlXpBMbTc1qjEIEk",
  "tier": "Signature"
 },
 {
  "id": "h111",
  "name": "Funtaala Wooden Mandala Paint Kit",
  "cat": "Wellness",
  "brand": "Funtaala",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "DIY wooden mandala painting kit featuring 6 pre-marked coaster blanks and 4 keychain blanks.",
  "longDesc": "Brand: Funtaala\n\n- DIY wooden mandala kit with 6 pre-marked coasters and 4 keychain blanks.\n- Includes poster paints, a paintbrush and step-by-step instructions.\n- Made from certified pinewood with non-toxic colours, safe for kids.\n- Beginner-friendly activity encouraging creativity and mindfulness.\n- Suits kids, teens and adults; 20 x 15 x 5 cm.",
  "feats": [
   "Material: Paper",
   "Colour: Custom",
   "Lead time: ~7 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p111.jpg",
  "tier": "Signature"
 },
 {
  "id": "h112",
  "name": "Phool Ruby Reed Diffuser",
  "cat": "Home Essentials",
  "brand": "Phool",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 50,
  "desc": "Brand : Phool",
  "longDesc": "Brand : Phool\n\n- 100% natural reed diffuser that gently fragrances any space.\n- Uplifting scents such as citrus or eucalyptus help enhance mood and focus.\n- Doubles as a subtle, long-lasting air freshener.\n- Adds a welcoming, professional touch to office and work-from-home spaces.\n- Convenient and low-maintenance; ideal for employee kits and welcome kits.",
  "feats": [
   "Material: Natural Essential Oils",
   "Colour: Multicolor",
   "Lead time: ~21 days",
   "MOQ 50 units"
  ],
  "img": "assets/holiday/p112.jpg",
  "img2": "https://cdn.store.link/products/store18473/180-29-phool-ruby-reed-diffuser.jpg?versionId=bhyCd1EvxCBwWoLrdBHMQgIcVyYDU45D",
  "tier": "Signature"
 },
 {
  "id": "h113",
  "name": "4700BC Himalayan Salt Caramel Popcorn, Tin, 125g",
  "cat": "Food & Edibles",
  "brand": "4700 BC",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Gourmet jumbo popcorn coated in rich caramel and balanced with Himalayan salt for a delicious\u2026",
  "longDesc": "Brand: 4700 BC\n\n- Gourmet jumbo popcorn coated in rich caramel with Himalayan salt.\n- Made with certified non-GMO corn for a premium snacking experience.\n- Gluten-free, cholesterol-free and trans-fat-free with no added MSG.\n- Premium reusable tin keeps popcorn fresh and can be repurposed.\n- Net weight 125 g; 10 x 10 x 11.5 cm; vegetarian.",
  "feats": [
   "Material: Edibles",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p113.jpg",
  "tier": "Signature"
 },
 {
  "id": "h114",
  "name": "Cards Against Humanity Family Edition",
  "cat": "Games & Toys",
  "brand": "Satyam Stationers",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Family-friendly fill-in-the-blank comedy card game designed for kids and adults to play together.",
  "longDesc": "Brand: Satyam Stationers\n\n- Family-friendly fill-in-the-blank comedy card game for kids and adults to play together.\n- Includes 600 all-new cards featuring humorous, silly, family-safe topics.\n- Recommended for ages 8 and above.\n- Encourages creativity, humour and plenty of laughter around the table.\n- Developed and tested with thousands of families; ideal for game nights and parties.",
  "feats": [
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p114.jpg",
  "tier": "Pinnacle"
 },
 {
  "id": "h115",
  "name": "Blue Orange Taco Cat Goat Cheese Pizza The Party Card Game",
  "cat": "Games & Toys",
  "brand": "Satyam Stationers",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Compact, portable card game designed for entertainment anytime, anywhere.",
  "longDesc": "Brand: Satyam Stationers\n\n- Compact, portable card game designed for entertainment anytime, anywhere.\n- Fast-paced play where players race to slap matching cards and spoken words.\n- Simple rules can be learned in roughly one minute.\n- Each game lasts around 10 to 15 minutes, perfect for quick entertainment.\n- Encourages quick thinking, concentration and friendly competition.",
  "feats": [
   "Material: Cardboard Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p115.jpg",
  "tier": "Signature"
 },
 {
  "id": "h116",
  "name": "Jaipur Board Game Fast",
  "cat": "Games & Toys",
  "brand": "Satyam Stationers",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Award-Winning Strategy Game: Enhanced edition of the popular Jaipur card game, featuring refreshed artwork\u2026",
  "longDesc": "Brand: Satyam Sationers\n\n- Enhanced edition of the award-winning Jaipur card game.\n- Stunning new illustrations by renowned artist Vincent Dutrait.\n- Designed for 2 players, ideal for couples and head-to-head gaming.\n- First print run includes an exclusive collectible metallic coin.\n- Easy to learn yet strategic to master at every level.",
  "feats": [
   "Material: Cardboard Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p116.jpg",
  "tier": "Prestige"
 },
 {
  "id": "h117",
  "name": "Coup: The Thrilling Card Game of Political Intrigue",
  "cat": "Games & Toys",
  "brand": "Satyam Stationers",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Fun for Adults, Teens & Families: A fast-paced card game ideal for parties, game nights, and gatherings\u2026",
  "longDesc": "Brand: Satyam Sationers\n\n- Fast-paced bluffing card game for adults, teens and families.\n- Take actions, bluff about your cards and challenge opponents.\n- Learn the rules in minutes; games last around 15 minutes.\n- Draw two cards and take one action per turn to eliminate rivals.\n- For 3 to 6 players aged 14 and above; highly replayable.",
  "feats": [
   "Material: Cardboard Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p117.jpg",
  "tier": "Elite"
 },
 {
  "id": "h118",
  "name": "Spot It! Dobble One Piece Card Game",
  "cat": "Games & Toys",
  "brand": "Satyam Stationers",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "One Piece-Themed Edition: Features the fast-paced Dobble (Spot It!) matching card game inspired by the\u2026",
  "longDesc": "Brand: Satyam Stationers\n\n- Fast-paced matching card game inspired by the popular One Piece series.\n- Circular cards feature series characters, symbols and motifs.\n- Players race to spot the matching symbol between any two cards.\n- Round, compact metal tin for easy storage and portability.\n- Quick, portable fun for game nights and travel.",
  "feats": [
   "Material: Cardboard Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p118.jpg",
  "tier": "Signature"
 },
 {
  "id": "h119",
  "name": "Spot It! Dobble Marvel Emojis Card Game",
  "cat": "Games & Toys",
  "brand": "Satyam Stationers",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Marvel-Themed Edition: Combines the classic Spot It! observation game with iconic Marvel superheroes in a\u2026",
  "longDesc": "Brand: Satyam Stationers\n\n- Marvel-themed edition of the classic Spot It! observation game.\n- Features beloved Marvel characters illustrated in adorable emoji style.\n- Players race to spot the single matching symbol between two cards.\n- Five different game modes add variety and plenty of replay value.\n- Sharpens observation skills and reflexes; great for family game nights.",
  "feats": [
   "Material: Cardboard Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p119.jpg",
  "tier": "Signature"
 },
 {
  "id": "h120",
  "name": "Blah Bleh Bleu",
  "cat": "Games & Toys",
  "brand": "Factor Notes",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "64 Conversation Cards: Includes 64 thoughtfully designed cards featuring engaging prompts to spark\u2026",
  "longDesc": "Brand: Factor Notes\n\n- Set of 64 conversation cards featuring thoughtfully designed prompts.\n- Each card pairs creative illustrations with fun conversation starters.\n- Sparks meaningful discussion and deeper connection with any group.\n- Versatile for family gatherings, parties, casual hangouts and travel.\n- A unique, thoughtful gift for friends, family members or partners.",
  "feats": [
   "Material: Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p120.jpg",
  "tier": "Signature"
 },
 {
  "id": "h121",
  "name": "Start Where You Are",
  "cat": "Notebooks",
  "brand": "Penguin",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Interactive Self-Discovery Journal: Encourages creativity, mindfulness, and self-motivation through guided\u2026",
  "longDesc": "Brand: Penguin Publishers\n\n- Interactive self-discovery journal that encourages creativity and mindfulness.\n- Supportive prompts and exercises invite writing, drawing and chart-making.\n- Explores personal goals and dreams alongside inspirational quotes.\n- Vibrant hand-lettering and expressive artwork by Meera Lee Patel.\n- A meaningful gift and keepsake for anyone pursuing personal growth.",
  "feats": [
   "Material: Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p121.jpg",
  "tier": "Signature",
  "top10": 10
 },
 {
  "id": "h122",
  "name": "The Sober Stoic Journal",
  "cat": "Notebooks",
  "brand": "White Arrow Books",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "365-Day Guided Journal: Encourages intentional, sober living through daily journaling, mindfulness, and\u2026",
  "longDesc": "Brand: White Arrow Books\n\n- 365-day guided journal encouraging intentional living through daily reflection.\n- Features timeless quotes from Marcus Aurelius, Epictetus and Seneca.\n- Daily prompts and exercises explore emotions, habits, challenges and progress.\n- Includes a 21-day return track to help restart after missed days.\n- Translates Stoic principles into practical, everyday lessons.",
  "feats": [
   "Material: Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p122.jpg",
  "tier": "Signature"
 },
 {
  "id": "h123",
  "name": "Four Thousand Weeks: Embrace Your Limits",
  "cat": "Notebooks",
  "brand": "Vintage",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Bestselling Book: Four Thousand Weeks by Oliver Burkeman explores how to build a meaningful life by\u2026",
  "longDesc": "Brand: Vintage\n\n- Bestselling book on building a meaningful life within the limits of time.\n- Challenges the obsession with productivity and getting everything done.\n- Draws on ancient and modern philosophers, psychologists and spiritual teachers.\n- Encourages accepting limitations and making intentional choices.\n- A thought-provoking read and gift for mindful living.",
  "feats": [
   "Material: Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p123.jpg",
  "tier": "Prestige"
 },
 {
  "id": "h124",
  "name": "The Things You Can See Only When You Slow Down",
  "cat": "Notebooks",
  "brand": "Penguin Life",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "THE INTERNATIONAL BESTSELLER",
  "longDesc": "Brand: Penguin Life\n\n- International bestselling guide to mindfulness and slowing down\n- Written by a Buddhist monk, with advice on setbacks, rest and relationships\n- Combines short, reflective teachings with calming colour illustrations\n- Speaks to the anxieties of modern life and the joy of slowing down\n- Full of anecdotes and quotes, making a thoughtful gift",
  "feats": [
   "Material: Paper",
   "Lead time: ~14 days",
   "MOQ 25 units"
  ],
  "img": "assets/holiday/p124.jpg",
  "tier": "Elite"
 },
 {
  "id": "h125",
  "name": "OMG Hooded Sweatshirt",
  "cat": "Jackets & Hoodies",
  "brand": "OMG",
  "price": 2549.0,
  "mrp": 2750,
  "moq": 100,
  "desc": "Made from 100% cotton for a soft and comfortable feel",
  "longDesc": "Brand: OMG\n\n- Made from 100% cotton for a soft and comfortable feel\n- Compacted, washed and pre-shrunk for long-lasting durability and a reliable fit\n- Adjustable drawstring hood adds both style and practicality\n- Designed for casual comfort and everyday versatility\n- An easy layering piece well suited to custom branding",
  "feats": [
   "Material: Cotton",
   "Colour: Pink",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL",
   "Lead time: ~14 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p125.jpg",
  "img2": "https://cdn.store.link/products/store18473/unz5hv-csun-0010-xs.png?versionId=UHSPuzhMXVHVyeZDnSkbOmiDpGpwxvW3",
  "tier": "Pinnacle"
 },
 {
  "id": "h126",
  "name": "OMG Classic No Zip Hoodie",
  "cat": "Jackets & Hoodies",
  "brand": "OMG",
  "price": 3799.0,
  "mrp": 3800,
  "moq": 100,
  "desc": "Made from 65% recycled cotton and 35% recycled polyester",
  "longDesc": "Brand: OMG\n\n- Made from 65% recycled cotton and 35% recycled polyester\n- Designed for casual comfort and everyday versatility\n- Ideal for layering or wearing on its own in any season\n- Sustainable fabric choice with a soft, sturdy handfeel\n- A versatile option for team merchandise and corporate gifting",
  "feats": [
   "Material: Cotton , Polyester",
   "Colour: Green",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL",
   "Lead time: ~21 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p126.jpg",
  "img2": "https://cdn.store.link/products/store18473/o-61w3-csun-3764.png?versionId=SnroebzquyZ9hOtcZiMnfM0Qc5D1Lhep",
  "tier": "Pinnacle"
 },
 {
  "id": "h127",
  "name": "ET-TU Sweatshirt",
  "cat": "Jackets & Hoodies",
  "brand": "ET-TU",
  "price": 5099.0,
  "mrp": null,
  "moq": 100,
  "desc": "Composition: 60% recycled cotton, 36% recycled polyester, 4% spandex",
  "longDesc": "Brand: ET-TU\n\n- Composition: 60% recycled cotton, 36% recycled polyester and 4% spandex\n- Soft and durable material with comfortable everyday stretch\n- Ideal for casual wear as well as active, on-the-move use\n- Recycled fabric blend offers a more sustainable choice\n- Easy to style and well suited to custom branding",
  "feats": [
   "Material: Cotton , Polyester , Spandex",
   "Colour: Blue",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL",
   "Lead time: ~21 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p127.jpg",
  "img2": "https://cdn.store.link/products/store18473/v6jj5w-et-tu%20sweatshirt.png?versionId=gt6xZBsRf08zy.m87ZMMfD.oU_nJxTUm",
  "tier": "Pinnacle"
 },
 {
  "id": "h128",
  "name": "ET-TU Mod 2 Zip Hoodie",
  "cat": "Jackets & Hoodies",
  "brand": "ET-TU",
  "price": 6249.0,
  "mrp": 6250,
  "moq": 100,
  "desc": "A must-have hoodie for everyday comfort",
  "longDesc": "Brand: ET-TU\n\n- A must-have hoodie for everyday comfort and relaxed styling\n- Made from soft, naturally breathable fabric designed to keep you warm\n- Offers breathability for comfortable all-day wear\n- Includes technical stretch for added flexibility and freedom of movement\n- Fabric composition: 50% cotton and 50% modal",
  "feats": [
   "Material: Cotton , Modal",
   "Colour: Teal Blue",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL",
   "Lead time: ~21 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p128.jpg",
  "img2": "https://cdn.store.link/products/store18473/l6vlsa-csun-1593.png?versionId=d2R1IOR8A.Yw8IpMzvtAsITvxpyZ4Sh8",
  "tier": "Pinnacle"
 },
 {
  "id": "h129",
  "name": "ET-TU Hoodie Without Zip",
  "cat": "Jackets & Hoodies",
  "brand": "ET-TU",
  "price": 3799.0,
  "mrp": 3800,
  "moq": 100,
  "desc": "Made from 65% recycled cotton and 35% recycled polyester",
  "longDesc": "Brand: ET-TU\n\n- Made from 65% recycled cotton and 35% recycled polyester\n- Designed for casual comfort and everyday versatility\n- Ideal for layering or wearing on its own in any season\n- Sustainable material choice with a soft, durable finish\n- A dependable everyday piece well suited to corporate branding",
  "feats": [
   "Material: Cotton , Polyester",
   "Colour: Bone",
   "Sizes: XS, S, M, L, XL, 2XL, 3XL",
   "Lead time: ~21 days",
   "MOQ 100 units"
  ],
  "img": "assets/holiday/p129.jpg",
  "img2": "https://cdn.store.link/products/store18473/vh-6-p-et-tu-unisex-recycled-no-zip-hooodie---black.jpg?versionId=.he4m6oW0_PwQSt4xEL8qxRKBxB5h45l",
  "tier": "Pinnacle"
 },
 {
  "id": "h130",
  "name": "Mayfair Soiree Home Duo",
  "cat": "Wellness",
  "brand": "Kimirica",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Features the Mayfair Soiree Home Duo, combining vibrant charm with polished sophistication for an elevated\u2026",
  "longDesc": "Brand: Kimirica\n\n- Mayfair Soiree Home Duo combining vibrant charm with sophistication.\n- Includes a sleek metal caddy with Orange Rind and Cedar wash and lotion.\n- Gently cleanses, nourishes and delicately fragrances the skin.\n- Comes with a reed diffuser blending orange rind and grounding cedar.\n- An elegant housewarming and corporate gift.",
  "feats": [
   "Material: Essential Oil",
   "Colour: Custom",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p130.jpg",
  "tier": "Supreme"
 },
 {
  "id": "h131",
  "name": "The Gulistan Indulgence Set 5 in 1",
  "cat": "Wellness",
  "brand": "Kimirica",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Give yourself the royal treatment you deserve with The Gulistan Indulgence Set. Inspired by the ancient\u2026",
  "longDesc": "Brand: Kimirica\n\n- Gulistan Indulgence Set inspired by the bathing rituals of kings and queens.\n- Elevates the bathing routine with majestic Rose Absolute and Iris notes.\n- Infused with organic rose water, ginkgo biloba and white tea extracts.\n- Soothes the senses and promotes healthy, youthful-looking skin.\n- A luxurious choice for festive and special-occasion gifting.",
  "feats": [
   "Material: Top Note - Rose Absolute Middle Note - Tuberose & Iris Base Note - Black Pepper & Cardamom",
   "Colour: Custom",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p131.jpg",
  "tier": "Elite"
 },
 {
  "id": "h132",
  "name": "The Gentleman Bath Care Trio",
  "cat": "Wellness",
  "brand": "Kimirica",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Gentleman Bath Care Trio featuring a refined selection of grooming essentials designed for the modern man.",
  "longDesc": "Brand: Kimirica\n\n- Gentleman Bath Care Trio offering refined grooming essentials for the modern man.\n- Travel-friendly, multipurpose products suitable for head-to-toe care.\n- Formulated to refresh and restore everyday personal care routines.\n- Infused with classic musk and amber notes for a warm, long-lasting scent.\n- Compact and travel-ready; ideal for birthdays, festive and corporate gifting.",
  "feats": [
   "Colour: Custom",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p132.jpg",
  "tier": "Signature"
 },
 {
  "id": "h133",
  "name": "Jaravik 20 Sets DIY 3D Sticker Book",
  "cat": "Wellness",
  "brand": "Generic",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Includes 50 sheets for creating fun 3D mini scenes, such as a supermarket, coffee shop, bookstore, and\u2026",
  "longDesc": "Brand: Generic\n\n- Includes 50 sheets for creating 3D mini scenes like a shop, cafe and house.\n- Comes with 20 background cards and 30 PET sticker sheets of characters.\n- Made from non-toxic paper and PVC materials with vibrant prints.\n- Repositionable peel-and-stick stickers allow reusable scene-building.\n- Includes tweezers; great for journaling and scrapbooking.",
  "feats": [
   "Material: Polyvinyl Chloride",
   "Colour: Custom",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p133.jpg",
  "tier": "Signature"
 },
 {
  "id": "h134",
  "name": "Cheese Board with Cheese Knife and Fork",
  "cat": "Home Essentials",
  "brand": "Nestasia",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Beautifully crafted from 100% premium acacia wood, featuring natural grain patterns in warm honey and deep\u2026",
  "longDesc": "Brand: Nestasia\n\n- Crafted from 100% premium acacia wood with natural honey and brown grain.\n- Rectangular design with smooth, rounded corners for a refined look.\n- Includes a stainless steel cheese fork and knife with wooden handles.\n- Integrated grooves keep both tools neatly stored.\n- Spacious, easy-to-clean surface ideal for entertaining and gifting.",
  "feats": [
   "Material: Acacia wood, stainless steel",
   "Colour: Custom",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p134.jpg",
  "tier": "Elite"
 },
 {
  "id": "h135",
  "name": "Lavender Lane Gratitude Journal",
  "cat": "Wellness",
  "brand": "Off Grid",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 10,
  "desc": "Daily morning and night routines to practice gratitude.",
  "longDesc": "Brand: Odd Giraffe\n\n- Guided gratitude journal with daily morning and night routines.\n- Inspiring daily affirmations and mottos help keep motivation high.\n- Undated pages let you fill it out at your own pace with no pressure.\n- Weekly gratitude challenges encourage consistency and reflection.\n- A thoughtful self-care gift for colleagues, friends and family.",
  "feats": [
   "Material: Paper",
   "Colour: Custom",
   "MOQ 10 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p135.jpg",
  "tier": "Elite"
 },
 {
  "id": "h136",
  "name": "TriFusion",
  "cat": "Gadget & Tech",
  "brand": "Portronics",
  "price": null,
  "mrp": null,
  "pod": true,
  "moq": 25,
  "desc": "Features a 15W wireless charging pad for convenient charging of compatible devices.",
  "longDesc": "Brand: Portronics\n\n- Combines a 15W wireless charging pad with a 16W speaker in one device.\n- Clear vocals and rich sound with up to 5 hours of playback.\n- Built-in white noise feature creates a soothing sleep environment.\n- Digital alarm clock plus USB, AUX IN and TF card playback.\n- TWS pairing with intuitive onboard controls.",
  "feats": [
   "Colour: Black",
   "MOQ 25 units"
  ],
  "badge": "Top Rated",
  "icon": "\u2b50",
  "img": "assets/holiday/p136.jpg",
  "tier": "Supreme"
 },
 {
  "id": "h137",
  "name": "Pen-Sketch Portraits",
  "cat": "Home Essentials",
  "brand": "Loaves & Fish",
  "price": null,
  "mrp": null,
  "moq": 1,
  "desc": "Artwork size: A4.",
  "longDesc": "Brand: Loaves & Fish\n\n- Custom A4 artwork created using ink pen on paper.\n- Available in framed and unframed options; one clear photograph required.\n- Digital proof shared for approval before the drawing begins.\n- Minimum order quantity 1; capacity up to 8 artworks per day.\n- Made in Chennai; shipping charged separately, MOQ and TAT per order.",
  "feats": [
   "Colour: Custom",
   "MOQ 1 units"
  ],
  "img": "assets/holiday/p137.jpg"
 }
];
