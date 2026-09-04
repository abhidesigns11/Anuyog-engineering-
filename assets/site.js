/* Anuyog Engineering — shared behaviour.
   Renders header + drawer + footer on every page, and runs the inquiry flow. */

const PAGE = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const MAIN_LINKS = [
  ["index.html", "Home"],
  ["products.html", "All products"],
  ["about.html", "About us"],
  ["quality.html", "Quality & process"],
  ["contact.html", "Contact"]
];

/* ---------- header + drawer ---------- */
function buildHeader() {
  const cur = f => (f === PAGE ? ' aria-current="page"' : "");
  const catLinks = CATEGORIES.map(c =>
    `<a href="category.html?c=${c.slug}">${esc(c.name)}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
  <header class="hdr">
    <div class="hdr-top"><div class="wrap">
      <span>${esc(COMPANY.city)} &nbsp;·&nbsp; ${esc(COMPANY.hours)}</span>
      <span><a href="tel:${COMPANY.phoneHref}">${esc(COMPANY.phone)}</a>
        &nbsp;·&nbsp; <a href="mailto:${COMPANY.email}">${esc(COMPANY.email)}</a></span>
    </div></div>
    <div class="hdr-bar">
      <a class="brand" href="index.html">
        <img class="mark-img" src="assets/logo.png" alt="Anuyog Engineering">
        <span><b>Anuyog Engineering</b><span>Manufacturers &amp; Fabricators</span></span>
      </a>
      <nav class="nav-d">
        ${MAIN_LINKS.map(([f, t]) => `<a href="${f}"${cur(f)}>${t}</a>`).join("")}
        <a class="btn brass sm" href="inquiry.html">Send inquiry</a>
      </nav>
      <button class="burger" id="burger" aria-expanded="false" aria-controls="drawer" aria-label="Open menu">
        <i></i><i></i><i></i>
      </button>
    </div>
  </header>

  <div class="scrim" id="scrim" hidden></div>
  <aside class="drawer" id="drawer" aria-hidden="true" aria-label="Site menu">
    <div class="drawer-hd">
      <strong>Menu</strong>
      <button class="x" id="drawerClose" aria-label="Close menu">&times;</button>
    </div>
    <nav>
      <a href="index.html"${cur("index.html")}>Home</a>
      <button class="acc-btn" id="accBtn" aria-expanded="false" aria-controls="accPanel">Products by category</button>
      <div class="acc-panel" id="accPanel">
        ${catLinks}
        <a href="products.html"${cur("products.html")}>View the full range</a>
      </div>
      <a href="about.html"${cur("about.html")}>About us</a>
      <a href="quality.html"${cur("quality.html")}>Quality &amp; process</a>
      <a href="inquiry.html"${cur("inquiry.html")}>Send an inquiry</a>
      <a href="contact.html"${cur("contact.html")}>Contact &amp; location</a>
      <a href="privacy.html"${cur("privacy.html")}>Privacy policy</a>
      <a href="terms.html"${cur("terms.html")}>Terms &amp; conditions</a>
    </nav>
    <div class="drawer-foot">
      <a class="btn wide" href="tel:${COMPANY.phoneHref}">Call ${esc(COMPANY.phone)}</a>
      <a class="btn ghost wide" href="mailto:${COMPANY.email}">Email us</a>
    </div>
  </aside>`);

  const burger = document.getElementById("burger");
  const drawer = document.getElementById("drawer");
  const scrim  = document.getElementById("scrim");

  const setDrawer = open => {
    drawer.classList.toggle("on", open);
    scrim.hidden = false;
    scrim.classList.toggle("on", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) drawer.querySelector("a,button").focus();
  };

  burger.addEventListener("click", () => setDrawer(!drawer.classList.contains("on")));
  scrim.addEventListener("click", () => setDrawer(false));
  document.getElementById("drawerClose").addEventListener("click", () => setDrawer(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setDrawer(false); });

  const accBtn = document.getElementById("accBtn");
  const accPanel = document.getElementById("accPanel");
  accBtn.addEventListener("click", () => {
    const open = accPanel.classList.toggle("on");
    accBtn.setAttribute("aria-expanded", String(open));
  });
  /* open the category list by default when the visitor is already browsing products */
  if (["products.html", "category.html", "product.html"].includes(PAGE)) accBtn.click();
}

/* ---------- footer + sticky action bar ---------- */
function buildFooter() {
  const y = new Date().getFullYear();
  document.body.insertAdjacentHTML("beforeend", `
  <footer class="ftr">
    <div class="wrap">
      <div class="ftr-grid">
        <div>
          <h4>${esc(COMPANY.name)}</h4>
          <p>Fabricators of stainless and mild steel equipment for pharmaceutical, food,
             chemical and commercial kitchen plants. Working out of Vapi since ${COMPANY.founded},
             building to drawing and to site measurement.</p>
          <p class="note">GST ${esc(COMPANY.gst)}<br>Udyam ${esc(COMPANY.udyam)}</p>
        </div>
        <div>
          <h4>Categories</h4>
          <ul>${CATEGORIES.map(c => `<li><a href="category.html?c=${c.slug}">${esc(c.name)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="quality.html">Quality &amp; process</a></li>
            <li><a href="products.html">All products</a></li>
            <li><a href="inquiry.html">Send an inquiry</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="privacy.html">Privacy policy</a></li>
            <li><a href="terms.html">Terms &amp; conditions</a></li>
            <li><a href="admin.html">Manage products</a></li>
          </ul>
        </div>
        <div>
          <h4>Reach us</h4>
          <p>${esc(COMPANY.contactPerson)}<br>${esc(COMPANY.address)}</p>
          <p><a href="tel:${COMPANY.phoneHref}">${esc(COMPANY.phone)}</a><br>
             <a href="tel:${COMPANY.phone2Href}">${esc(COMPANY.phone2)}</a><br>
             <a href="mailto:${COMPANY.email}">${esc(COMPANY.email)}</a><br>
             <span class="note">${esc(COMPANY.hours)}</span></p>
        </div>
      </div>
      <div class="ftr-bot">
        <span>© ${y} ${esc(COMPANY.name)}. All rights reserved.</span>
        <span>Prices shown are indicative and confirmed only on a written quotation.</span>
      </div>
    </div>
  </footer>

  <div class="actionbar">
    <a class="btn ghost" href="tel:${COMPANY.phoneHref}">Call</a>
    <a class="btn ghost" href="https://wa.me/${COMPANY.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
    <a class="btn brass" href="inquiry.html">Send inquiry</a>
  </div>`);
}

/* ---------- product card ---------- */
function thumb(p) {
  return p.img
    ? `<img src="${p.img}" alt="${esc(p.name)}" loading="lazy">`
    : `<span class="noimg"><span>${esc(p.name.split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase())}</span></span>`;
}

function card(p) {
  return `<article class="card">
    <a class="ph" href="product.html?p=${p.slug}" aria-label="${esc(p.name)}">${thumb(p)}</a>
    <div class="card-b">
      <h3><a href="product.html?p=${p.slug}">${esc(p.name)}</a></h3>
      <div class="price">${money(p.from)} <small>onwards / ${esc(p.unit)}</small></div>
      <p class="sm-txt">${esc(p.short)}</p>
      <div class="vtag">${p.variants.length} size and capacity options</div>
      <a class="btn brass sm" href="product.html?p=${p.slug}">View options &amp; inquire</a>
    </div>
  </article>`;
}

/* ---------- horizontal slider controls ---------- */
function wireRail(id) {
  const rail = document.getElementById(id);
  if (!rail) return;
  const step = () => Math.max(rail.clientWidth * 0.8, 240);
  document.querySelectorAll(`[data-rail="${id}"]`).forEach(b => {
    b.addEventListener("click", () => rail.scrollBy({ left: b.dataset.dir === "next" ? step() : -step(), behavior: "smooth" }));
  });
}

/* ---------- inquiry modal ---------- */
function buildModal() {
  document.body.insertAdjacentHTML("beforeend", `
  <div class="modal" id="inqModal" role="dialog" aria-modal="true" aria-labelledby="inqTitle">
    <div class="modal-box">
      <div class="modal-hd">
        <h3 id="inqTitle">Send an inquiry</h3>
        <button class="x" id="inqClose" aria-label="Close">&times;</button>
      </div>
      <p class="note" id="inqFor"></p>
      <form id="inqForm" novalidate>
        <div class="field"><label for="f-name">Your name</label><input id="f-name" name="name" required autocomplete="name"></div>
        <div class="field"><label for="f-company">Company</label><input id="f-company" name="company" autocomplete="organization"></div>
        <div class="field"><label for="f-phone">Phone or WhatsApp</label><input id="f-phone" name="phone" type="tel" required autocomplete="tel"></div>
        <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email"></div>
        <div class="field"><label for="f-qty">Quantity required</label><input id="f-qty" name="qty" inputmode="numeric" value="1"></div>
        <div class="field"><label for="f-msg">Sizes, material grade or drawing details</label><textarea id="f-msg" name="msg" rows="4"></textarea></div>
        <button class="btn brass wide" type="submit">Send inquiry</button>
        <p class="note" style="margin-top:10px">We reply within one working day. Your details are used only to
          answer this inquiry — see our <a href="privacy.html">privacy policy</a>.</p>
      </form>
      <div id="inqDone" hidden></div>
    </div>
  </div>`);

  const modal = document.getElementById("inqModal");
  const form  = document.getElementById("inqForm");
  const done  = document.getElementById("inqDone");
  const close = () => { modal.classList.remove("on"); document.body.style.overflow = ""; };

  document.getElementById("inqClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.name.trim() || !d.phone.trim()) {
      alert("Please add your name and a phone number so we can reply.");
      return;
    }
    const subject = "Inquiry: " + (window.__inqItem || "General");
    const body =
      `Product: ${window.__inqItem || "General inquiry"}\n` +
      `Quantity: ${d.qty}\n\nName: ${d.name}\nCompany: ${d.company}\n` +
      `Phone: ${d.phone}\nEmail: ${d.email}\n\nDetails:\n${d.msg}`;
    form.hidden = true;
    done.hidden = false;
    logInquiry({
      item: window.__inqItem || "General inquiry",
      name: d.name, company: d.company || "", phone: d.phone,
      email: d.email || "", qty: d.qty || "", msg: d.msg || "",
      page: (location.pathname.split("/").pop() || "index.html")
    });
    done.innerHTML = `<div class="ok-msg">Thanks, ${esc(d.name)}. Your inquiry is ready to send.
      This site is a static page with no server behind it, so pick how you want it to reach us —
      both options carry the details you just filled in.</div>
      <div style="display:grid;gap:9px;margin-top:14px">
        <a class="btn brass wide" href="https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(body)}" target="_blank" rel="noopener">Send on WhatsApp</a>
        <a class="btn ghost wide" href="mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}">Send by email</a>
        <a class="btn ghost wide" href="tel:${COMPANY.phoneHref}">Call ${esc(COMPANY.phone)}</a>
      </div>`;
  });
}

function openInquiry(itemLabel) {
  window.__inqItem = itemLabel || "General inquiry";
  const modal = document.getElementById("inqModal");
  document.getElementById("inqFor").textContent =
    itemLabel ? "About: " + itemLabel : "Tell us what you need and we will quote it.";
  document.getElementById("inqForm").hidden = false;
  document.getElementById("inqDone").hidden = true;
  modal.classList.add("on");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("f-name").focus(), 60);
}

/* ---------- boot ---------- */
/* ---------- WhatsApp floating action button ---------- */
function buildWhatsAppFab() {
  document.body.insertAdjacentHTML("beforeend", `
  <a class="wa-fab" href="https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Anuyog Engineering, I'd like to ask about your products.")}"
     target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4C9.4 4 4 9.4 4 16c0 2.2.6 4.2 1.6 6L4 28l6.2-1.6c1.7.9 3.7 1.5 5.8 1.5 6.6 0 12-5.4 12-12S22.6 4 16 4z" fill="#fff"/>
      <path d="M16 5.4C10.2 5.4 5.4 10.2 5.4 16c0 1.9.5 3.7 1.4 5.3l-1 3.8 3.9-1c1.5.8 3.2 1.3 5.1 1.3 5.8 0 10.6-4.8 10.6-10.6S21.8 5.4 16 5.4z" fill="#25D366"/>
      <path d="M12.1 10.4c-.3-.6-.5-.6-.8-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.3 2.4 3.8 6 5.2 3 1.2 3.6 1 4.2.9.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.4-.3-.2-1.9-1-2.2-1s-.5-.1-.7.1c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.9-1-2.6z" fill="#fff"/>
    </svg>
  </a>`);
}

/* ---------- hero slideshow (fade in / fade out) ---------- */
function buildHeroSlideshow() {
  const el = document.getElementById("heroSlides");
  if (!el) return;
  const slides = getSlideshow();
  if (!slides.length) return;

  el.innerHTML = slides.map((s, i) =>
    `<img class="hslide${i === 0 ? " on" : ""}" src="${s.img}" alt="${esc(s.caption || "")}">`).join("");
  const capEl = document.getElementById("heroCaption");
  const setCaption = i => { if (capEl) capEl.textContent = (slides[i].caption || "") + " — one of " + getAllProducts().length + " products in the range."; };
  setCaption(0);

  const imgs = el.querySelectorAll(".hslide");
  let idx = 0;
  setInterval(() => {
    imgs[idx].classList.remove("on");
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add("on");
    setCaption(idx);
  }, 3500);
}

document.addEventListener("DOMContentLoaded", async () => {
  if (!document.querySelector('link[rel="icon"]')) {
    const l = document.createElement("link");
    l.rel = "icon"; l.type = "image/svg+xml"; l.href = "assets/favicon.svg";
    document.head.appendChild(l);
  }
  buildHeader();
  buildFooter();
  buildModal();
  buildWhatsAppFab();
  requestAnimationFrame(() => document.body.classList.add("ready"));
  if (!location.pathname.endsWith("admin.html")) logPageView();
  await adminReady();
  buildHeroSlideshow();
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-inquire]");
    if (t) { e.preventDefault(); openInquiry(t.dataset.inquire); }
  });
});
