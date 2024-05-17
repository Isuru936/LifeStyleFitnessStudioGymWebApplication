import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar";
import DropDownNavBar from "../../components/DropDownNavBar";
import backgroundImage from "../../assets/lot.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Notifications() {
  const navigate = useNavigate();
  const [mobileView] = useState(window.innerWidth < 768);
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("adminLogin") === null) {
      navigate("/admin-login");
    }

    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/messages/notifications"
      );
      // Reverse the order of notifications before setting the state
      setNotifications(response.data.notifications.reverse());
      console.log(response.data.notifications.reverse());
    } catch (error) {
      setError("Error fetching notifications. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId) => {
    try {
      await axios.put(`/api/notifications/${notificationId}`);
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
      setError("Error marking notification as read. Please try again later.");
    }
  };

  const handleSearch = () => {
    // Implement search functionality here
    // For demonstration, let's filter notifications based on search term
    const filteredNotifications = notifications.filter((notification) =>
      notification.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setNotifications(filteredNotifications);
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className={`flex ${mobileView ? "flex-col" : "flex-row"}`}>
        <div>{mobileView ? <DropDownNavBar /> : <SideBar />}</div>
        <div className="flex flex-col">
          <div className="m-8 mb-4 flex justify-between">
            <h2 className="font-bold text-2xl text-black">NOTIFICATIONS</h2>
            <Link to="/create-notification">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-slate-500 text-white py-2 px-4 rounded md:ml-2 mt-8 md:mt-0"
              >
                Add Notifications
              </motion.button>
            </Link>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            notifications.map((notification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mx-8 mb-4 p-4 border bg-gray-50 ${
                  notification.read ? "bg-gray-300" : ""
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-xl">{notification.subject}</p>
                  <p className="font-light text-sm text-gray-600">
                    {notification.date.split("T")[0]}{" "}
                    {notification.date.split("T")[1].split("Z")}
                  </p>
                </div>
                <p className="text-lg">{notification.message}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
