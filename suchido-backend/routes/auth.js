import express from "express";
import { registerSchema } from "../libs/validate-schema.js";
import { registerUser, loginUser } from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/register", (req, res, next) => {
  try {
    registerSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid request data", errors: error.errors });
  }
}, registerUser);

router.post("/login", (req, res, next) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid request data", errors: error.errors });
  }
}, loginUser);

export default router;
