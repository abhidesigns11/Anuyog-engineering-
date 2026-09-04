/* Firebase Realtime Database sync — plain REST calls, no SDK needed.
   This is what makes admin.html changes visible to every visitor instead of
   just the browser that made them, and what powers the visitor/inquiry
   analytics on the admin page.

   IMPORTANT: for any of this to work, the database's rules must allow
   public read/write on these paths, e.g.:
     {
       "rules": {
         "catalogueAdmin": { ".read": true, ".write": true },
         "analytics":      { ".read": true, ".write": true },
         ".read": false, ".write": false
       }
     }
   Anyone with the database URL and open rules can write to it — there is no
   login on this panel or on the analytics logging. Tighten the rules (e.g.
   Firebase Auth) before this goes fully public if that matters for your use case. */

const FB_URL  = "https://anuyog-engineering-default-rtdb.asia-southeast1.firebasedatabase.app";
const FB_PATH = "catalogueAdmin"; // where product add/edit/remove + slideshow settings live

/* Generic REST helpers, usable for any path (catalogue data, analytics, etc). */
async function fbGet(path) {
  try {
    const res = await fetch(`${FB_URL}/${path}.json`, { cache: "no-store" });
    if (!res.ok) throw new Error("get " + res.status);
    return await res.json(); // null if nothing saved there yet
  } catch (e) {
    console.warn("Firebase read failed for " + path, e);
    return undefined; // undefined = "couldn't reach it", different from null = "reached it, empty"
  }
}
async function fbPut(path, data) {
  try {
    const res = await fetch(`${FB_URL}/${path}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("put " + res.status);
    return true;
  } catch (e) {
    console.warn("Firebase write failed for " + path, e);
    return false;
  }
}
/* Appends a new record under `path` with an auto-generated key (like a log line). */
async function fbPush(path, data) {
  try {
    const res = await fetch(`${FB_URL}/${path}.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({ ts: Date.now() }, data))
    });
    if (!res.ok) throw new Error("push " + res.status);
    return await res.json(); // { name: "-Nxxxxxxxx" }
  } catch (e) {
    console.warn("Firebase log failed for " + path, e);
    return null;
  }
}

/* Back-compat wrappers used by the catalogue admin layer in data.js */
async function fbLoad() { return fbGet(FB_PATH); }
async function fbSave(data) { return fbPut(FB_PATH, data); }
