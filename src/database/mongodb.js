import mongoose from "mongoose";

export const ConnectMongoDB = async () => {
 try {
  await mongoose.connect(process.env.MONGODB_URL)
  console.log("connected to mongodb");
 } catch (error) {
  console.log("failed connected: ", error);
 }
}