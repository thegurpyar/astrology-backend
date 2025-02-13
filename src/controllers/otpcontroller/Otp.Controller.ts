import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { emailValidator, verifyOtpValidator } from "../../validators/otpvalidator/Otp.validator.js";
import { sendOtpService, verifyOtpService } from "../../services/otpservices/SendOtp.Services.js";

export const sendOtpController = asyncHandler((async(req:Request,res:Response)=>{
    const {error} = emailValidator(req.body);
    if(error){
        res.status(400).json({
            message:error.message
        })
    }
    const result = await sendOtpService(req.body);
    res.status(result.success ? 201 : 400).json(result);
}))

export const verifyOtpController = asyncHandler((async(req:Request,res:Response)=>{
    const {error} = verifyOtpValidator(req.body);
    if(error){
        res.status(400).json({
            message:error.message
        })
    }
    const result = await verifyOtpService(req.body);
    res.status(result.success ? 201 : 400).json(result);
}))