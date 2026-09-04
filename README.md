# Anuyog Engineering — website

A multi-page, inquiry-based catalogue site. No cart, no online payment: every product
page ends in "Inquire" rather than "Buy", which is how B2B fabrication actually sells.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home. Hero, trust strip, **product slider in the middle**, category grid, second slider, company intro |
| `products.html` | The whole range, grouped by category |
| `category.html?c=SLUG` | One category (6 of these) |
| `product.html?p=SLUG` | One product — photo, size/capacity options, spec table, inquiry |
| `inquiry.html` | Full inquiry form with product + variant dropdowns |
| `about.html` | Long company profile, registration details, what you make, workshop |
| `quality.html` | Grades, thickness, finishes, welding, testing, warranty |
| `contact.html` | Address, phone, WhatsApp, map link, who to ask for |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms & conditions |

Plus `sitemap.xml`, `robots.txt`, `assets/favicon.svg`.

## The one file you will edit

**`assets/data.js`** holds everything: company details at the top, then `CATEGORIES`,
then `PRODUCTS`. The menus, sliders, listings, category pages, product pages, footer
and sitemap all read from it. Change it once and the whole site follows.

### Fill in your real details first

At the top of `assets/data.js`, replace the placeholders:

```js
phone:     "+91 98250 00000",     // your number
phoneHref: "+919825000000",       // same number, digits only
whatsapp:  "919825000000",        // country code + number, no +
email:     "sales@anuyogengineering.in",
address:   "Plot No. 42, GIDC ...",   // your real works address
gst:       "24XXXXX0000X1ZX",         // your GST number
udyam:     "UDYAM-GJ-24-0000000",
```

Also check `founded`, `staff` and `shopArea` — I used reasonable figures, but they
should be yours before this goes live.

### Adding a product

Copy any block in `PRODUCTS` and change it:

```js
{
  slug: "ss-work-table",          // becomes product.html?p=ss-work-table
  cat: "furniture",               // must match a slug in CATEGORIES
  name: "Stainless Steel Work Table",
  img: "assets/img/ss-work-table.jpg",   // or null for a placeholder tile
  from: 18000,                    // starting price
  unit: "Piece",
  featured: true,                 // true = appears in the home page slider
  short: "One line for the card.",
  long:  "A paragraph for the product page.",
  specs: [["Material","SS 304"],["Top","1.5 mm"]],
  variants: [
    { name: "4 ft table", d: "1200 × 600 × 850 mm", price: 18000 },
    { name: "6 ft table", d: "1800 × 600 × 850 mm", price: 24000 },
    { name: "Custom size", d: "Built to your dimension", price: null }  // null = "On request"
  ]
}
```

The `variants` array is the category-with-parts behaviour you asked for — an SS tank
carries its capacities, a locker carries its compartment counts, a stool carries its
heights. The buyer picks one before enquiring, and the choice travels into the WhatsApp
message and the email.

### Adding a category

Add to `CATEGORIES`, then point products at it with `cat: "your-slug"`. The hamburger
menu, footer and every category listing pick it up automatically.

### Adding photos

Drop a square-ish JPG into `assets/img/` and reference it as `img:` in the product.
Products with `img: null` show a tidy hatched placeholder with initials, so nothing
looks broken while you photograph the rest.

## How the inquiry works

The site is static — there is no server, so a form cannot email you by itself. When
someone submits, the site builds the complete message and gives them two buttons:
**Send on WhatsApp** (pre-filled to your number) and **Send by email** (pre-filled to
your address). Nothing is lost and nothing is stored.

If you later move to hosting with a backend, replace the submit handler in
`assets/site.js` (and the one at the bottom of `inquiry.html`) with a `fetch()` POST
to your endpoint. That is the only change needed.

## Hosting

Upload the whole folder as-is to any static host — Hostinger, GoDaddy, Netlify,
Vercel, GitHub Pages, or a `public_html` directory on shared hosting. There is no
build step and no database.

Before going live: put your real details in `assets/data.js`, replace the domain in
`sitemap.xml` and `robots.txt`, and read through `privacy.html` and `terms.html` — the
commercial terms (50% advance, 12-month warranty, 7-day returns, Valsad jurisdiction)
are sensible defaults, but they are your terms and you should confirm each one.

## Notes

- Works down to a 320px phone screen; the hamburger drawer has a working
  "Products by category" accordion.
- Keyboard accessible, visible focus rings, `prefers-reduced-motion` respected.
- Fonts load from Google Fonts, so the first paint needs an internet connection;
  it falls back to system fonts offline.
