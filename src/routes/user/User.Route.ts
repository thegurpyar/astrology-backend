import { Router } from "express";
import { userLoginController, userRegistrationController } from "../../controllers/usercontroller/User.Auth.Controller.js";

const router = Router();

router.post("/register",userRegistrationController);
router.post("/login",userLoginController);

export default router;