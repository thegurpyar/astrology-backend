import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userRegisterValidator from "../../validators/uservalidator/User.Register.validator.js";
import { userRegistrationService } from "../../services/userservices/User.Auth.Services.js";

export const userRegistrationController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const tempToken = req.headers["x-temp-token"];
    if (!tempToken) {
      res.status(401).json({ message: "No token provided" });
      return 
    }
    const { error } = userRegisterValidator(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const result = await userRegistrationService(req.body,tempToken);
    res.status(result.success ? 201 : 400).json(result);
    return
  }
);

export const userLoginController = async (req: Request, res: Response) => {};
