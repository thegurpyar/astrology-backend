import Joi from "joi";

export const emailValidator = (data:any)=>{
    const emailSchema = Joi.object({
        email: Joi.string().email().trim().required(),
    })

    return emailSchema.validate(data)
}

export const verifyOtpValidator = (data:any)=>{
    const emailSchema = Joi.object({
        email: Joi.string().email().trim().required(),
        otp: Joi.string().length(6).pattern(/^\d+$/).required(),
    })

    return emailSchema.validate(data)
}

