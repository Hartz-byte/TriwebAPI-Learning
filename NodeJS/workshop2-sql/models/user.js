const db = require("../util/database");

module.exports.insert = async (userData) => {
  // console.log(userData);

  let id = 0;

  try {
    let query =
      "INSERT INTO `users`(`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";

    // execute
    let result = await db.execute(query, [
      userData.name,
      userData.email,
      userData.password,
      userData.remark,
    ]);

    id = result[0].insertId;
  } catch (err) {
    console.log(err);
  }

  return id;
};

module.exports.get = async (userData) => {
  let retData = "";

  try {
    let query = "SELECT * FROM `users` WHERE id=?";

    let result = await db.execute(query, [userData.id]);

    retData = result[0][0];
  } catch (err) {
    console.log(err);
  }

  return retData;
};

module.exports.update = async (userData) => {
  try {
    let query = "UPDATE `users` SET `password`=? WHERE id=?";

    await db.execute(query, [userData.password, userData.id]);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports.delete = async (userData) => {
  try {
    let query = "DELETE FROM `users` WHERE id=?";

    await db.execute(query, [userData.id]);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
