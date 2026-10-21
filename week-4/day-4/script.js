// Week 4 Day 4 warm-up — fetch a JSON file (about 25 minutes)
// Real sites don't type their data into the code. They FETCH it from a file or a server.
// This page must be opened with Live Server for fetch to work.


// ---------- Step 1: Some things take time ----------
// Guess the order these two lines print in. Then save and check the console.
setTimeout(function () {
  console.log("Order up!");
}, 2000);
console.log("Taking your order...");
// The browser doesn't wait. It moves on, and runs the timer's code LATER.
// fetch works the same way: asking for a file takes time.


// ---------- Step 2: fetch menu.json ----------
// "await" means: wait here until this part is done, then keep going.
// You can only use await inside an "async" function.
async function loadMenu() {
  const response = await fetch("menu.json");   // 1. ask for the file
  const menu = await response.json();          // 2. read it as JSON → a real array
  console.log("menu from the file:", menu);

  // ---------- Step 3 ----------
  // TODO: Use forEach to make a Bootstrap card for every item in #menu-area
  // (same as Tuesday's warm-up: createElement, className = "card p-3", textContent, appendChild).
}

loadMenu();


// ---------- Step 4 ----------
// TODO: Open menu.json and change it to YOUR truck's menu. Save. The page shows the new menu,
// and you didn't change any JavaScript. That's why data lives in its own file.


// ---------- Extra practice (if you finish early) ----------
// 1. Change "menu.json" to "menu.jsn" (a typo). What does the console say?
// 2. Show a message on the page when the file can't be found:
//    if (!response.ok) { ...show a message...; return; }   (put it right after the fetch line)
