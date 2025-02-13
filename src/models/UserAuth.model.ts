import mongoose from "mongoose";
const userAuthSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: "30d" } // Auto delete after 30 days
});

const userAuthModel = mongoose.model("UserAuth", userAuthSchema);

export default userAuthModel;