import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

//!---------------------- FILE IMPORTS -------------------------------------------------
import { register } from './controllers/auth.controller.js';
import { createPost } from './controllers/posts.controller.js';
import { verifyToken } from './middleware/auth.middleware.js';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/users.routes.js';
import postRoutes from './routes/posts.routes.js';

//! IMPORTING THE DUMMY DATA
// import User from './models/user.model.js';
// import Post from './models/post.model.js';

import Customer from './models/customer.model.js';
import Product from './models/product.model.js';
import Sales from './models/sales.model.js';

import { customersData, productData, salesData } from "./data/dummyData.js";


//! MIDDLEWARE CONFIGS
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
app.use(express.json());
app.use(bodyParser.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true } as any));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

//! OUR LOCAL FILE STORAGE
const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req: express.Request, file: Express.Multer.File, cb: any) => {
    cb(null, 'public/assets');
  },
  filename: (req: express.Request, file: Express.Multer.File, cb: any) => {
    cb(null, file.originalname);
  },
});
const upload: multer.Multer = multer({ storage });

app.get('/', (req, res) => {
  res.send('Hello to La Photographia API');
});


//! ROUTES FOR FILES UPLOAD
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);


//! ROUTES ENDPOINT OF THE APP
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);


//! CONNECTING OUR API TO DATABASE
const PORT: string | number = process.env.PORT || 8080;
mongoose
  .set('strictQuery', true)
  .connect(process.env.MONGO_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running at Port: ${PORT}`));


    //! ADDING THE DUMMY DATA I CREATED  FOR DEVELOPMENT PURPOSES
    // User.insertMany(Users);
    // Post.insertMany(Posts);



    Customer.insertMany(customersData);
    Product.insertMany(productData);
    Sales.insertMany(salesData);
  })
  .catch((error) => console.log(`${error} Failed to connect to Server`));

