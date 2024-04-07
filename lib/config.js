"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var dotenv = require('dotenv');
dotenv.config();
var config = exports.config = {
  DB_URI: process.env.DB_URI,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  PORT: process.env.PORT
};