import mongoose from "mongoose";
import dayjs from "dayjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    zodiacSign: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date, // Storing as a Date object for consistency
        required: true,
        get: (date:any) => dayjs(date).format("DD-MM-YYYY"), // Format when retrieved
        set: (date:any) => dayjs(date, "DD-MM-YYYY").toDate(), // Parse and store as Date
    },
    birthTime: {
        type: String,
        required: true,
        validate: {
            validator: (time:any) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(time), // 24-hour format validation
            message: "Birth time must be in HH:mm format",
        },
    },
    birthPlace: {
        type: String,
        required: true,
    },
});

// Enable getters when converting documents to JSON
userSchema.set("toJSON", { getters: true });

const userModel = mongoose.model("User", userSchema);
export default userModel;
