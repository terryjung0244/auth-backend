import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "Please add first name"] },
  lastName: { type: String, required: [true, "Please add last name"] },
  email: { type: String, unique: true },
  password: { type: String },
  verified: { type: Boolean },
  createdAt: { type: Date },
});

export default mongoose.model("Auth", authSchema);
