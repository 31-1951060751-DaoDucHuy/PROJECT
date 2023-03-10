import { render } from "ejs";
import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.creatNewUser(req.body);
  console.log(message);
  return res.send("wrong password");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("-----------------------");
  console.log(data);
  console.log("-----------------------");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  //console.log(userId);
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("user not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  await CRUDService.updateUserData(data);
  let allUsers = await CRUDService.updateUserData(data);
  //return res.send("update done");
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};
let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("oekokeoke");
  } else {
    return res.send("nope");
  }
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
