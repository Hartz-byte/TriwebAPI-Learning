const addPrefix = (strPrefix) => {
  const prefixToAdd = "$ ";
  const splittedStr = strPrefix.split("\n");

  const mappedList = splittedStr.map((e) => {
    return prefixToAdd + e;
  });

  const finalList = mappedList.join("\n");
  return finalList;
};

const result = addPrefix(`First line
Second line`);

console.log(result);
