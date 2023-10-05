import mongoose, { Schema, models } from "mongoose";

const userShcema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = models.User || mongoose.model("User", userShcema);
export default User;
