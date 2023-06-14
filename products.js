// product.js
// product.js
class Product {
    constructor(id, name, description, price, imageUrl, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    }
}


// AI-chan says: Nyaa~ Let's import the necessary modules, nya! 🐾
import mongoose from 'mongoose';

// AI-chan says: Nyaa~ Let's define the Product Schema, nya! 🐾
const ProductSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    unique: true,
},
description: {
    type: String,
    required: true,
},
price: {
    type: Number,
    required: true,
},
  // TODO: Add more fields as needed, like category, image, etc., nya!
}, {
    timestamps: true,
});

// AI-chan says: Nyaa~ Let's export the Product model, nya! 🐾
const Product = mongoose.model('Product', ProductSchema);
export default Product;
