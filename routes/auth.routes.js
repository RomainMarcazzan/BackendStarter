import express from "express";
import * as authController from "../auth/controllers/auth.controller.js";
import authMiddleware from "../auth/middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authMiddleware, authController.refresh);

export default router;
