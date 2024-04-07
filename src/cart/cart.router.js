import { Router } from "express";
import { addToCart, getProductsOnCart, removeProductFromCart } from "./cart.controller";
const router = Router();

router.get("/", getProductsOnCart)
router.post("/", addToCart)
router.delete("/:id", removeProductFromCart)

export default router