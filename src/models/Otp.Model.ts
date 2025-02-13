import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 300 }, // 5 minutes expiry
    sentAt: { type: Date, default: Date.now }
});

export default mongoose.model("Otp", otpSchema);
