import express from "express";
import { getUserById, quizData , quizUpdate } from "../controllers/quiz.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/', quizData);
router.put('/:ID' , quizUpdate);

router.get("/getEmail/:id", getUserById);

export default router;
