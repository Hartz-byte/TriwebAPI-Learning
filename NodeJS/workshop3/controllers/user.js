const userModel = require("../models/user");

// register
module.exports.register = async (req, res) => {
  try {
    let result = await userModel.create(req.body);
    res.send({ status: "success", data: { id: result.dataValues.id } });
  } catch (err) {
    res.send({ status: "error", message: "User registration failed" });
  }
};

// get
module.exports.get = async (req, res) => {
  try {
    let data = await userModel.findById(req.body.id);
    res.send({ status: "success", data: data });
  } catch (err) {
    res.send({ status: "error", message: "User not found" });
  }
};

// update
module.exports.update = async (req, res) => {
  try {
    let user = await userModel.findById(req.body.id);
    user.password = req.body.password;
    await user.save();

    res.send({ status: "success", message: "user data updated" });
  } catch (err) {
    res.send({ status: "error", message: "User not updated" });
  }
};

// delete
module.exports.delete = async (req, res) => {
  try {
    let user = await userModel.findById(req.body.id);
    await user.destroy();

    res.send({ status: "success", message: "user deleted" });
  } catch (err) {
    res.send({ status: "error", message: "User not deleted" });
  }

  let status = await userModel.delete(req.body);
};
