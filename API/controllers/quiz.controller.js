// import { restart } from 'nodemon';
import Quiz from '../models/quiz.model.js'
import User from '../models/user.model.js';

const quizData = async (req, res, next) => {
  try {
    const { QandA , userID } = req.body;

    const user = await User.findById(userID);
    await User.findByIdAndUpdate(userID,{quiz:true});
    const newQuiz = {
      userID: userID,
      email: user.email,
      age: QandA[0].answer,
      gender: QandA[1].answer,
      height: QandA[2].answer,
      weight: QandA[3].answer,
      NIC: QandA[4].answer,
      tele:   QandA[5].answer,
      smoker: QandA[6].answer,
      alcoholic: QandA[7].answer
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
    const { ID } = req.params;
    const { QandA } = req.body;

    const updateResult = await Quiz.findOneAndUpdate(
      { userID: ID },QandA
    );
    if (!updateResult) {
      return res.status(404).send({ message: "No such user" });
    }
    return res.status(200).send({ message: "Quiz has updated" });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
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

export { quizData, quizUpdate, getUserById };