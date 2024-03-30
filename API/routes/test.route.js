import express from "express"
import {test} from "../controllers/test.controller.js";

const router = express.Router();

router.get("/", test);

export default router;