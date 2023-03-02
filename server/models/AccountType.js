import mongoose from "mongoose";

const AccountTypeSchema = new mongoose.Schema({}, { timestamps: true });

const AccountType = mongoose.model("AccountType", AccountTypeSchema);

export default AccountType;
