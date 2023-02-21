import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/1", homeController.getHomePage);

  router.get("/about", homeController.getAboutPage);

  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);

  router.get("/GET-CRUD", homeController.displayGetCRUD);

  router.get("/EDIT-CRUD", homeController.getEditCRUD);

  router.post("/put-crud", homeController.putCRUD);

  router.get("/delete-crud", homeController.deleteCRUD);
  return app.use("/", router);
};

module.exports = initWebRoutes;
