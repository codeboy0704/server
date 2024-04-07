"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _connection = _interopRequireDefault(require("./connection.js"));
var _auth = require("./auth.js");
var _errorHandler = _interopRequireDefault(require("./errorHandler.js"));
var _config = require("./config.js");
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _productRouter = _interopRequireDefault(require("./products/product.router.js"));
var _cartRouter = _interopRequireDefault(require("./cart/cart.router.js"));
var _bodyParser = require("body-parser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var dotenv = require('dotenv');
dotenv.config();
var corsOptions = {
  origin: 'http://localhost:5173/',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
var app = (0, _express["default"])();
app.use((0, _bodyParser.json)());
app.set('etag', 'strong');
app.use((0, _cors["default"])({
  credentials: true,
  origin: 'http://localhost:5173'
}));
app.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Pragma', 'no-cache');
  next();
});
app.use((0, _morgan["default"])("dev"));
app.use("/product", _productRouter["default"]);
app.use("/cart", _cartRouter["default"]);
app.post('/register', _auth.signup);
app.use('/login', _auth.signin);
app.use("/", _errorHandler["default"]);
app.listen(_config.config.PORT, function () {
  (0, _connection["default"])();
});
var _default = exports["default"] = app;