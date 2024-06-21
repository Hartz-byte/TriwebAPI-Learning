let a = 2;
let b = 3;

function addTwoNums(a, b) {
  console.log(a + b);
}

setImmediate(() => {
  addTwoNums(a, b);
}); // will print in second loop

console.log("inside event loop 1"); // will print first loop

// result:
// inside event loop 1
// 5
