import express from "express";
import { getUserById, getUserQuizData, quizData , quizUpdate } from "../controllers/quiz.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/', quizData);
router.put('/:ID' , quizUpdate);
router.get("/:id", getUserQuizData);
router.get("/getEmail/:id", getUserById);

export default router;
