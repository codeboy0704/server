import { config } from './config';
const mongoose = require("mongoose");
async function connect(){
  try{
    await mongoose.connect(config.DB_URI)  
   console.log('Database Connected')
  }catch(e){
    console.error(e)
  }
}

export default connect