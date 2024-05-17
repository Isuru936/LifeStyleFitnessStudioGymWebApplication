import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import bgImg from "../assets/bg-Img.png";

function ViewAllUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/getUsers/getUsers"
        );
        const data = await response.json();
        console.log(data);
        setUsers(data.data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigatePayment = (id) => {
    navigate(`/add-payment/${id}`);
  };

  const navigateAssignDiet = (id) => {
    navigate(`/assign-diet-plan/${id}`);
  };

  const navigateWorkoutPlan = (id) => {
    navigate(`/workoutpool/${id}`); // Updated navigation to workout plan
  };

  return (
    <div
      className="flex bg-cover bg-center bg-no-repeat bg-fixed w-screen h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <SideBar />
      <div className="container mx-auto pt-16">
        <div className="flex">
          <h1 className="text-2xl font-bold mb-4">All Users</h1>
          <input
            type="text"
            className="border mx-auto p-2 w-1/2 rounded-md mb-4 outline-none"
            placeholder="Search Users.."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Diet Plan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Workout Plan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Payment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user, index) => (
              <motion.tr
                key={user._id}
                className="hover:bg-slate-400"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap border  justify-center">
                  <button
                    className="rounded-full w-full p-1 flex justify-center text-slate-50 hover:bg-green-600 bg-green-700 "
                    onClick={(e) => {
                      navigateAssignDiet(user._id);
                    }}
                  >
                    <Icon
                      icon="mdi:food-apple"
                      className="w-6 h-6 bg-[#68686855]"
                    />
                    Assign
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border justify-center">
                  <button
                    className="rounded-full w-full p-1 flex justify-center text-slate-50 hover:bg-orange-500 bg-orange-700"
                    onClick={() => navigateWorkoutPlan(user._id)} // Update onClick event
                  >
                    <Icon
                      icon="healthicons:exercise-yoga"
                      className="w-6 h-6"
                    />{" "}
                    Assign
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  <button
                    className="rounded-full w-full p-1 flex justify-center text-slate-50 hover:bg-red-500 bg-red-700"
                    onClick={() => navigatePayment(user._id)}
                  >
                    Assign
                    <Icon icon="mdi:contactless-payment" className="w-6 h-6" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllUsers;
