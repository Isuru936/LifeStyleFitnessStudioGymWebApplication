import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CryptoJS from "crypto-js"; // Import CryptoJS for decryption

function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [resultJSON, setResultJSON] = useState(null);
  const [error, setError] = useState(null);
  const [decrytped, setDecrytped] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    role: "",
    age: 0,
    telephone: "",
    nic: "",
    attendance: false,
  });

  const handleAttendance = async (mark) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/employee/markAttendance/${decrytped}`,
        { attendance: mark }
      );
      console.log(response.data);
      toast.success("Record marked successfully.");
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

      console.log(result);
      try {
        const decodedResult = decodeURIComponent(result);
        console.log("Decoded Result:", decodedResult);

        const decryptedId = CryptoJS.AES.decrypt(
          decodedResult,
          "secret passphrase"
        ).toString(CryptoJS.enc.Utf8);

        console.log("Decrypted ID:", decryptedId);
        setDecrytped(decryptedId);
        const fetchEmployee = async () => {
          try {
            const response = await axios.get(
              `http://localhost:3000/api/employee/getEmployeeById/${decryptedId}`
            );
            console.log(response.data);
            if (response.data.data === null) {
              toast.error("Employee not found.");
              toast.info("Refreshing page...");
              return;
            }
            setFormData(response.data.data.employee);
          } catch (error) {
            console.log("Error fetching employee.", error);
            toast.error("Error fetching employee. Contact Support");
            toast.info("Refreshing page...");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        };

        fetchEmployee();
        console.log(decrytped);
      } catch (error) {
        console.log("Error decrypting:", error);
      }

      const fetchEmployee = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/employee/getEmployeeById/${decrytped}`
          );
          console.log(response.data);
          setFormData(response.data.data.employee);
        } catch (error) {
          console.log("Error fetching employee.", error);
        }
      };

      // fetchEmployee();
    }

    function handleError(errorMessage) {
      console.warn(errorMessage);
      setError(errorMessage);
    }

    return () => {
      scanner.clear();
    };
  }, []);

  if (formData === null) return <div>Loading...</div>;

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
            className="mb-4 rounded-full mx-auto w-32 h-32"
          />
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
          {formData.attendance ? (
            <button
              className="bg-red-500 mr-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleAttendance(false);
              }}
            >
              Mark Leave
            </button>
          ) : (
            <button
              className="bg-green-500 mr-5 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleAttendance(true);
              }}
            >
              Mark Attendance
            </button>
          )}
          <p> attendance: {formData.attendance ? "true" : "false"}</p>
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
