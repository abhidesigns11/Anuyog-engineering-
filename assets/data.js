/* Anuyog Engineering — catalogue data.
   Edit this one file to add/remove categories, products or size variants.
   Everything on the site (menus, listings, sliders, detail pages) reads from here. */

const COMPANY = {
  name: "Anuyog Engineering",
  tagline: "SS & MS fabrication for pharma, food and process plants",
  contactPerson: "Abhi Panchal",
  city: "Vapi, Gujarat",
  address: "Plot No. 925, Opp. Swaraj Eng. Compound, B/H Aarti Industries, 4th Phase, G.I.D.C., Vapi — 396195, Gujarat, India",
  phone: "+91 81410 15605",
  phoneHref: "+918141015605",
  phone2: "+91 70467 78251",
  phone2Href: "+917046778251",
  whatsapp: "918141015605",
  email: "anuyog.engineering@gmail.com",
  hours: "Mon – Sat, 9:30 am – 6:30 pm IST",
  founded: "2009",
  gst: "24IVTPP6141P1ZJ",
  udyam: "UDYAM-GJ-24-0000000",
  staff: "45+",
  shopArea: "18,000 sq. ft."
};

const CATEGORIES = [
  { slug: "furniture",  name: "Stainless Steel Furniture", blurb: "Seating, tables, cabinets and cross-over benches for cleanrooms, labs and change rooms." },
  { slug: "lockers",    name: "Lockers & Storage",         blurb: "Personnel lockers, mobile lockers and document storage in SS 304 and SS 316." },
  { slug: "tanks",      name: "Tanks & Vessels",           blurb: "Mixing tanks, jacketed vessels and storage tanks from 50 L to 10,000 L." },
  { slug: "pharma",     name: "Pharma & GMP Equipment",    blurb: "Hoppers, scoops, buckets and filling vessels built to GMP surface standards." },
  { slug: "dustbins",   name: "Dustbins & Waste Handling", blurb: "Pedal bins, garbage trolleys and segregation bins for plants and kitchens." },
  { slug: "utility",    name: "Sanitary & Utility Items",  blurb: "Soap dispensers, drain traps, hand-wash stations and pass boxes." }
];

/* variants: the size / capacity options a buyer picks before enquiring */
const PRODUCTS = [
  {
    slug: "ss-stool", cat: "furniture", name: "Stainless Steel Stool",
    img: "assets/img/ss-stool.jpg", from: 2800, unit: "Piece", featured: true,
    short: "Tapered four-leg stool with a seamless round seat and double footrest bracing.",
    long: "A workshop and cleanroom stool built from SS 304 square section with a fully welded, ground and buffed frame. The round seat is pressed from 1.5 mm sheet and rolled over at the edge so there is no exposed sharp lip, and the underside is closed off to stop dust settling. Legs splay outward for stability under lateral load and carry two levels of bracing — an upper mid-rail and a full perimeter foot ring. Feet are fitted with welded SS pads that can be swapped for levelling bolts or nylon glides on request.",
    specs: [["Material","SS 304 (SS 316 on request)"],["Seat","1.5 mm pressed sheet, rolled edge"],["Frame","25 × 25 mm square section, 1.5 mm"],["Finish","Matt buff / mirror polish"],["Load rating","150 kg static"],["Origin","Made in India"]],
    variants: [
      { name: "Low stool — 18 in seat height", d: "Ø 300 mm seat", price: 2800 },
      { name: "Counter stool — 24 in seat height", d: "Ø 320 mm seat", price: 3400 },
      { name: "Bar stool — 30 in seat height", d: "Ø 350 mm seat, foot ring", price: 4100 },
      { name: "Heavy-duty stool — 24 in", d: "2 mm frame, 200 kg rating", price: 5200 },
      { name: "Height-adjustable stool", d: "450–600 mm, gas lift", price: 6800 }
    ]
  },
  {
    slug: "ss-chair", cat: "furniture", name: "Stainless Steel Chair",
    img: "assets/img/ss-chair.jpg", from: 3500, unit: "Piece", featured: true,
    short: "Fixed-back SS chair for laboratories, QC rooms and production lines.",
    long: "A fixed chair in SS 304 round pipe with a pressed seat and contoured back rest. All joints are TIG welded and ground flush so the frame wipes down clean, which is why it is the standard seating in most of the pharmaceutical units we supply. The foot ring doubles as a rest and stiffens the frame. Available with or without a back, and with a perforated seat where wash-down is frequent.",
    specs: [["Material","SS 304"],["Frame","25 mm round pipe, 1.6 mm"],["Seat","Pressed sheet, 1.5 mm"],["Back","Fixed, contoured"],["Finish","Matt buff"],["Chair type","Normal fix chair"]],
    variants: [
      { name: "Standard fix chair", d: "18 in seat height, with back", price: 3500 },
      { name: "High chair with back", d: "24 in seat height, foot ring", price: 4200 },
      { name: "Revolving lab chair", d: "Gas lift, castor base", price: 7500 },
      { name: "Perforated seat chair", d: "For wash-down areas", price: 4600 }
    ]
  },
  {
    slug: "ss-table-cabinet", cat: "furniture", name: "Silver Stainless Steel Table Cabinet",
    img: "assets/img/ss-table-cabinet.jpg", from: 25000, unit: "Piece", featured: true,
    short: "Under-counter storage cabinet with hinged doors and a working top.",
    long: "A laboratory storage cabinet with a flat working top and hinged doors below, made to sit against a wall as a run of base units. The carcass is double-skinned with a coved internal bottom so spillage does not collect in corners. Shelves are removable for cleaning and can be set at 50 mm pitch. Doors take a flush recessed handle and an optional key lock. We build these to your wall dimension rather than a fixed size, so the run finishes without a filler gap.",
    specs: [["Material","SS 304"],["Usage","Laboratory, QC room, production"],["Doors","Hinged, flush handle"],["Top","1.2 mm, 40 mm coved edge"],["Shelves","Removable, adjustable"],["Legs","Adjustable bullet feet"]],
    variants: [
      { name: "2-door cabinet", d: "1200 × 600 × 850 mm", price: 25000 },
      { name: "3-door cabinet", d: "1800 × 600 × 850 mm", price: 34000 },
      { name: "4-door cabinet", d: "2400 × 600 × 850 mm", price: 42000 },
      { name: "Custom length run", d: "Built to your wall dimension", price: null }
    ]
  },
  {
    slug: "cross-over-bench", cat: "furniture", name: "Cross Over Bench",
    img: null, from: 12000, unit: "Piece",
    short: "Change-room bench that separates the shoe-off and shoe-on side of an entry.",
    long: "A cross-over bench defines the clean boundary at a change room door. An operator sits on the outer side, removes outdoor footwear, swings across the bench and puts on plant footwear on the clean side — so the two floors never share a shoe. Built in SS 304 with a slatted or solid top, optional shoe racks underneath and a footwear stopper strip along the centre line.",
    specs: [["Material","SS 304"],["Top","Solid or slatted"],["Racks","Optional, both sides"],["Fixing","Floor mounted or free standing"],["Finish","Matt buff"]],
    variants: [
      { name: "2-seater bench", d: "900 mm long", price: 12000 },
      { name: "4-seater bench", d: "1500 mm long", price: 18000 },
      { name: "6-seater bench", d: "2100 mm long", price: 24000 },
      { name: "With shoe rack", d: "Any length, twin-tier rack", price: null }
    ]
  },
  {
    slug: "ss-locker", cat: "lockers", name: "Stainless Steel Locker",
    img: "assets/img/ss-locker.jpg", from: 60000, unit: "Piece", featured: true,
    short: "Multi-compartment personnel locker with hinged doors and key locks.",
    long: "A personnel locker for change rooms where powder-coated MS is not acceptable. The body is folded from SS 304 sheet with a fully welded and ground frame, hinged doors on concealed pins and a key lock per compartment. Each compartment has a louvred vent for air movement and a name-card holder. The unit stands on a 100 mm skirt so the floor can be washed under it, and can be bolted back-to-back in a double row.",
    specs: [["Material","Stainless Steel 304"],["Lock type","Key lock, per compartment"],["Door type","Hinged"],["Usage","Office, plant change room"],["Colour","Silver"],["Finish","Polished"]],
    variants: [
      { name: "6-compartment locker", d: "900 × 450 × 1800 mm", price: 34000 },
      { name: "12-compartment locker", d: "900 × 450 × 1800 mm", price: 46000 },
      { name: "18-compartment locker", d: "1200 × 450 × 1980 mm", price: 60000 },
      { name: "24-compartment locker", d: "1200 × 450 × 1980 mm", price: 72000 },
      { name: "Custom compartment layout", d: "Built to your drawing", price: null }
    ]
  },
  {
    slug: "ss-mobile-locker", cat: "lockers", name: "Stainless Steel Mobile Locker",
    img: "assets/img/ss-mobile-locker.jpg", from: 25000, unit: "Piece",
    short: "Castor-mounted locker bank that rolls out of the way for floor cleaning.",
    long: "The same locker construction on a heavy castor base, so a whole bank can be pulled clear of the wall during wash-down and pushed back afterwards. Two castors are braked. Sized for shift-wise personal storage in food and pharma units where the floor is cleaned every shift.",
    specs: [["Material","S.S. 304"],["Lock type","Key lock"],["Capacity","15 Litre per compartment"],["Castors","100 mm, 2 braked"],["Usage","Office, plant"],["Country of origin","Made in India"]],
    variants: [
      { name: "8-compartment mobile locker", d: "15 L compartments", price: 25000 },
      { name: "16-compartment mobile locker", d: "15 L compartments", price: 38000 },
      { name: "Mobile locker with tray shelf", d: "Top tray + 12 compartments", price: 44000 }
    ]
  },
  {
    slug: "storage-locker", cat: "lockers", name: "Document Storage Locker",
    img: null, from: 28000, unit: "Piece",
    short: "Full-height cupboard for batch records, tooling and change parts.",
    long: "A full-height two-door cupboard with adjustable shelves, used for batch record storage, change parts and tooling. Doors close on a full-length SS piano hinge and take a three-point lock. Interior shelves are removable and set on a 50 mm pitch. Where records must be traceable, we fit a sealed hasp point for a tamper tag.",
    specs: [["Material","SS 304"],["Shelves","4 adjustable"],["Lock","3-point, key"],["Hinge","Full-length piano hinge"],["Height","1980 mm standard"]],
    variants: [
      { name: "Single-door cupboard", d: "600 × 450 × 1980 mm", price: 28000 },
      { name: "2-door cupboard", d: "900 × 450 × 1980 mm", price: 38000 },
      { name: "2-door wide cupboard", d: "1200 × 500 × 1980 mm", price: 47000 }
    ]
  },
  {
    slug: "ss-mixing-tank", cat: "tanks", name: "Stainless Steel Mixing Tank",
    img: null, from: 85000, unit: "Piece", featured: true,
    short: "Agitated process tank from 50 L to 10,000 L with dished ends and CIP spray ball.",
    long: "A cylindrical mixing tank with a dished top and conical or dished bottom, agitator, and a top-mounted geared drive. Internal surfaces are polished to the finish your process needs — 180 grit as standard, mirror or electropolish where a product contact certificate is required. Standard build includes a CIP spray ball, a manway, level markings, a bottom outlet valve and adjustable legs. Jacket, insulation and cladding are added where heating or cooling is part of the process. Every tank leaves the shop hydro-tested with a dye-penetrant weld report.",
    specs: [["Material","SS 304 / SS 316 / SS 316L"],["Capacity range","50 L to 10,000 L"],["Internal finish","180 grit; mirror or EP optional"],["Agitator","Anchor, paddle, turbine or high-shear"],["Bottom","Conical or dished"],["Testing","Hydro test + DP weld report"]],
    variants: [
      { name: "50 L pilot tank", d: "Portable, castor legs", price: 85000 },
      { name: "200 L mixing tank", d: "Anchor agitator, 0.5 HP", price: 145000 },
      { name: "500 L mixing tank", d: "Anchor agitator, 1 HP", price: 210000 },
      { name: "1,000 L mixing tank", d: "Anchor + scraper, 2 HP", price: 320000 },
      { name: "2,000 L mixing tank", d: "Jacketed, 3 HP", price: 520000 },
      { name: "5,000 L mixing tank", d: "Jacketed + insulated", price: 940000 },
      { name: "10,000 L storage-mix tank", d: "Site-assembled", price: null }
    ]
  },
  {
    slug: "jacketed-vessel", cat: "tanks", name: "Jacketed Vessel",
    img: null, from: 165000, unit: "Piece",
    short: "Limpet or dimple-jacketed vessel for heating and cooling duty.",
    long: "A jacketed vessel for processes that need controlled heat transfer — syrup preparation, ointment bases, crystallisation. Choose a limpet coil jacket for steam duty at higher pressure, or a dimple jacket where the heat transfer area matters more than pressure. The jacket is pressure tested separately from the shell, and the whole vessel is insulated with 50 mm mineral wool and clad in SS 304 sheet.",
    specs: [["Jacket type","Limpet coil or dimple"],["Shell material","SS 316 / SS 316L"],["Design pressure","Up to 3.5 kg/cm² jacket"],["Insulation","50 mm mineral wool, SS clad"],["Testing","Shell and jacket tested separately"]],
    variants: [
      { name: "100 L jacketed vessel", d: "Limpet coil", price: 165000 },
      { name: "250 L jacketed vessel", d: "Limpet coil", price: 240000 },
      { name: "500 L jacketed vessel", d: "Dimple jacket", price: 385000 },
      { name: "1,000 L jacketed vessel", d: "Limpet + insulation", price: 610000 },
      { name: "2,000 L jacketed vessel", d: "Limpet + insulation", price: 890000 }
    ]
  },
  {
    slug: "ss-filling-vessel", cat: "pharma", name: "Stainless Steel Filling Vessel",
    img: "assets/img/ss-filling-vessel.jpg", from: 48000, unit: "Piece", featured: true,
    short: "Pressure-rated filling vessel with clamp lid, filter housing and outlet manifold.",
    long: "A portable filling vessel used to feed liquid filling machines. The clamped lid seals on a silicone gasket, and the vessel takes compressed air through a regulator and 0.2 micron filter so the product is pushed rather than pumped. Fitted with a pressure gauge, safety relief valve, sight glass and a bottom outlet with a tri-clamp connection. Mounted on a castor trolley so it moves between the preparation room and the filling line.",
    specs: [["Material","SS 316L product contact"],["Lid","Clamped, silicone gasket"],["Air filter","0.2 micron, sterilisable"],["Fittings","Tri-clamp, pressure gauge, relief valve"],["Mobility","Castor trolley, 2 braked"],["Finish","Mirror internal"]],
    variants: [
      { name: "25 L filling vessel", d: "Trolley mounted", price: 48000 },
      { name: "50 L filling vessel", d: "Trolley mounted", price: 62000 },
      { name: "100 L filling vessel", d: "Trolley mounted", price: 84000 },
      { name: "200 L filling vessel", d: "Fixed leg", price: 118000 }
    ]
  },
  {
    slug: "ss-hopper", cat: "pharma", name: "Stainless Steel Hopper",
    img: null, from: 32000, unit: "Piece",
    short: "Conical feed hopper with a clamped lid, sized to your machine inlet.",
    long: "A conical hopper that sits above a tablet press, capsule filler or packing machine and feeds material by gravity. The cone angle is set to the flow characteristic of your granule so it does not bridge. Internal welds are ground and polished to a continuous radius. The outlet is made to your machine's inlet diameter, and a butterfly valve or slide gate can be fitted.",
    specs: [["Material","SS 316 / SS 304"],["Cone angle","60° standard, set to flow"],["Lid","Clamped, hinged option"],["Outlet","To machine inlet dia."],["Finish","Mirror internal, matt external"]],
    variants: [
      { name: "25 L hopper", d: "With stand", price: 32000 },
      { name: "50 L hopper", d: "With stand", price: 44000 },
      { name: "100 L hopper", d: "With stand + valve", price: 68000 },
      { name: "200 L hopper", d: "Castor stand + valve", price: 96000 }
    ]
  },
  {
    slug: "ss-scoop", cat: "pharma", name: "Stainless Steel Scoop",
    img: null, from: 850, unit: "Piece",
    short: "Seamless one-piece scoop with a closed handle — no crevice, no trapped powder.",
    long: "A dispensing scoop pressed and welded so the handle is sealed at both ends and the bowl has no internal corner. That matters in a dispensing booth: an open handle tube traps powder and cannot be verified as clean. Supplied polished inside and out, and marked with a laser-etched ID number if you keep a cleaning log.",
    specs: [["Material","SS 316L"],["Handle","Closed, sealed both ends"],["Finish","Mirror polished both sides"],["Marking","Laser etched ID (optional)"],["Sizes","50 ml to 2,000 ml"]],
    variants: [
      { name: "50 ml scoop", d: "Short handle", price: 850 },
      { name: "100 ml scoop", d: "Short handle", price: 1050 },
      { name: "250 ml scoop", d: "Standard handle", price: 1400 },
      { name: "500 ml scoop", d: "Standard handle", price: 1850 },
      { name: "1,000 ml scoop", d: "Long handle", price: 2600 },
      { name: "2,000 ml scoop", d: "Long handle", price: 3800 }
    ]
  },
  {
    slug: "ss-bucket", cat: "pharma", name: "Stainless Steel Bucket",
    img: null, from: 1600, unit: "Piece",
    short: "Seamless drawn bucket with a rolled rim and a swing handle.",
    long: "A deep-drawn bucket with no side seam, a rolled top rim and a swing handle on welded lugs. Because the body is drawn rather than rolled and welded, there is no vertical seam to hold residue. Used for material transfer, sampling and cleaning solution in GMP areas.",
    specs: [["Material","SS 304 / SS 316"],["Construction","Deep drawn, seamless body"],["Rim","Rolled"],["Handle","Swing, welded lugs"],["Sizes","5 L to 30 L"]],
    variants: [
      { name: "5 L bucket", d: "Seamless", price: 1600 },
      { name: "10 L bucket", d: "Seamless", price: 2100 },
      { name: "15 L bucket", d: "Seamless", price: 2600 },
      { name: "20 L bucket", d: "Seamless", price: 3200 },
      { name: "30 L bucket", d: "With lid", price: 4400 }
    ]
  },
  {
    slug: "ss-dustbin-15l", cat: "dustbins", name: "15 Litre Stainless Steel Dustbin",
    img: "assets/img/ss-dustbin-15l.jpg", from: 3200, unit: "Piece", featured: true,
    short: "Pedal-operated bin with a removable inner liner and a soft-close lid.",
    long: "A pedal bin in SS 304 with a lift-out inner bucket, so the outer body never contacts waste and stays presentable. The pedal linkage is a simple bent rod running inside the body — nothing exposed to catch on a mop. The lid closes on a damper so it does not clatter in quiet areas. For segregation, we supply the same body with colour-coded lids and vinyl labelling.",
    specs: [["Material","SS 304"],["Operation","Foot pedal"],["Liner","Removable inner bucket"],["Lid","Soft close"],["Base","Non-slip ring"],["Capacity","15 L (5 L to 100 L available)"]],
    variants: [
      { name: "5 L pedal bin", d: "Bedside / office", price: 1800 },
      { name: "15 L pedal bin", d: "Standard plant bin", price: 3200 },
      { name: "30 L pedal bin", d: "Corridor bin", price: 4900 },
      { name: "50 L pedal bin", d: "Production area", price: 7200 },
      { name: "100 L pedal bin", d: "Bulk waste", price: 11500 },
      { name: "Segregation set (4 bins)", d: "Colour-coded lids + labels", price: 16800 }
    ]
  },
  {
    slug: "garbage-trolley", cat: "dustbins", name: "Garbage Collection Trolley",
    img: null, from: 14500, unit: "Piece",
    short: "Wheeled waste trolley for moving bagged waste out of production areas.",
    long: "A four-wheel trolley that carries one or more bin bodies, used to collect waste from a whole floor in a single round. The frame is SS 304 pipe, and the wheels are 150 mm non-marking castors with two brakes. A lid keeps waste covered while it moves through corridors, which most plant audits ask for.",
    specs: [["Material","SS 304"],["Castors","150 mm non-marking, 2 braked"],["Lid","Hinged, full cover"],["Handle","Push bar, both ends"],["Capacity","100 L to 400 L"]],
    variants: [
      { name: "100 L single-bin trolley", d: "One body", price: 14500 },
      { name: "200 L trolley", d: "One body", price: 21000 },
      { name: "2 × 100 L segregation trolley", d: "Two bodies", price: 26500 },
      { name: "400 L bulk trolley", d: "Push bar both ends", price: 38000 }
    ]
  },
  {
    slug: "liquid-soap-dispenser", cat: "utility", name: "Liquid Soap Dispenser",
    img: null, from: 2400, unit: "Piece",
    short: "Elbow or foot-operated dispenser so clean hands never touch the unit.",
    long: "A wall-mounted dispenser with a stainless body and a refillable reservoir. The elbow-operated lever is the usual choice at a change-room wash station; where hands must stay entirely free, we supply the same reservoir on a floor stand with a foot pedal. The reservoir lifts out for cleaning and the nozzle unscrews without a tool.",
    specs: [["Material","SS 304"],["Operation","Elbow lever or foot pedal"],["Capacity","500 ml to 2 L"],["Mounting","Wall plate or floor stand"],["Reservoir","Removable, tool-free nozzle"]],
    variants: [
      { name: "500 ml elbow dispenser", d: "Wall mounted", price: 2400 },
      { name: "1 L elbow dispenser", d: "Wall mounted", price: 3100 },
      { name: "2 L elbow dispenser", d: "Wall mounted", price: 4200 },
      { name: "Foot-operated stand dispenser", d: "5 L reservoir", price: 9800 }
    ]
  },
  {
    slug: "ss-drain-trap", cat: "utility", name: "SS Drain Trap",
    img: null, from: 5600, unit: "Piece",
    short: "Floor drain with a removable basket and a deep water seal.",
    long: "A floor drain trap set into the finished floor, with a lift-out perforated basket that catches solids before they reach the line. The trap body holds a deep water seal so drain air does not come back into the room, and the grating sits flush so a trolley wheel rolls over it. Supplied with a puddle flange for tiled or epoxy floors.",
    specs: [["Material","SS 304 / SS 316"],["Basket","Removable, perforated"],["Seal","Deep water seal"],["Grating","Flush, load bearing"],["Flange","Puddle flange included"]],
    variants: [
      { name: '4" square drain trap', d: "100 × 100 mm", price: 5600 },
      { name: '6" square drain trap', d: "150 × 150 mm", price: 7900 },
      { name: '8" square drain trap', d: "200 × 200 mm", price: 11200 },
      { name: "Channel drain, per metre", d: "Grating + slope", price: null }
    ]
  }
];

/* ---------- admin CRUD layer (browser-local only) ----------
   Products added/edited/removed through admin.html are stored in this
   browser's localStorage. They are NOT shared with other visitors or
   devices — there is no server behind this site to sync them to. */
const LS_CUSTOM    = "anuyog_admin_products";  // array of full product objects added via admin
const LS_OVERRIDE  = "anuyog_admin_overrides"; // { slug: {partial fields} } edits to built-in products
const LS_REMOVED   = "anuyog_admin_removed";   // [slug, ...] built-in products hidden via admin
const LS_SLIDESHOW = "anuyog_admin_slideshow"; // [{img, caption}, ...] homepage slideshow, or null for auto

function lsGet(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
  catch (e) { return fallback; }
}
function lsSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch (e) { return false; }
}

/* ---------- Firebase sync (see assets/firebase.js) ----------
   adminReady() fetches the shared catalogue once per page load and merges
   it into the local cache above, so every page (not just admin.html) shows
   the same products to every visitor. ADMIN_SYNC_STATUS tells admin.html
   whether it's actually talking to Firebase or just working offline/local. */
let ADMIN_SYNC_STATUS = "pending"; // "pending" | "synced" | "offline"
let _adminReadyPromise = null;
function adminReady() {
  if (!_adminReadyPromise) {
    _adminReadyPromise = fbLoad().then(remote => {
      if (remote === undefined) { ADMIN_SYNC_STATUS = "offline"; return; } // fetch failed
      if (remote) {
        lsSet(LS_OVERRIDE, remote.overrides || {});
        lsSet(LS_REMOVED, remote.removed || []);
        lsSet(LS_CUSTOM, remote.custom || []);
        lsSet(LS_SLIDESHOW, remote.slideshow || null);
      }
      ADMIN_SYNC_STATUS = "synced";
    }).catch(() => { ADMIN_SYNC_STATUS = "offline"; });
  }
  return _adminReadyPromise;
}
async function persistAdminData() {
  const data = {
    overrides: lsGet(LS_OVERRIDE, {}), removed: lsGet(LS_REMOVED, []),
    custom: lsGet(LS_CUSTOM, []), slideshow: lsGet(LS_SLIDESHOW, null)
  };
  const ok = await fbSave(data);
  ADMIN_SYNC_STATUS = ok ? "synced" : "offline";
  return ok;
}

/* ---------- homepage slideshow ----------
   Defaults to the first 8 products with a real photo. Overridden once
   someone saves a custom list in admin.html. */
function getSlideshow() {
  const custom = lsGet(LS_SLIDESHOW, null);
  if (custom && custom.length) return custom;
  return getAllProducts().filter(p => p.img).slice(0, 8).map(p => ({ img: p.img, caption: p.name }));
}
function adminSaveSlideshow(slides) { lsSet(LS_SLIDESHOW, slides); return persistAdminData(); }
function adminResetSlideshow() { lsSet(LS_SLIDESHOW, null); return persistAdminData(); }

/* ---------- analytics (page views + inquiries), logged to Firebase ---------- */
function logPageView() {
  const page = (location.pathname.split("/").pop() || "index.html");
  fbPush("analytics/views", { page: page });
}
function logInquiry(payload) { return fbPush("analytics/inquiries", payload); }
async function fetchAnalytics() {
  const [viewsRaw, inqRaw] = await Promise.all([fbGet("analytics/views"), fbGet("analytics/inquiries")]);
  const views = viewsRaw ? Object.values(viewsRaw) : [];
  const inquiries = inqRaw ? Object.entries(inqRaw).map(([id, v]) => Object.assign({ id }, v)) : [];
  inquiries.sort((a, b) => (b.ts || 0) - (a.ts || 0));
  return { views, inquiries };
}

function slugify(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function uniqueSlug(base) {
  const taken = new Set(getAllProducts().map(p => p.slug));
  let s = slugify(base) || "product";
  let out = s, n = 2;
  while (taken.has(out)) { out = s + "-" + n++; }
  return out;
}
/* Returns the full product list: built-ins (minus removed, plus overrides) + custom-added. */
function getAllProducts() {
  const removed   = lsGet(LS_REMOVED, []);
  const overrides = lsGet(LS_OVERRIDE, {});
  const custom    = lsGet(LS_CUSTOM, []);
  const base = PRODUCTS
    .filter(p => !removed.includes(p.slug))
    .map(p => overrides[p.slug] ? Object.assign({}, p, overrides[p.slug]) : p);
  return base.concat(custom);
}
function isCustomProduct(slug) { return lsGet(LS_CUSTOM, []).some(p => p.slug === slug); }
function isEditedProduct(slug) { return !!lsGet(LS_OVERRIDE, {})[slug]; }

function adminSaveProduct(data, editingSlug) {
  const custom = lsGet(LS_CUSTOM, []);
  const isBuiltIn = editingSlug && PRODUCTS.some(p => p.slug === editingSlug);
  let savedSlug = editingSlug;

  if (editingSlug && isBuiltIn) {
    const overrides = lsGet(LS_OVERRIDE, {});
    overrides[editingSlug] = data;
    lsSet(LS_OVERRIDE, overrides);
  } else if (editingSlug) {
    const i = custom.findIndex(p => p.slug === editingSlug);
    if (i > -1) custom[i] = Object.assign({}, custom[i], data, { slug: editingSlug });
    lsSet(LS_CUSTOM, custom);
  } else {
    const slug = uniqueSlug(data.name);
    custom.push(Object.assign({ slug }, data));
    lsSet(LS_CUSTOM, custom);
    savedSlug = slug;
  }
  return persistAdminData().then(() => savedSlug);
}
function adminDeleteProduct(slug) {
  if (PRODUCTS.some(p => p.slug === slug)) {
    const removed = lsGet(LS_REMOVED, []);
    if (!removed.includes(slug)) removed.push(slug);
    lsSet(LS_REMOVED, removed);
    const overrides = lsGet(LS_OVERRIDE, {});
    delete overrides[slug];
    lsSet(LS_OVERRIDE, overrides);
  } else {
    lsSet(LS_CUSTOM, lsGet(LS_CUSTOM, []).filter(p => p.slug !== slug));
  }
  return persistAdminData();
}
function adminRestoreBuiltIns() {
  lsSet(LS_REMOVED, []);
  lsSet(LS_OVERRIDE, {});
  return persistAdminData();
}
function adminClearCustom() {
  lsSet(LS_CUSTOM, []);
  return persistAdminData();
}

/* helpers used across pages — now read through the admin layer */
const byCat  = s => getAllProducts().filter(p => p.cat === s);
const bySlug = s => getAllProducts().find(p => p.slug === s);
const catBySlug = s => CATEGORIES.find(c => c.slug === s);
const money = n => n == null ? "On request" : "₹ " + n.toLocaleString("en-IN");
