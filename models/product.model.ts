import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        ProductCode: {
            type: Number,
            required: true,
            unique: true,
            default: 0
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

ProductSchema.pre("save", function (next) {
    const currentDoc = this;
    mongoose
        .model("Product", ProductSchema)
        .findOne({}, {}, { sort: { ProductCode: -1 } }, function (err, lastDoc) {
            if (err) return next(err);
            currentDoc.ProductCode = lastDoc ? lastDoc.ProductCode + 1 : 1;
            next();
        });
});



const Product = mongoose.model("Product", ProductSchema);
export default Product;
