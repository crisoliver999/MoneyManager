import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({}, { timestamps: true });

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
