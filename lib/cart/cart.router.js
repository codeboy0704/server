"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cart = require("./cart.controller");
var router = (0, _express.Router)();
router.get("/", _cart.getProductsOnCart);
router.post("/", _cart.addToCart);
router["delete"]("/:id", _cart.removeProductFromCart);
var _default = exports["default"] = router;