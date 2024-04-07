import dotenv from "dotenv"
dotenv.config()

const config = {
    DB_URI: process.env.DB_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    PORT:process.env.PORT
}

export default config