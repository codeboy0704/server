"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _product = require("./product.controller");
var router = (0, _express.Router)();
router.get("/:id", _product.getProductByID);
router.get("/", _product.getProduct);
router.post("/bulk", _product.createMany);
router["delete"]("/:id", _product.removeProduct);
router.put("/cart", _product.updateQuantity);
var _default = exports["default"] = router;