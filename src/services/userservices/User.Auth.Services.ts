import userModel from "../../models/User.Model.js";
import userAuthModel from "../../models/UserAuth.model.js"; // If you need to store the token
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const userRegistrationService = async (body: any,tempToken:any) => {
    const { name, email, phone, password, zodiacSign, country, city, DOB, birthTime, birthPlace } = body;

    // Verify temporary token before proceeding
    try {
        const decoded: any = jwt.verify(tempToken, process.env.JWT_SECRET!);
        if (decoded.email !== email) {
            return { success: false, message: "Invalid token" };
        }
    } catch (err) {
        return { success: false, message: "Token expired or invalid" };
    }

    // Check if user already exists
    const exist = await userModel.findOne({ email });
    if (exist) {
        return { success: false, message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
        zodiacSign,
        country,
        city,
        DOB,
        birthTime,
        birthPlace,
    });
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET!, { expiresIn: "7d" });

    return { success: true, message: "User registered successfully", token };
};