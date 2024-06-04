const redBox = document.getElementById("red-box");
const greenBox = document.getElementById("green-box");
const blueBox = document.getElementById("blue-box");
const yellowBox = document.getElementById("yellow-box");

const inputBox = document.getElementById("input-area");

const addUser = document.getElementById("add-user");
const deleteUser = document.getElementById("delete-user");
const moveToRed = document.getElementById("move-to-red");
const moveToGreen = document.getElementById("move-to-green");
const moveToBlue = document.getElementById("move-to-blue");
const moveToYellow = document.getElementById("move-to-yellow");

let moveDiv = "";

const addUserFunction = () => {
  moveDiv = document.createElement("div");
  moveDiv.setAttribute("id", "divUser");
  moveDiv.className = "move-div";
  moveDiv.innerHTML = inputBox.value;

  addUser.disabled = true;
  inputBox.disabled = true;

  redBox.append(moveDiv);
};

const removeUserFunction = () => {
  moveDiv.remove();
  inputBox.value = "";

  addUser.disabled = false;
  inputBox.disabled = false;
};

const moveToRedFunction = () => {
  redBox.append(moveDiv);
};

const moveToGreenFunction = () => {
  greenBox.append(moveDiv);
};

const moveToBlueFunction = () => {
  blueBox.append(moveDiv);
};

const moveToYellowFunction = () => {
  yellowBox.append(moveDiv);
};

addUser.addEventListener("click", addUserFunction);
deleteUser.addEventListener("click", removeUserFunction);

moveToRed.addEventListener("click", moveToRedFunction);
moveToGreen.addEventListener("click", moveToGreenFunction);
moveToBlue.addEventListener("click", moveToBlueFunction);
moveToYellow.addEventListener("click", moveToYellowFunction);
