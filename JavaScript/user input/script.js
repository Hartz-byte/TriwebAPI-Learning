let h1Tag = document.querySelector("h1");
let btn = document.querySelector("button");

const addNum = () => {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = num1 + num2;

  h1Tag.textContent = "Sum if two numbers are equal " + sum;
};

btn.onclick = () => {
  addNum();
};
