import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        CustomerCode: {
            type: Number,
            required: true,
            unique: true,
            default: 0,
            autoIncrement: true,
        },
        CustomerName: {
            type: String,
            required: true
        },
        ContactNo: {
            type: Number,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        Status: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);


const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
