const student1 = { sname: "Harsh" };
const student2 = { sname: "Rahul" };

const studentMap = new Map();

studentMap.set(student1, "He is a good student");
studentMap.set(student2, "He is an average student");

console.log(studentMap);

// duplicate value is not allowed in set object
