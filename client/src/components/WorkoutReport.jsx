import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { saveAs } from "file-saver";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Icon } from "@iconify/react";
import downloadIcon from "@iconify-icons/fa-solid/download";

// Register fonts for pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function WorkoutReport({ fetchWorkouts }) {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts()
      .then((data) => {
        setSelectedWorkouts(data);
      })
      .catch((error) => {
        console.error("Error fetching workout data:", error);
      });
  }, [fetchWorkouts]);

  const generatePDF = () => {
    const documentDefinition = {
      content: [
        { text: "Assigned Workouts", style: "header" },
        { text: "\n" },
        ...selectedWorkouts.map((workout, index) => ({
          text: [
            { text: `${index + 1}. ${workout.name}\n`, bold: true },
            `Reps: ${workout.reps}\n`,
            `Sets: ${workout.sets}\n`,
            `Weight: ${workout.weight}\n`,
            { image: workout.imageUrl, width: 70, margin: [0, 10, 0, 0] },
          ],
          margin: [0, 0, 0, 20],
        })),
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
    };

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download("workout_report.pdf");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={generatePDF}
      startIcon={<Icon icon={downloadIcon} />}
    >
      Generate Report
    </Button>
  );
}
