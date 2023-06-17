import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
    {
        Transno: {
            type: String,
            required: true
        },
        CustomerCode: {
            type: String,
            required: true
        },
        CustomerName: {
            type: String,
            required: true
        },
        GrossTotal: {
            type: Number,
            required: true
        },
        NetTotal: {
            type: Number,
            required: true
        },
        TenderedAmount: {
            type: Number,
            required: true
        },
        InvNo: {
            type: Number,
            required: true
        },
        ServeStatus: {
            type: Number,
            required: true
        },
        DateSold: {
            type: Date,
            required: true
        }
    },
    { timestamps: true }
);

const Sales = mongoose.model("Sales", SalesSchema);
export default Sales;
