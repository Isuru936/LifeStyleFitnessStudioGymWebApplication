import React, { useState } from "react";
import backgroundImage from "../../assets/sim.jpg";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";

function NewCreateNotification() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/messages/create-notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject,
            message,
            date,
          }),
        }
      );

      if (response.ok) {
        // Message created successfully
        console.log("Message created successfully");
        alert("Notified Successfully");
        // Reset form fields
        setSubject("");
        setMessage("");
        setDate("");
      } else {
        // Failed to create message
        console.error("Failed to create message");
      }
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  return (
    <div className="">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-row p-8">
          <SideBar />
          <div className="flex flex-col justify-center mx-auto w-full">
            <div className="mt-5 justify-center mx-auto">
              <h2 className="font-bold text-black text-3xl">NEW MESSAGE</h2>
            </div>
            <div className="mt-8 flex flex-row mx-auto justify-center w-full">
              <div className="flex flex-col justify-center mx-auto w-full md:w-1/3 ml-5 mr-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="text-black font-medium mb-2"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="border rounded py-1 px-2 w-full"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="message"
                    className="text-black font-medium mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="border rounded py-1 px-2 h-24 w-full" // Adjust the 'h-24' value for a longer textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="date" className="text-black font-medium mb-2">
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="border rounded py-1 px-2 w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex flex-col md:flex-row">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0 md:mr-2"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                  <Link to="/notifications">
                    <button className="bg-orange-500 text-white py-2 px-4 rounded">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCreateNotification;
