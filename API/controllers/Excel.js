import xlsx from "xlsx";
import path from "path";
import { promises as fs } from "fs";
import Employee from "./models/employee"; // Adjust the import according to your project structure

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
