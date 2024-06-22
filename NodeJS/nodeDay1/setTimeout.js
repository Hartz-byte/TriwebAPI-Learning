let a = 2;
let b = 3;

function add(callby, n1, n2) {
  console.log(callby, " : ", n1 + n2);
}

setImmediate(() => {
  add("setImmediate", a, b);
});

setTimeout(() => {
  add("setTimeout", a, b);
}, 0);

process.nextTick(() => {
  add("nextTick", a, b);
}, 0);

add("Direct", a, b);

// result:
// Direct  :  5
// nextTick  :  5
// setTimeout  :  5
// setImmediate  :  5
