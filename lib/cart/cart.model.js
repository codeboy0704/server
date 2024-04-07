"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cartSchema = new _mongoose["default"].Schema({
  product: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    "default": 0
  }
});

// Definición del modelo del carrito
var Cart = _mongoose["default"].model('cart', cartSchema);
var _default = exports["default"] = Cart;