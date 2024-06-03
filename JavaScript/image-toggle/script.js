let image = document.querySelector("img");

image.onclick = () => {
  let imgSrc = image.getAttribute("src");

  if (imgSrc === "./images/1.png") {
    imgSrc = image.setAttribute("src", "./images/2.jpg");
  } else {
    imgSrc = image.setAttribute("src", "./images/1.png");
  }
};
