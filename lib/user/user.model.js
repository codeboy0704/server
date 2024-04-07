"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var userSchema = exports.userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: [true, "You need to provide a username"],
    unique: true,
    validate: [],
    sparse: true
  },
  email: {
    type: String,
    required: [true, "You need to provide a email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "You need to provide a password"],
    validate: []
  }
}, {
  timestamps: true
});
userSchema.pre("save", function (next) {
  var _this = this;
  if (!this.isModified("password")) {
    return next();
  }
  _bcrypt["default"].hash(this.password, 10, function (err, hash) {
    if (err) {
      console.error("In pre");
    }
    _this.password = hash;
    next();
  });
});
var User = _mongoose["default"].model("user", userSchema);
var _default = exports["default"] = User;