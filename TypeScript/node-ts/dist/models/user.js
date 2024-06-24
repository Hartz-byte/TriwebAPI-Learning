"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUserToDB = void 0;
const addUserToDB = (userName, password, age) => {
    console.log(userName, password, age);
    return "user registration done";
};
exports.addUserToDB = addUserToDB;
const updateUserData = (objUser) => {
    console.log(objUser.uname);
    return "update done";
};
exports.updateUserData = updateUserData;
