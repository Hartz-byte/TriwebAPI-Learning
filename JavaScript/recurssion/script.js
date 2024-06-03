function printNumberRecc(num) {
  if (num == 0) {
    return 0;
  }

  console.log(num);
  num--;

  // printNumberRecc(num);

  arguments.callee(num);
}

printNumberRecc(5);
