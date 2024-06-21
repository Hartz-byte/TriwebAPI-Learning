const student = {
  name: "Harsh",
  mobile: 94550,
  address: "India",
};

// array
const marksOfStudent = [40, 98, 64, 75, 57, 85, 43];

// obj destructuring

[sub1, sub2, sub3, sub4, sub5, ...others] = marksOfStudent;

console.log("sub1: " + sub1);
console.log("sub2: " + sub2);
console.log("sub3: " + sub3);
console.log("sub4: " + sub4);
console.log("sub5: " + sub5);
console.log("others: " + others);

const { name, mobile } = student;
console.log("name: " + name + " mobile: " + mobile);
