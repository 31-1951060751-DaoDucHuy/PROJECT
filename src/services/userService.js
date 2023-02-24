import db from "../models/index";
import bcrypt, { hash } from "bcryptjs";
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      // userData.errCode = "0";
      // userData.errMessage = "ok";
      let isEmail = await checkUserEmail(email);
      if (isEmail) {
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { email: email },
          raw: true,
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          // let check = true;
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "ok";

            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "try again 2";
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = "try again1";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};
let compareUserPasssword = () => {
  return new Promise(async (resolve, reject) => {
    try {
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
