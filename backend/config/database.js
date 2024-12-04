import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO)
    .then((data) => {
      console.log(`monbgo db connected with ${data.connection.host}`);
    });
};
export default connectDB;
