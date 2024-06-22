function* getNum(index) {
  while (index < 5) {
    yield index;
    index++;
  }
}

let gn = getNum(0);

console.log(gn.next().value);
console.log(gn.next().value);
console.log(gn.next().value);
console.log(gn.next().value);
console.log(gn.next().value);
console.log(gn.next().done);

// result:
// 0
// 1
// 2
// 3
// 4
// true
