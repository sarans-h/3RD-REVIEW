import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import businessRoutes from './routes/business.routes.js';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';
import reviewRoutes from './routes/review.routes.js';
import paymentRoutes from './routes/payment.routes.js';
dotenv.config({ path: "./config/config.env" });
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// console.log(process.env.STRIPE_SECRET_KEY);
import { v4 as uuidv4 } from 'uuid';
connectDB();

const app = express();

const allowedOrigins = process.env.FRONT_URLS.split(',');

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// app.use((req, res, next) => {
//   cors({
//     origin: (origin, callback) => {
//       const allowedOrigin = process.env.FRONT_URL; // Your specific frontend URL
//       if (!origin || origin === allowedOrigin) {
//         // Allow requests from the frontend URL or no origin (e.g., Postman)
//         callback(null, allowedOrigin);
//       } else {
//         // Allow other origins but with no credentials
//         callback(null, '*');
//       }
//     },
//     credentials: (req.headers.origin === process.env.FRONT_URL), // Credentials true only for FRONTEND_URL
//   })(req, res, next);
// });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.use("/api/business", businessRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product",productRoutes);
app.use("/api/review",reviewRoutes);
app.use("/api/payment", paymentRoutes);
app.listen(8080, () => {
  console.log("Server connected at port 8080");
});

//this middleware will be called when an error is tackled , this is to increase code reusability
app.use((err, req, res, next)=>{
  const statusCode = err.StatusCode || 500;
  const message = err.message || 'Internal Server error';
  res.status(statusCode).json({
      success:false,
      statusCode,
      message
  })
})
