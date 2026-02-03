import express from "express";
import { adminSignup, adminLogin } from "../controllers/adminAuth.controller.js";

const router = express.Router();

// Signup → works only once
router.post("/signup", adminSignup);

// Login → always enabled
router.post("/login", adminLogin);

export default router;
