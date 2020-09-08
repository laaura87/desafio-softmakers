import express from "express";
import ContactController from "./controllers/ContactController";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = express();
const upload = multer(multerConfig);

routes.get("/", ContactController.index); //feito
routes.get("/:id", ContactController.show); //feito
routes.post("/signup", upload.single("image"), ContactController.create); //feito
routes.put("/:id/edit", upload.single("image"), ContactController.update); //feito
routes.delete("/:id/delete", ContactController.destroy); //feito

export default routes;
