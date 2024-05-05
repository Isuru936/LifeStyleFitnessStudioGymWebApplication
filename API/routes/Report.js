import express from "express";
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";


const router = express.Router();

// Register fonts for pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

router.post("/generate-pdf", (req, res) => {
  // Retrieve assigned workouts data and user ID from request body
  const assignedWorkouts = req.body.assignedWorkouts;
  const userId = req.body.userId;

  // Generate content based on assigned workouts
  const content = assignedWorkouts.map((workout, index) => ({
    text: [
      { text: `${index + 1}. ${workout.name}\n`, bold: true },
      `Reps: ${workout.reps}\n`,
      `Sets: ${workout.sets}\n`,
      `Weight: ${workout.weight}\n`,
      { image: workout.imageUrl, width: 70, margin: [0, 10, 0, 0] },
    ],
    margin: [0, 0, 0, 20],
  }));

  // Generate PDF document
  const docDefinition = {
    content: [
      { text: "Assigned Workouts Report", style: "header" },
      { text: "User ID: " + userId },
      ...content,
    ],
  };

  const pdfDoc = pdfMake.createPdf(docDefinition);
  pdfDoc.getBase64((data) => {
    // Send the PDF data as a response
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment;filename="assigned_workouts_report.pdf"',
    });
    const buffer = Buffer.from(data.toString("utf-8"), "base64");
    res.end(buffer);
  });
});

export default router;
