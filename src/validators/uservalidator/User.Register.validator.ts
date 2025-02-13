import Joi from "joi";
import JoiDate from "@joi/date";
import passwordComplexity from "joi-password-complexity";

const ExtendedJoi = Joi.extend(JoiDate);
const userRegisterValidator = (data:any)=>{

    const userRegisterValidatorSchema = ExtendedJoi.object({
        name: ExtendedJoi.string().trim().required(),
        email: ExtendedJoi.string().email().trim().required(),
        zodiacSign: ExtendedJoi.string().trim().required(),
        country: ExtendedJoi.string().trim().required(),
        city: ExtendedJoi.string().trim().required(),
        password: passwordComplexity({
            min: 8,
            max: 30,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1,
          }).required(),
        phone: ExtendedJoi.string()
        .pattern(/^[+]?[0-9]{10}$/) // Supports optional "+" and 10-15 digits
        .required()
        .messages({
            "string.pattern.base": "Phone number must be 10-15 digits and may start with +",
        }),
        DOB: ExtendedJoi.date()
            .format("DD-MM-YYYY") // Enforces strict DD-MM-YYYY format
            .max("now") // Ensures date is not in the future
            .required()
            .messages({
                "date.format": "DOB must be in DD-MM-YYYY format",
                "date.max": "DOB cannot be in the future",
            }),
        birthTime: ExtendedJoi.string()
            .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
            .required()
            .messages({
                "string.pattern.base": "Birth time must be in HH:mm format",
            }),
        birthPlace: ExtendedJoi.string().trim().required(),
    });
    return userRegisterValidatorSchema.validate(data)
}

export default userRegisterValidator;
