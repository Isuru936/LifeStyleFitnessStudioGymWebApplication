import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import trashAlt from "@iconify-icons/fa-solid/trash-alt";
import editIcon from "@iconify-icons/fa-solid/edit";
import downloadIcon from "@iconify-icons/fa-solid/download";
import closeIcon from "@iconify-icons/fa-solid/times-circle";
import { Link, useNavigate, useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import logo from "../../assets/Logo.png";
import backgroundImage from "../../assets/bg-Img.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DietPlanUserView from "../../components/DietPlanUserView";
import SideBar from "../../components/SideBar";
import { jsPDF } from "jspdf";

function WorkoutPool() {
  const [workoutCategories, setWorkoutCategories] = useState([]);
  const [workoutsByCategory, setWorkoutsByCategory] = useState({});
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [error, setError] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [weightValues, setWeightValues] = useState({});
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [workoutPlanEmpty, setWorkoutPlanEmpty] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("adminLogin") === null) {
      navigate("/admin-login");
    }

    axios
      .get("http://localhost:3000/api/workouts/categories")
      .then((response) => {
        setWorkoutCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workout categories:", error);
        setError("Error fetching workout categories");
      });
  }, []);

  useEffect(() => {
    setUserId(id); // Set userId from URL parameter
    axios
      .get(`http://localhost:3000/api/bioData/bioDataById/${id}`)
      .then((response) => {
        setUserEmail(response.data.data.bioData.email);
        setWorkoutPlanEmpty(
          response.data.data.bioData.workoutplan.length === 0
        );
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data");
      });
  }, [id]);

  const fetchWorkoutsByCategory = (category) => {
    axios
      .get(`http://localhost:3000/api/workouts/category/${category}`)
      .then((response) => {
        setWorkoutsByCategory((prevState) => ({
          ...prevState,
          [category]: response.data,
        }));
      })
      .catch((error) => {
        console.error(`Error fetching ${category} workouts:`, error);
        setError(`Error fetching ${category} workouts`);
      });
  };

  const handleDropdownChange = (category) => {
    if (!workoutsByCategory[category]) {
      fetchWorkoutsByCategory(category);
    }
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const handleDeleteWorkout = (category, index) => {
    const workoutId = workoutsByCategory[category][index]._id;
    axios
      .delete(`http://localhost:3000/api/workouts/${workoutId}`)
      .then((response) => {
        const updatedWorkouts = [...workoutsByCategory[category]];
        updatedWorkouts.splice(index, 1);
        setWorkoutsByCategory((prevState) => ({
          ...prevState,
          [category]: updatedWorkouts,
        }));

        setSelectedWorkouts((prevSelectedWorkouts) =>
          prevSelectedWorkouts.filter((workout) => workout._id !== workoutId)
        );
      })
      .catch((error) => {
        console.error("Error deleting workout:", error);
        setError("Error deleting workout");
      });
  };

  const handleSelectWorkout = (category, index) => {
    const selectedWorkout = workoutsByCategory[category][index];
    const isAlreadySelected = selectedWorkouts.some(
      (workout) => workout._id === selectedWorkout._id
    );
    if (!isAlreadySelected) {
      firebase
        .storage()
        .refFromURL(selectedWorkout.imageUrl)
        .getDownloadURL()
        .then((imageUrl) => {
          const workoutWithImage = {
            ...selectedWorkout,
            imageUrl: imageUrl,
          };
          setSelectedWorkouts((prevState) => [...prevState, workoutWithImage]);
          setWeightValues((prevState) => ({
            ...prevState,
            [selectedWorkout._id]: "",
          }));
        })
        .catch((error) => {
          console.error("Error fetching workout image from Firebase:", error);
          setError("Error fetching workout image from Firebase");
        });
    } else {
      const updatedWorkouts = selectedWorkouts.filter(
        (workout) => workout._id !== selectedWorkout._id
      );
      setSelectedWorkouts(updatedWorkouts);
      setWeightValues((prevState) => {
        const updatedValues = { ...prevState };
        delete updatedValues[selectedWorkout._id];
        return updatedValues;
      });
    }
  };

  const handleRepsSetsChange = (index, field, value) => {
    const updatedWorkouts = [...selectedWorkouts];
    updatedWorkouts[index][field] = value;
    setSelectedWorkouts(updatedWorkouts);
  };

  const handleWeightChange = (workoutId, value) => {
    setWeightValues((prevState) => ({
      ...prevState,
      [workoutId]: value,
    }));
  };

  const handleEditWorkout = (category, index, event) => {
    const workoutId = workoutsByCategory[category][index]._id;
    const editUrl = `http://localhost:5173/editWorkout/${workoutId}`;
    event.preventDefault();
    window.location.href = editUrl;
  };

  const handleRemoveWorkout = (index) => {
    const removedWorkout = selectedWorkouts[index];
    setSelectedWorkouts((prevSelectedWorkouts) =>
      prevSelectedWorkouts.filter((workout, i) => i !== index)
    );

    // Uncheck the corresponding checkbox in the workout pool
    const workoutCheckbox = document.querySelector(
      `input[type="checkbox"][value="${removedWorkout._id}"]`
    );
    if (workoutCheckbox) {
      workoutCheckbox.checked = false;
    }
  };

  const handleAssignWorkout = () => {
    const selectedWorkoutsData = selectedWorkouts.map((workout) => ({
      _id: workout._id,
      name: workout.name,
      reps: workout.reps,
      sets: workout.sets,
      description: workout.description,
      weight: weightValues[workout._id] || 0,
      imageUrl: workout.imageUrl,
      category: workout.category,
    }));

    axios
      .post(`http://localhost:3000/api/saveWorkouts`, {
        userId: userId,
        workouts: selectedWorkoutsData,
      })
      .then((response) => {
        setSelectedWorkouts([]);

        // Group workouts by category
        const workoutsByCategory = {};
        selectedWorkoutsData.forEach((workout) => {
          if (!workoutsByCategory[workout.category]) {
            workoutsByCategory[workout.category] = [];
          }
          workoutsByCategory[workout.category].push(workout);
        });

        // Construct email content
        let emailContent = `<h1>Assigned Workouts</h1>`;

        // Loop through categories and include workouts
        for (const [category, workouts] of Object.entries(workoutsByCategory)) {
          emailContent += `<h2>${category}</h2>`;
          workouts.forEach((workout) => {
            emailContent += `
              <div style="display: flex;">
                <img src="${workout.imageUrl}" alt="${workout.name}" style="max-width: 70px;">
                <div style="margin-left: 20px;">
                  <strong>${workout.name}</strong><br>
                  Reps: ${workout.reps}<br>
                  Sets: ${workout.sets}<br>
                  Weight: ${workout.weight}<br>
                </div>
              </div>
              <br>`;
          });
        }

        // Replace the logo variable with the URL of the new logo image
        const image =
          "https://firebasestorage.googleapis.com/v0/b/lsfs-1a314.appspot.com/o/Logo.png?alt=media&token=117322bf-b255-4114-b29e-b58a55e5a58e";

        // Add company logo to email
        emailContent += `<img src="${image}" alt="Company Logo" style="max-width: 100px;">`;

        axios
          .post("http://localhost:3000/api/sendEmail", {
            userEmail: userEmail,
            subject: "Assigned Workouts",
            html: emailContent,
          })
          .then((response) => {
            console.log("Email sent successfully");
            toast.success("Workouts assigned and email sent successfully");
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });

        navigate(`/workoutpool/${userId}`);
      })
      .catch((error) => {
        console.error("Error assigning workouts:", error);
        setError("Error assigning workouts");
      });
  };

  const generatePdf = () => {
    axios
      .get(`http://localhost:3000/api/bioData/bioDataById/${userId}`)
      .then((response) => {
        const userData = response.data.data;

        if (
          userData &&
          userData.bioData &&
          userData.bioData.workoutplan &&
          userData.bioData.workoutplan.length > 0
        ) {
          const doc = new jsPDF();
          let yOffset = 20;

          // Add "Assigned Workouts" heading
          doc.setFontSize(16);
          doc.setFont("helvetica", "bold");
          doc.text("Assigned Workouts", 105, yOffset, { align: "center" });
          yOffset += 10; // Increase Y offset for spacing

          // Add user ID and email
          doc.setFontSize(12);
          doc.setFont("helvetica", "normal");
          doc.text(20, yOffset, `ID: ${userData.bioData._id}`);
          doc.text(20, yOffset + 7, `Email: ${userData.bioData.email}`);
          yOffset += 20; // Increase Y offset for spacing

          // Loop through workoutplan
          userData.bioData.workoutplan.forEach((workout, index) => {
            // Add category heading if it's the first workout in a category
            if (
              index === 0 ||
              workout.category !==
                userData.bioData.workoutplan[index - 1].category
            ) {
              yOffset += 10; // Add spacing between categories
              doc.setFontSize(14);
              doc.setFont("helvetica", "bold");
              doc.text(`Category: ${workout.category}`, 105, yOffset, {
                align: "center",
              });
              yOffset += 10; // Increase Y offset for category heading
            }

            // Add exercise details to the PDF
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text(20, yOffset, `Exercise: ${workout.name}`);
            doc.text(20, yOffset + 7, `Reps: ${workout.reps}`);
            doc.text(20, yOffset + 14, `Sets: ${workout.sets}`);
            doc.text(20, yOffset + 21, `Weight: ${workout.weight}`);

            yOffset += 30; // Increase Y offset for next workout
          });

          doc.save("workout_report.pdf");
        } else {
          console.error("No workout data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleClearWorkouts = () => {
    axios
      .delete(`http://localhost:3000/api/clearWorkouts/${userId}`)
      .then((response) => {
        toast.success("Workouts cleared successfully");
        setWorkoutPlanEmpty(true);
      })
      .catch((error) => {
        console.error("Error clearing workouts:", error);
        setError("Error clearing workouts");
      });
  };

  return (
    <div
      className="flex flex-row w-screen h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <SideBar />
        <DietPlanUserView userId={userId} />
      </div>
      <div className="ml-16 pt-16 flex-grow">
        <div className="container mx-auto">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-0 right-0 h-10 w-auto mt-5 mr-12"
          />
          <h1 className="text-2xl font-bold my-5">Workout Categories</h1>
          <p className="text-gray-600 text-sm">
            Manage workout categories to help users find the workouts they're
            looking for.
          </p>
          <div className="mb-8"></div>
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <div className="border border-gray-300 rounded-md max-h-52 overflow-y-auto p-2 bg-white">
            {workoutCategories.map((category) => (
              <div key={category} className="ml-5">
                <div className="ml-2">
                  <p
                    className="cursor-pointer"
                    onClick={() => handleDropdownChange(category)}
                  >
                    <Icon
                      icon={
                        openDropdown === category
                          ? "fa-solid:angle-up"
                          : "fa-solid:angle-down"
                      }
                    />
                    {category}
                  </p>
                  {workoutsByCategory[category] &&
                    openDropdown === category && (
                      <div className="ml-14">
                        <ul>
                          {workoutsByCategory[category].map(
                            (workout, index) => (
                              <li key={index}>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    className="form-checkbox text-indigo-600"
                                    onChange={(e) => e.stopPropagation()}
                                    onClick={() =>
                                      handleSelectWorkout(category, index)
                                    }
                                    checked={selectedWorkouts.some(
                                      (w) => w._id === workout._id
                                    )}
                                  />
                                  <span>{workout.name}</span>
                                  <Icon
                                    icon={trashAlt}
                                    className="cursor-pointer text-red-500"
                                    onClick={() =>
                                      handleDeleteWorkout(category, index)
                                    }
                                  />
                                  <Icon
                                    icon={editIcon}
                                    className="cursor-pointer text-blue-500"
                                    onClick={(event) =>
                                      handleEditWorkout(category, index, event)
                                    }
                                  />
                                </label>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-right py-4 pr-10">
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 mr-2"
              onClick={() => setSelectedWorkouts([])}
            >
              Deselect All
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <Link to="/AddWorkout" className="text-white">
                Add a workout
              </Link>
            </button>
          </div>
          {workoutPlanEmpty ? (
            <div className="text-center my-4">
              <p className="text-red-500">
                No workouts have been assigned for this user yet.
              </p>
            </div>
          ) : (
            <div className="text-center my-4">
              <p className="text-l  ">
                Assigned workouts exist for this user. Would you like to clear
                them? <br />
                also you can, click 'Generate Report' to view the assigned
                workouts.
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleClearWorkouts}
              >
                Clear Assigned Workouts
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="text-right py-20 pr-10 mx-20">
        <h1 className="text-2xl font-bold mx-12">Assigned Workouts</h1>
        <div
          className="mt-8 bg-white rounded-md p-4 shadow-md overflow-auto border border-gray-300 h-80"
          style={{ maxWidth: "600px" }}
        >
          {selectedWorkouts.map((workout, index) => (
            <div key={index} className="relative flex items-center mb-4">
              <button
                className="absolute top-0 right-0 mr-2 mt-2 text-gray-500"
                onClick={() => handleRemoveWorkout(index)}
              >
                <Icon icon={closeIcon} />
              </button>
              <img
                src={workout.imageUrl}
                alt="Workout"
                className="w-16 h-16 rounded-md mr-4"
              />
              <div>
                <p className="font-semibold mb-2 ml-6">{workout.name}</p>
                <div className="flex items-center">
                <input
  type="number"
  placeholder="Reps"
  className="border-b-2 border-gray-300 mr-2 w-16"
  value={workout.reps || ""}
  onChange={(e) => handleRepsSetsChange(index, "reps", e.target.value)}
  min="1" // Minimum value allowed
  step="1" // Increment value
  required // Required field
/>
<input
  type="number"
  placeholder="Sets"
  className="border-b-2 border-gray-300 mr-2 w-16"
  value={workout.sets || ""}
  onChange={(e) => handleRepsSetsChange(index, "sets", e.target.value)}
  min="1" // Minimum value allowed
  step="1" // Increment value
  required // Required field
/>
<input
  type="number"
  placeholder="Weight"
  className="border-b-2 border-gray-300 mr-2 w-16"
  value={weightValues[workout._id] || ""}
  onChange={(e) => handleWeightChange(workout._id, e.target.value)}
  min="1" // Minimum value allowed
  step="0.01" // Increment value
  required // Required field
/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
            onClick={handleAssignWorkout}
          >
            Assign workout
          </button>
          <button
            className="bg-green-500 text-white px-10 py-2 rounded-md mr-2 hover:bg-green-600 flex items-center"
            onClick={generatePdf}
          >
            <span>Generate Report</span>
            <Icon icon={downloadIcon} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default WorkoutPool;
