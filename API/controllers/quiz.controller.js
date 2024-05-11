// import { restart } from 'nodemon';
import Quiz from "../models/quiz.model.js";
import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";

const quizData = async (req, res, next) => {
  try {
    const { QandA, userID } = req.body;
    const user = await User.findById(userID);
    await User.findByIdAndUpdate(userID, { quiz: true });
    const newQuiz = {
      userID: userID,
      email: user.email,
      age: QandA[0].answer,
      gender: QandA[1].answer,
      height: QandA[2].answer,
      weight: QandA[3].answer,
      NIC: QandA[4].answer,
      tele: QandA[5].answer,
      smoker: QandA[6].answer,
      alcoholic: QandA[7].answer,
    };

    const quiz = Quiz.create(newQuiz);
    return res.status(200).send(quiz);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
};

const quizUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { QandA } = req.body;

    console.log(QandA);
    const updatequiz = {
      age: QandA.age,
      NIC: QandA.NIC,
      tele: QandA.tele,
    };
    console.log(id);

    await Quiz.findByIdAndUpdate(QandA.QuizId, updatequiz);
    const user = await User.findById(QandA.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.details.fullName = QandA.fullName;
    await user.save();
    return res.status(200).send({ message: "Quiz has updated" });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

const getUserQuizData = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findOne({ userID: id }).limit(1).populate("userID");

    res.status(200).json(quiz);
  } catch {
    (err) => {
      console.log(err);
      res.status(401).json(err.message);
    };
  }
});

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        email: user.email,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export { quizData, quizUpdate, getUserById, getUserQuizData };
