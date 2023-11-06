import { Router } from "express";
import authorize from "../../middlewares/authMiddleware";
import AuthController from "../../controllers/authController";

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/signup", authController.signup);
authRoutes.post("/login", authController.login);

export default authRoutes;