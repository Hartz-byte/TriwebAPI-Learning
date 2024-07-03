"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res) => {
    console.log("data: ", req.body);
    console.log("registeration done");
    res.send("registeration done");
};
exports.registerUser = registerUser;
