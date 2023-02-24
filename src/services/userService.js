import db from "../models/index";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      // userData.errCode = "0";
      // userData.errMessage = "ok";
      let isEmail = await checkUserEmail(email);
      if (isEmail) {
        resolve(userData);
      } else {
        userData.errCode = 1;
        userData.errMessage = "try again";
        resolve(userData);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
  checkUserEmail: checkUserEmail,
};
