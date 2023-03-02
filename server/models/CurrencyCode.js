import mongoose from "mongoose";

const CurrencyCodeSchema = new mongoose.Schema({}, { timestamps: true });

const CurrencyCode = mongoose.model("CurrencyCode", CurrencyCodeSchema);

export default CurrencyCode;
