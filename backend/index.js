import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import businessRoutes from './routes/business.routes.js';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js'
dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.use("/api/business", businessRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product",productRoutes)
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
