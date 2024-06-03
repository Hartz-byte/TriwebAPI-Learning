var h1Tag = document.querySelector("h1");
var btnTag = document.querySelector("button");

btnTag.onclick = () => {
  if (h1Tag.textContent === "Hi") {
    h1Tag.textContent = "Hello";
  } else {
    h1Tag.textContent = "Hi";
  }
};
