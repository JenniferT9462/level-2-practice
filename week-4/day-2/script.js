// Week 4 Day 2 warm-up — Bootstrap cards made by JavaScript (about 20 minutes)
// JavaScript can add Bootstrap classes too. className sets an element's classes.

// TODO first: change this to YOUR truck's menu.
const menu = [
  { name: "Taco", price: 4.5 },
  { name: "Burrito", price: 9 },
  { name: "Nachos", price: 6.25 },
];

const area = document.getElementById("card-area");


// ---------- Example: ONE card ----------
const card = document.createElement("div");
card.className = "card p-3";          // Bootstrap classes, set from JavaScript
card.textContent = menu[0].name;
area.appendChild(card);


// ---------- Step 1 ----------
// TODO: Use forEach to make a card for EVERY menu item, showing its name and price.
// Then delete the example card code above.


// ---------- Step 2 ----------
// TODO: Add more Bootstrap classes to each card, for example:
//   "card p-3 text-center border-primary"   or   "card p-3 bg-light shadow-sm"
// Save and watch the page change.


// ---------- Extra practice (if you finish early) ----------
// Give cheap items (under $5) a different class than the others. (forEach + if)
