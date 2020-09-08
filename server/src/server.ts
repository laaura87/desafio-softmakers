import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("src/uploads"));
app.use(routes);

app.listen(3050);
