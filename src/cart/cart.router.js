import { Router } from "express";
import { addToCart, getProductsOnCart, removeProductFromCart } from "./cart.controller";
const router = Router();

router.get("/", getProductsOnCart)
router.post("/add", addToCart)
router.delete("/:id", removeProductFromCart)

export default router