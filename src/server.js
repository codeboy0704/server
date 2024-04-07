import express from 'express';
import connect from "./connection.js"
import { signin, signup } from './auth.js';
import errorHandler from './errorHandler.js';
import  config  from './config.js';
import morgan from 'morgan';
import cors from "cors"
import productRouter from "./products/product.router.js"
import cartRouter from "./cart/cart.router.js"
import dotenv from "dotenv"
dotenv.config()
var corsOptions = {
  origin: 'http://localhost:5173/',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const app = express();
app.use(express.json())
app.set('etag', 'strong');
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Pragma', 'no-cache');
  next();
})
app.use(morgan("dev"))
app.use("/product", productRouter)
app.use("/cart", cartRouter)
app.post('/register', signup)
app.use('/login', signin)
app.use("/", errorHandler);
app.listen(config.PORT, () => {
  connect();
});

export default app