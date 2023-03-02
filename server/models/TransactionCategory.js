import mongoose from "mongoose";

const TransactionCategorySchema = new mongoose.Schema({}, { timestamps: true });

const TransactionCategory = mongoose.model("TransactionCategory", TransactionCategorySchema);

export default TransactionCategory;
