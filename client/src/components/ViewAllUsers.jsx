import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

function ViewAllUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/users/getUsers"
        );
        const data = await response.json();
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

  const handleNavigation = (id) => {
    navigate(`/add-payment/${id}`);
  };

  return (
    <div className="flex">
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
            {filteredUsers.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-slate-400"
                onClick={() => handleNavigation(user._id)}
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap justify-center inline-flex">
                  {" "}
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllUsers;
