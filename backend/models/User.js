import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
    Image: {
      type: String,
      required: true,
      default: "userDefault.png",
    },
  },
  { timestamps: true }
);

export default model("users", UserSchema);
