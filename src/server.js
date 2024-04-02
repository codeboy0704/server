import express from 'express';
import connect from "./connection.js"
import { signin, signup } from './auth.js';
import errorHandler from './errorHandler.js';
import { config } from './config.js';
import morgan from 'morgan';
import cors from "cors"
import productRouter from "./products/product.router.js"
const dotenv = require('dotenv')
dotenv.config()
const app = express();
app.use(express.json());
app.use(
  cors()
);
app.use(morgan("dev"))
app.use("/product", productRouter)
app.post('/register', signup)
app.use('/login', signin)
app.use("/", errorHandler);
app.listen(config.PORT, () => {
  console.log(`app is listening on port ${config.PORT}`);
  connect();
});