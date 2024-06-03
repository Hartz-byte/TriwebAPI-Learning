const userName = prompt("enter your name");
const h1Tag = document.querySelector("h1");

const setName = () => {
  if (userName == null || userName == "") {
    alert("Please enter your name");
  } else {
    h1Tag.textContent = userName;
  }
};

setName(userName);
