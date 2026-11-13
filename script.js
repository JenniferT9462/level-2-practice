// TODO: Step 1 - Make an object for your truck with a name and a describe() method
const myTruck = {
  name: "Bayou Boudin & Bites",
  describe: function () {
    return `${this.name} serves up authentic Creole and Cajun favorites hot off the grill!`;
  }
};

console.log(myTruck.describe());
// TODO: Step 3 - Write a JSON string, parse it, and log one property
const menuItemJSON = '{"name": "Crawfish Étouffée", "price": 15.50, "spicy": true}';
console.log("Original JSON text:", menuItemJSON);

const parsedItem = JSON.parse(menuItemJSON);
console.log("Parsed JS Object:", parsedItem);
console.log("Item Price:", parsedItem.price);
// TODO: Step 4 - Stringify it back and check typeof
const backToJSON = JSON.stringify(parsedItem);
console.log("Stringified back:", backToJSON);
console.log("Type after stringify:", typeof backToJSON); // Should log: string