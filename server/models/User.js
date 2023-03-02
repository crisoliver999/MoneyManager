import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      min: 2,
      max: 100,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 5,
    },
    accounts: Array
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
