import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userRegisterValidator from "../../validators/uservalidator/User.Register.validator";
import { userRegistrationService } from "../../services/userservices/User.Auth.Services";

export const userRegistrationController = asyncHandler(async (req: Request, res: Response): Promise<void> => {
      const { error } = userRegisterValidator(req.body);
      if (error) {
        res.status(400).json({ message: error.message });
        return;
      }
  
      const result = await userRegistrationService(req.body);
      res.status(result.success ? 201 : 400).json(result);
    }
  );


export const userLoginController = (async(req:Request,res:Response)=>{

})
