function addNumbers(...numbers) {
  let sum = 0;

  numbers.forEach((e) => {
    sum = sum + e;
  });
  return sum;
}

let res = addNumbers(2, 3);
console.log(res);

let res2 = addNumbers(2, 3, 5);
console.log(res2);

let res3 = addNumbers(2, 3, 6, 3, 8);
console.log(res3);
