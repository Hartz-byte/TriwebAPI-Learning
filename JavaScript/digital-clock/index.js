function getDigitalTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hour12 = hours > 12 ? hours - 12 : hours;

  let time = "";
  time += hour12 < 10 ? "0" + hour12 : hour12;
  time += minutes < 10 ? ":0" + minutes : ":" + minutes;
  time += seconds < 10 ? ":0" + seconds : ":" + seconds;
  time += hours > 12 ? " PM" : " AM";

  return time;
}

console.log(getDigitalTime());
