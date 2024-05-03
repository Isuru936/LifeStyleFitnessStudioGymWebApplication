import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [resultJSON, setResultJSON] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    role: "",
    age: 0,
    telephone: "",
    nic: "",
  });

  const handleAttendance = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/employee/markAttendance/${scanResult}`,
        { attendance: true }
      );
      console.log(response.data);
      toast.success("Attendance marked successfully.");
      toast.info("Refreshing page...");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("Error marking attendance.", error);
      toast.error("Error marking attendance. Contact Support");
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 5, qrbox: 250 });
    scanner.render(success, handleError);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      setResultJSON({ _id: result });

      const fetchEmployee = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/employee/getEmployeeById/${result}`
          );
          console.log(response.data);
          setFormData(response.data.data.employee);
        } catch (error) {
          console.log("Error fetching employee.", error);
        }
      };

      fetchEmployee();
    }

    function handleError(errorMessage) {
      console.warn(errorMessage);
      setError(errorMessage);
    }

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {scanResult ? (
        <div className="text-center container">
          <h1 className="text-3xl font-bold mt-8 mb-4">
            Name: {formData.name}
          </h1>
          <img
            src={formData.image}
            alt="profilePic"
            className="mb-4 rounded-full mx-auto"
          />
          {resultJSON && <h1 className="mb-4">ID: {resultJSON._id}</h1>}
          <h1 className="mb-4">
            <span className="font-bold">Name:</span>{" "}
            {formData.name || "Not Available"}
          </h1>
          <h1 className="mb-4">Email: {formData.email || "Not Available"}</h1>
          <h1 className="mb-4">Role: {formData.role || "Not Available"}</h1>
          <h1 className="mb-4">Age: {formData.age || "Not Available"}</h1>
          <h1 className="mb-4">
            Telephone: {formData.telephone || "Not Available"}
          </h1>
          <h1 className="mb-4">NIC: {formData.nic || "Not Available"}</h1>
          <button
            className="bg-green-500 mr-5 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleAttendance();
            }}
          >
            Mark Attendance
          </button>
          <button
            className="bg-blue-500 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.reload();
            }}
          >
            Scan Again
          </button>
          <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </div>
      ) : (
        <div id="reader" className="w-96 h-96 border-2 border-black"></div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Scanner;
