import express from "express";
import homeController from "../controllers/homeController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/1',homeController.getHomePage);

    router.get('/about',homeController.getAboutPage);

    router.get('/good',(req, res)=> {
        return res.send('HELLO CONG TY');
    });

    return app.use("/", router);


}

module.exports = initWebRoutes;