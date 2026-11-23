# Anuyog Engineering — website (v2, Supabase)

Static site (plain HTML/CSS/JS, no build step) + Supabase for the catalogue, the inquiry inbox and the staff login.
Host it anywhere static: GitHub Pages, Netlify, Vercel, Hostinger.

## Status

Steps 1–3 are **already done**: the Supabase project `anuyog-engineering` (Mumbai) exists, the schema and seed data are loaded, and `assets/config.js` points at it. What's left for you is step 4 (your admin login) and step 5 (upload), plus step 6.

## Set up (about 15 minutes)

1. **Create a Supabase project** at supabase.com. Pick the region closest to your customers (Mumbai, `ap-south-1`). Use a strong database password.
2. **SQL Editor → run `supabase/schema.sql`**, then run `supabase/seed.sql` (your 6 categories and 17 products from the old site).
3. **Project Settings → API**: copy the *Project URL* and the *anon public* key into `assets/config.js`. (The anon key is meant to be public. Never use the `service_role` key anywhere in this site.) If you chose a different region than Mumbai, change `dataRegion` there too — the privacy page prints it.
4. **Create your admin login.** Authentication → Users → *Add user* (your email + a strong password). Authentication → Sign In / Providers → Email → switch **off** "Allow new users to sign up". Then in the SQL Editor:
   `insert into public.admins (user_id) select id from auth.users where email = 'you@example.com';`
5. **Upload the folder** to your host. Open `/admin.html` and sign in.
6. **Retire the old Firebase database** once you've copied out anything you need: its rules were open to the whole internet.

To preview locally, run `python3 -m http.server` in this folder and open http://localhost:8000 (opening the files by double-click won't work with modern JavaScript modules). Replace the domain in `sitemap.xml` / `robots.txt` with yours.

Until step 3 is done the site still works: it reads `assets/catalogue.json`, and the inquiry form falls back to WhatsApp / email.

## Day to day

* **Inquiries**: `/admin.html` → Inquiries. Set status, reply on WhatsApp, export CSV, or delete one if a customer asks.
* **Products**: `/admin.html` → Products. Add/edit/hide, upload photos (stored in Supabase Storage), edit sizes and specs. No code.
* **Company details** (phone, address, GST, hours, workshop size, Udyam): `assets/config.js`.
* **Categories**: edit in Supabase → Table Editor → `categories`.
* **Privacy page text**: `privacy.html`. It describes exactly what this version does — if you add analytics or anything else later, update it first.

## Files

`index.html products.html product.html inquiry.html about.html quality.html contact.html privacy.html terms.html admin.html` · `assets/` (`style.css`, `app.js`, `core.js`, `admin.js`, `config.js`, `catalogue.json`, images) · `supabase/` (`schema.sql`, `seed.sql`).

## What changed from v1

* Firebase (open read/write rules, password in the page source) → Supabase with Row Level Security and a real staff login.
* Visitors are no longer logged. v1 recorded every page view and inquiry while the privacy page said it didn't.
* Inquiries are saved to your inbox with a consent tick, *and* still offer WhatsApp / email.
* Single-page-feel navigation, smooth scrolling, scroll reveals and page transitions; all of it switches off for visitors who prefer reduced motion.
