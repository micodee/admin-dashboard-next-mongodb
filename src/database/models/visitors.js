import mongoose, { Schema, models } from "mongoose";

const visitorsSchema = new Schema (
 {
  visitors: Number,
  location: String,
  device: String,
  premiumUserNo: Number,
  month: String
 },
 {
  timestamps: true
 }
)

const Visitors = models.Visitors || mongoose.model("Visitors", visitorsSchema)
export default Visitors