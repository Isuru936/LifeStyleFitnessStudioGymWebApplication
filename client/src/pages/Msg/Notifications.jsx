import { useState } from "react";
import SideBar from "../../components/SideBar";
import DropDownNavBar from "../../components/DropDownNavBar";
// Import your background image
import backgroundImage from "../assets/lot.jpg";

function Notifications() {
  const [mobileView] = useState(window.innerWidth < 768);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Are you ready to do some exercises?", read: false },
    { id: 2, message: "BodyMax classes start in 30 minutes", read: false },
  ]);

  const markAsRead = (notificationId) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
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
        {/* Sidebar */}
        <div>{mobileView ? <DropDownNavBar /> : <SideBar />}</div>
        <div className="flex flex-col">
          <h2 className="m-8 font-bold text-xl text-black">NOTIFICATIONS</h2>
          {/* Search Bar */}
          <div className="mx-8 mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded py-1 px-2 w-full md:w-96"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded md:ml-2 mt-2 md:mt-0">
              Search
            </button>
          </div>
          {/* Notifications */}
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`mx-8 mb-4 p-4 border ${
                notification.read ? "bg-gray-300" : ""
              }`}
            >
              <p>{notification.message}</p>
              {!notification.read && (
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded mt-2"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
