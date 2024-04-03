import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    }
});

// Definición del modelo del carrito
const Cart = mongoose.model('cart', cartSchema);
export default Cart