function getData() {
  let obj = {
    ename: "Harsh",
    salary: 100000,
    location: {
      city: "Bangalore",
    },
  };
  return obj;
}

let {
  ename: employeeName,
  salary: employeeSalary,
  location: { city: employeeCity },
} = getData();

console.log(
  "Ename: " + employeeName,
  "salary: " + employeeSalary,
  "location: " + employeeCity
);
