import express from "express";
import ContactController from "./controllers/ContactController";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = express();
const upload = multer(multerConfig);

routes.get("/contacts", ContactController.index); //feito
routes.get("/contacts/:id", ContactController.show); //feito
routes.post("/contacts", upload.single("image"), ContactController.create); //feito
routes.put("/contacts/:id", upload.single("image"), ContactController.update); //feito
routes.delete("/contacts/:id", ContactController.destroy); //feito

export default routes;
