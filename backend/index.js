import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import { config } from "dotenv";
import { connect } from "mongoose";
import productRouter from "./routes/products.js";
import userRouter from "./routes/user.js";
const port = 3011;

config();

connect(process.env.MONGO_URL_ATLAS)
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(json({ limit: "10mb" }));
app.use(urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT || port}!`)
);
