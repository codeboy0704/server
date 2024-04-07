import mongoose,{Schema} from "mongoose"
export const productSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: [true, "You have to provide a product name"],
        unique: true
    },
    price:{
        type: Number,
        required: [true, "You have to provide a product price"]
    },
    description: {
        type: "String",
        required: [true, "You have to provide a product description"]
    },
    category:{
        type: "String",
        required:[true, "You need to provide a category"]
    },
    quantity:{
        type: Number,
        default: 0
    }
}, {timestamps: true})

const Product = mongoose.model("product", productSchema)
export default Product