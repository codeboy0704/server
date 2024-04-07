import config from "./config.js"
import mongoose from "mongoose"
async function connect(){
  try{
    await mongoose.connect(config.DB_URI)  
   console.log('Database Connected')
  }catch(e){
    console.error(e)
  }
}

export default connect