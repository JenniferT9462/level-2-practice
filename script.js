// TODO: Variables
let truckName = "Bayou Boudin & Bites";
let itemsSoldToday = 45;
let isTruckOpen = true;

console.log(truckName, typeof truckName);
console.log(itemsSoldToday, typeof itemsSoldToday);
console.log(isTruckOpen, typeof isTruckOpen);
// TODO: An array
let menuItems = ["Crawfish Étouffée", "Shrimp & Grits", "Chicken & Sausage Gumbo", "Pralines"];

console.log("First item:", menuItems[0]);
console.log("Last item:", menuItems[menuItems.length - 1]);
console.log("Total items:", menuItems.length);
// TODO: An object
let featuredDish = {
  name: "Spicy Seafood Gumbo",
  price: 14.50,
  spicy: true
};

console.log("Dish Name (dot notation):", featuredDish.name);
console.log("Dish Price (bracket notation):", featuredDish["price"]);
// TODO: A function
function orderTotal(price, quantity) {
  return price * quantity;
}

// My guess for orderTotal(4.5, 3) is 13.5
console.log("Order Total Result:", orderTotal(4.5, 3));