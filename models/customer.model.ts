import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        CustomerCode: {
            type: Number,
            required: true,
            unique: true,
            default: 0
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

CustomerSchema.pre("save", function (next) {
    const currentDoc = this;
    mongoose
        .model("Customer", CustomerSchema)
        .findOne({}, {}, { sort: { CustomerCode: -1 } }, function (err, lastDoc) {
            if (err) return next(err);
            currentDoc.CustomerCode = lastDoc ? lastDoc.CustomerCode + 1 : 1;
            next();
        });
});

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
