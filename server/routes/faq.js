import express from "express";
import { createFaq, getFaqs } from "../controllers/faq.js";
const router = express.Router();

router.post("/",createFaq);
router.get("/", getFaqs);

export default router;