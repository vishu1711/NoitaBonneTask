import mongoose from "mongoose";

const RegisterSche = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, require: true }
  }
);

export default mongoose.model("users", RegisterSche);
