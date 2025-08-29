// ==================== Part 1: Variables & Conditionals ====================
let age = 20;
const userName = "Tunmise";

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ==================== Part 2: Functions ====================
// Function 1: greet user
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function 2: calculate square
function squareNumber(num) {
  return num * num;
}

console.log(greetUser(userName));
console.log("Square of 4 is:", squareNumber(4));

// ==================== Part 3: Loops ====================
// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}

// ==================== Part 4: DOM Interactions ====================
// 1. Change text content
document.getElementById("btnChangeText").addEventListener("click", function() {
  document.getElementById("message").textContent = "The text has been changed!";
});

// 2. Change heading style
document.getElementById("title").style.color = "green";

// 3. Add new list items on button click
document.getElementById("btnAddItem").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item Added";
  document.getElementById("list").appendChild(newItem);
});
