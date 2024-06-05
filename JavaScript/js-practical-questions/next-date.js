function getNextDate() {
  let date = this.getDate();
  return date + 1;
}

// date instance
let myDateInstance = new Date();

// attach function to date insatnce
Date.prototype.getNextDate = getNextDate;

const nextDate = myDateInstance.getNextDate();
console.log(`next date is ${nextDate}`);

let myDateInstance1 = new Date();

const nextDate1 = myDateInstance1.getNextDate();
console.log(`next date is ${nextDate1}`);
