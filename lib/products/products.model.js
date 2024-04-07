"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productSchema = exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var productSchema = exports.productSchema = new _mongoose["default"].Schema({
  name: {
    type: "String",
    required: [true, "You have to provide a product name"],
    unique: true
  },
  price: {
    type: Number,
    required: [true, "You have to provide a product price"]
  },
  description: {
    type: "String",
    required: [true, "You have to provide a product description"]
  },
  category: {
    type: "String",
    required: [true, "You need to provide a category"]
  },
  quantity: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true
});
var Product = _mongoose["default"].model("product", productSchema);
var _default = exports["default"] = Product;