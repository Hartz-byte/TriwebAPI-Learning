function isTwoPassed() {
  // return Array.from(arguments).indexOf(2) >= 0;

  if (Array.from(arguments).indexOf(2) >= 0) {
    console.log("yes 2 is passed");
  } else {
    console.log("no 2 is not passed");
  }
}

isTwoPassed(2);
