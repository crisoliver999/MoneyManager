import mongoose from "mongoose";

const TransactionSubcategorySchema = new mongoose.Schema({}, { timestamps: true });

const TransactionSubcategory = mongoose.model("TransactionSubcategory", TransactionSubcategorySchema);

export default TransactionSubcategory;
