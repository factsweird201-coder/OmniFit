#!/usr/bin/env node
// Make an OmniFit Pro unlock code from a buyer's purchase code.
//   node tools/unlock.mjs OF-7K3Q      ->  7K3Q-F5L9
// Check the payment arrived in PayPal (with that purchase code in the note) first, then email the unlock code to the
// payer's PayPal email. Must match ucCheck / UC_SALT in index.html.
const UC_ABC = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const UC_SALT = "omnifit-pro-v1:Kx9!tq";
function ucCheck(id) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57; const str = id + "|" + UC_SALT;
  for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  let n = 4294967296 * (2097151 & h2) + (h1 >>> 0), out = "";
  for (let i = 0; i < 4; i++) { out += UC_ABC[n % 32]; n = Math.floor(n / 32); }
  return out;
}
const args = process.argv.slice(2);
if (!args.length) { console.log("Usage: node tools/unlock.mjs OF-7K3Q [OF-ABCD ...]"); process.exit(1); }
for (const a of args) {
  const id = a.toUpperCase().replace(/^OF-?/, "").replace(/[^0-9A-Z]/g, "");
  if (id.length !== 4 || ![...id].every(c => UC_ABC.includes(c))) { console.log(`${a}: not a purchase code (looks like OF-7K3Q)`); continue; }
  console.log(`OF-${id}  ->  unlock code: ${id}-${ucCheck(id)}`);
}
