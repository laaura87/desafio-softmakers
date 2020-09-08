import express from "express";
import ContactController from "./controllers/ContactController";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = express();
const upload = multer(multerConfig);

routes.get("/");
routes.get("/:id");
routes.post("/signup", upload.single("image"), ContactController.post);
routes.put("/:id/edit");
routes.delete("/:id/edit");

export default routes;
