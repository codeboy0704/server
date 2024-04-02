import { Router } from "express";
import { createMany, getProduct, getProductByID, removeProduct } from "./product.controller";
const router = Router();

router.get("/:id", getProductByID)
router.get("/", getProduct)
router.post("/bulk", createMany);
router.delete("/:id", removeProduct)

export default router
