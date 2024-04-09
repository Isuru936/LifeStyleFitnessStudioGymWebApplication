import SideBar from "../../components/SideBar";
import bgImg from "../../assets/bg-Img.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

function AddFood() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    foodname: "",
    calories: "",
    fats: "",
    proteins: "",
    carbs: "",
    uploadImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleFileUpload = async (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     const storageRef = firebase.storage().ref();
  //     const fileRef = storageRef.child(selectedFile.name);
  //     setLoading(true);
  //     try {
  //       await fileRef
  //         .put(selectedFile)
  //         .then((snapshot) => snapshot.ref.getDownloadURL())
  //         .then((url) => {
  //           console.log(url);
  //           setImageUrl(url);
  //         });
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //       alert("Failed to upload file. Please try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     console.log("No file selected");
  //   }
  // };

  const [progress, setProgress] = useState(0);

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      setLoading(true);

      // Set up progress listener
      const uploadTask = fileRef.put(selectedFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress here
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Upload is ${progress}% done`);
          setProgress(progress); // Update the progress state
        },
        (error) => {
          // Handle errors here
          console.error("Error uploading file:", error);
          setLoading(false);
        },
        () => {
          // Handle successful upload here
          console.log("Upload successful");
          setLoading(false);
        }
      );
    } else {
      console.log("No file selected");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      if (response.ok) {
        alert("Food added successfully");
        // Redirect or handle success as needed
      } else {
        throw new Error("Failed to add food");
      }
    } catch (error) {
      console.error("Error adding food:", error);
      alert("Failed to add food. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-row w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-row m-0 w-full">
        <SideBar />
        <div className="mx-auto">
          <div className="flex flex-col ">
            <div className=" m-32 lg:m-5 w-fit border-2 pt-11 pb-11 pr-5 pl-5 bg-gray-50 h-full rounded-xl">
              <div className="text-black">
                <h1 className="font-bold  text-5xl">Add New Food</h1>
              </div>
              <hr className="mb-2 mt-2" />
              <div className=" flex flex-row justify-center">
                <div className=" flex flex-col">
                  <div className="text-black">
                    <p className="text-blue-900">
                      Enter the Food Details and the nutrient levels of them.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="mt-5 text-xl ">
                    <p className="font-semibold">Food Name</p>
                    <input
                      type="text"
                      name="foodname"
                      value={formData.foodname}
                      onChange={handleChange}
                      placeholder="E.g. Chicken Breast"
                      className="outline-none border-2 border-gray-100 rounded-lg p-1 w-full mt-2"
                    />
                    <div className="flex flex-row">
                      <div className=" flex flex-col">
                        <p className="font-semibold">Calories</p>
                        <input
                          type="number"
                          name="calories"
                          value={formData.calories}
                          onChange={handleChange}
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                      <div className=" flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Proteins (g)</p>
                        <input
                          type="number"
                          name="proteins"
                          value={formData.proteins}
                          onChange={handleChange}
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className=" flex flex-col">
                        <p className="font-semibold">Carbs (g)</p>
                        <input
                          type="number"
                          name="carbs"
                          value={formData.carbs}
                          onChange={handleChange}
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                      <div className=" flex flex-col mr-3 ml-3">
                        <p className="font-semibold">Fats (g)</p>
                        <input
                          type="number"
                          name="fats"
                          value={formData.fats}
                          onChange={handleChange}
                          placeholder="E.g. 100"
                          className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Upload Image</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="outline-none border-2 border-gray-100 rounded-lg p-1 w-fit mt-2"
                      />
                      {loading && (
                        <progress
                          value={progress} // Provide the progress value here
                          max="100"
                          className="mt-2"
                          style={{ width: "100%" }}
                        />
                      )}
                    </div>

                    <button
                      type="submit"
                      className="mt-5 bg-green-600 p-2 w-full rounded-xl hover:bg-green-500 transition"
                    >
                      Save
                    </button>
                    <Link to="/diet-plan">
                      <button className="mt-5 bg-blue-600 p-2 w-full rounded-xl hover:bg-blue-500 transition">
                        Back
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
