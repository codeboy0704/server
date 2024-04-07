import Product from "./products.model"

export const getProductByID = async (req, res, next) => {
    const { id } = req.params;
    if (!id)
        return res.status(400).json({ message: "You must provide a product id" })

    try {
        let product = await Product.findById(id)
        return res.status(200).json({data: product})
    } catch (e) {
        next(e)
    }
}

export const createMany = async (req, res, next) => {
    const {products} = req.body
    try{
       let map = products.map(async (el) => {
            try{
                let createProduct = await Product.create(el)
                return createProduct
            }catch(e){
                console.error(e)
            }
       })
      return res.status(201).json({data: map})
    }catch(e){
        next(e)
    }
}

export const removeProduct = async (req, res, next) => {
    const {id} = req.params
    if(!id)
        return res.status(400).send("Id must be provide")
    try{
        let product = await Product.findByIdAndDelete(id).exec()
        return res.status(200).json({data: product})
    }catch(e){
        next(e)
    }
}

export const getProduct = async (req, res, next) => {
    try{
        const productList = await Product.find({}).exec()
        return res.status(200).json({data: productList})
    }catch(e){
        console.error(e)
        next(e)
    }
}

export const updateQuantity = async (req, res, next) => {
   const {_id, quantity} = req.body
   if(!_id)
        return res.status(400).send("Id and quantity are require")
    try{
        const update = await Product.findByIdAndUpdate(_id, {quantity: quantity})
        return res.status(200).json({data: update})
    }catch(e){
        next(e)
    }
}