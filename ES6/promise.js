function updateAge(age) {
  return new Promise((resolve, reject) => {
    if (age > 0) {
      age = age + 1;
      resolve(age);
    } else {
      reject("invalid age");
    }
  });
}

updateAge(-7)
  .then((updatedAge) => {
    console.log("Updated age: " + updatedAge);
  })
  .catch((err) => {
    console.log(err);
  });
