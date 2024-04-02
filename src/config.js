const dotenv = require('dotenv');
dotenv.config();

export const config = {
    DB_URI: process.env.DB_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    PORT:process.env.PORT
}