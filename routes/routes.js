import express from "express";
import axios from "axios";
import authenticate from "../middlewares/authMiddleware.js";
import { query, register } from "../controllers/controller.js";

const router = express.Router();

router.post("/api/register", register);
router.post("/api", authenticate, query);

export default router;