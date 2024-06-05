function printName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

const student = {
  firstName: "Harsh",
  lastName: "Gupta",
};

// printName.call(student);  direct call

const name = printName.bind(student); // bind and call

name();
