import { Router } from "express";
import {
  addUser,
  loginUser,
  getOneUser,
  updateImage,
} from "../controllers/userController.js";

const router = Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/:id", getOneUser);
router.put("/update/image/:id", updateImage);

export default router;
