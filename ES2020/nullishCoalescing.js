// nullish coalescing ?? vs || (OR)

// OR operator
function printSomething(value) {
  printThis = value || "not found";
  console.log("printThis is " + printThis);
}

printSomething("Harsh");

console.log("--------------------------------");

// ?? operator
function printSomething(value) {
  printThis = value ?? "not found";
  console.log("printThis is " + printThis);
}

printSomething();
