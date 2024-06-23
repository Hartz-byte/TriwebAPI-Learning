const { EventEmitter, LOGIN_EVENT, myEventEmitter } = require("./eventFile");

module.exports.loginSuccessful = () => {
  //   setTimeout(() => {
  //     myEventEmitter.emit(LOGIN_EVENT, "Harsh");
  //   }, 2000); // prints after 2 secs

  setInterval(() => {
    myEventEmitter.emit(LOGIN_EVENT, "Harsh");
  }, 2000); // repeatedly prints at a interval of 2 seconds
};
