import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployee,
  getEmployeeByIdDecrypt,
  getEmployees,
  updateAttendance,
  updateEmployee,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/addEmployee", addEmployee);
router.get("/getEmployees", getEmployees);
router.delete("/deleteEmployee/:id", deleteEmployee);
router.get("/getEmployeeById/:id", getEmployee);

router.get("/decryptAndGetId/:id", getEmployeeByIdDecrypt);
router.patch("/updateEmployee/:id", updateEmployee);
router.patch("/markAttendance/:id", updateAttendance);

export default router;
