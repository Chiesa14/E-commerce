import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  searchProduct,
  createProduct,
} from "../controllers/productsControllers.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.get("/search/:key", searchProduct);
router.post("/", createProduct);

export default router;
