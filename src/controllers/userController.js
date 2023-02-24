import userservice from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "missing input",
    });
  }

  let userData = await userservice.handleUserLogin(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    userData,
  });
};

module.exports = {
  handleLogin: handleLogin,
};
