import Employee from "../models/employee.model.js";
import CryptoJS from "crypto-js";
import xlsx from "xlsx";
import path from "path";
import { promises as fs } from "fs";

export const addEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        employee: newEmployee,
      },
    });
    console.log(req.body);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      status: "success",
      results: employees.length,
      data: {
        employees,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { attendance: req.body.attendance },
      {
        new: true,
        runValidators: true,
      }
    );

    if (employee) {
      const now = new Date();
      const workbookPath = path.join(__dirname, "attendance.xlsx");
      let workbook;

      try {
        await fs.access(workbookPath); // Check if the file exists
        workbook = xlsx.readFile(workbookPath);
      } catch (error) {
        workbook = xlsx.utils.book_new(); // Create a new workbook if it doesn't exist
      }

      const sheetName = "Attendance";
      let worksheet;

      if (workbook.SheetNames.includes(sheetName)) {
        worksheet = workbook.Sheets[sheetName];
      } else {
        worksheet = xlsx.utils.aoa_to_sheet([
          ["Employee ID", "Attendance Status", "Timestamp"],
        ]);
        xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
      }

      const newRow = [
        req.params.id,
        req.body.attendance ? "Present" : "Absent",
        now.toISOString(),
      ];

      const sheetData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
      sheetData.push(newRow);
      const newWorksheet = xlsx.utils.aoa_to_sheet(sheetData);

      workbook.Sheets[sheetName] = newWorksheet;

      xlsx.writeFile(workbook, workbookPath);
    }

    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const getEmployeeByIdDecrypt = async (req, res) => {
  try {
    // Decode and decrypt the ID received from the request params
    const decryptedId = CryptoJS.AES.decrypt(
      req.params.id,
      "secret passphrase"
    ).toString(CryptoJS.enc.Utf8);

    console.log(decryptedId);

    const employee = await Employee.findById(decryptedId);
    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
