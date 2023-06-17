import mongoose from 'mongoose';

const SalesDetailsSchema = new mongoose.Schema(
    {
        Idtrack: {
            type: Number,
            required: true,
            unique: true,
            autoIncrement: true,
        },
        TransNo: {
            type: String,
            required: true,
        },
        ProductCode: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
        Qty: {
            type: Number,
            required: true,
        },
        Discount: {
            type: Number,
            required: true,
        },
        Amount: {
            type: Number,
            required: true,
        },
        RetailPrice: {
            type: Number,
            required: true,
        },
        NetAmount: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const SalesDetails = mongoose.model('SalesDetails', SalesDetailsSchema);
export default SalesDetails;
