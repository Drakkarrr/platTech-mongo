import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

//! IMPORTING THE DATA
import Customer from './models/customer.model.js';
import Product from './models/product.model.js';
import Sales from './models/sales.model.js';
import SalesDetails from './models/salesDetails.model.js';
import { customersData, productData, salesData, salesDetailsData } from "./data/dummyData.js";


//! MIDDLEWARE CONFIGS
const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log('Server is running...');
});

//! PERFORM THE SELECT/READ OPERATION BASED ON WHAT IS ASK IN THE FOLLOWING

//! 9 Get the list of calproducts that Customer Jerry Jayden bought.
const productsBoughtByJerry = await SalesDetails.find({ CustomerName: "Jerry Jayden" });
console.log(productsBoughtByJerry);


//! 10 Get the products that was sold on January 01, 2023
const productsSoldOnJan1 = await SalesDetails.find({ DateSold: "2023-01-01" });
console.log(productsSoldOnJan1);


//! 11 Get the overall quantity of the product Leather Shoes that was sold.
const leatherShoesQuantity = await SalesDetails.aggregate([
  {
    $match: { Description: "Leather Shoes" }
  },
  {
    $group: {
      _id: null,
      totalQuantity: { $sum: "$Qty" }
    }
  }
]);
console.log(leatherShoesQuantity);


//! 12 Get the customer name , address and contact that was assign to the InvNo “10001”
const customerWithInvNo10001 = await Sales.findOne({ InvNo: 10001 });
console.log(customerWithInvNo10001);






//! PERFORM THE UPDATE OPERATION BASED ON WHAT IS ASK IN THE FOLLOWING
await Sales.updateOne({ CustomerName: "Averill Nasim" }, { Contact: "407864270" });
await Sales.updateOne({ CustomerName: "Tionge Turan" }, { Status: "Inactive" });
await Sales.deleteOne({ CustomerCode: "001" });







//! PERFORM THE DELETE OPERATION BASED ON WHAT IS ASK IN THE FOLLOWING
await Sales.deleteMany({ Transno: "S-101" });
await SalesDetails.deleteMany({ Transno: "S-101" });





//! Connect to MongoDB
const PORT: string | number = process.env.PORT || 8080;
mongoose
  .set('strictQuery', true)
  .connect(process.env.MONGO_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running at Port: ${PORT}`));

    //! Insert Data
    Customer.insertMany(customersData);
    Product.insertMany(productData);
    Sales.insertMany(salesData);
    SalesDetails.insertMany(salesDetailsData);

  })
  .catch((error) => console.log(`${error} Failed to connect to Server`));
