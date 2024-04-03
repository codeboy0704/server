import Product from "../products/products.model";
import Cart from "./cart.model";

export async function addToCart(req, res, next){
    const {id, quantity} = req.body
    console.log(id)
    if(!id)
        res.status(400).send("Id must be provide")
    try{
        const product = await Product.findById(id)
        if(product){
            let verifyOnCart = await Cart.findOne({product: product._id}).exec()
            verifyOnCart ? await Cart.findByIdAndDelete(verifyOnCart._id, {quantity: quantity}).exec()
            : await Cart.create({product: product})
            return res.status(200).json({data: product})
        }
    }catch(e){
        next(e)
    }
}

export async function getProductsOnCart(req, res, next){
    try{
        let products = await Cart.find({}).exec()
        return res.status(200).json({data: products}) 
    }catch(e){
        next(e)
    }
}

export async function removeProductFromCart(req, res, next){
    const {id} = req.params
    if(!id)
        return res.status(400).send("Id require")
    try{
        let removeProduct = await Cart.findOneAndDelete({product: id})
        return res.status(200).json({data: removeProduct})
    }catch(e){
        next(e)
    }
}