import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        ProductCode: {
            type: Number,
            required: true,
            unique: true,
            default: 0,
            autoIncrement: true,
        },
        Description: {
            type: String,
            required: true
        },
        ProductCategory: {
            type: String,
            required: true
        },
        UnitOfMeasure: {
            type: String,
            required: true
        },
        RetailPrice: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);


const Product = mongoose.model("Product", ProductSchema);
export default Product;
