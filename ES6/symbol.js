const person = {
  id: 1234,
  pname: "Xyz",
};

const xyz = Symbol("xyz");
person[xyz] = "Hidden Data";

// console.log(person);
// person.id = 2;
// console.log(person);
// console.log(Object.getOwnPropertyNames(person));

// console.log(Object.getOwnPropertySymbols(person));
// const IamSmart = Symbol("xyz");
// console.log(person[IamSmart]);

console.log(person[xyz]);
