const { myEventEmitter, LOGIN_EVENT } = require("./eventFile");

myEventEmitter.on(LOGIN_EVENT, (username) => {
  console.log("writing in fb for user: ", username);
});
