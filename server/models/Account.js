import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({}, { timestamps: true });

const Account = mongoose.model("Account", AccountSchema);

export default Account;
