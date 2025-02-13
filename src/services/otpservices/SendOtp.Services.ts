import OtpModel from "../../models/Otp.Model";
import userModel from "../../models/User.Model";
import crypto from "crypto";
import dayjs from "dayjs";
import jwt from "jsonwebtoken";

export const sendOtpService = async (data: any) => {
    const { email } = data;

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
        return { success: false, message: "Email not registered" };
    }

    // Check if OTP was already sent within the last 1 minute
    const existingOtp = await OtpModel.findOne({ email });
    if (existingOtp) {
        const oneMinuteAgo = dayjs().subtract(1, "minute").toDate();
        if (existingOtp.sentAt > oneMinuteAgo) {
            return { success: false, message: "OTP already sent. Please wait a minute." };
        }
    }

    // Generate a new OTP
    // const otp = "123456"||crypto.randomInt(100000, 999999).toString();

    // Save or update OTP in the database
    await OtpModel.findOneAndUpdate(
        { email },
        { otp:"123456", createdAt: new Date(), sentAt: new Date() },
        { upsert: true, new: true }
    );

    // Send OTP via email
    // await sendOtpByEmail(email, otp);

    return { success: true, message: "OTP sent successfully" };
};

export const verifyOtpService = async (data: any) => {
    const { email, otp } = data;

    // Find OTP record
    const otpRecord = await OtpModel.findOne({ email });
    if (!otpRecord) {
        return { success: false, message: "OTP not found or expired" };
    }

    // Check if OTP matches
    if (otpRecord.otp !== otp) {
        return { success: false, message: "Invalid OTP" };
    }

    // Delete OTP after successful verification
    await OtpModel.deleteOne({ email });

    // Generate temporary registration token (valid for 15 mins)
    const tempToken = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: "15m" });

    return { success: true, message: "OTP verified successfully", tempToken };
};