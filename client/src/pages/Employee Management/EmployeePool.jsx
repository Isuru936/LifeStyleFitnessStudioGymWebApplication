import React, { useEffect, useState } from "react";
import bgImg from "../../assets/userPoolbgImg.png";
import SideBar from "../../components/SideBar";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function UserPool() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/employee/getEmployees" //view endpoint
        );
        setEmployees(response.data.data.employees);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching employees.");
        setLoading(false);
      }
    };
    fetchEmployees();

    const intervalId = setInterval(() => {
      fetchEmployees(); // Fetch data every 5 seconds
    }, 5000);

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);

  const handleNavigate = (id) => {
    navigate(`/update-employee/${id}`);
  };

  return (
    <div
      className="inline-flex flex-col items-start min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="flex flex-col w-full ">
        <div className="flex flex-row">
          <div className="flex-col">
            <SideBar />
          </div>
          <div className=" font-bold mt-0 ml-3 w-full">
            <div className="flex bg-slate-50 bg-opacity-25 pt-5 text-4xl justify-between items-center">
              Registered Employees{" "}
              <img src={logo} className="w-24 h-12 mr-5" alt="Logo" />
            </div>
            <hr />
            <div className="flex flex-col w-full m-0">
              <div className="overflow-x-auto">
                <div className="py-2 align-middle min-w-fit justify-center flex flex-col items-center">
                  <div className="bg-slate-100 rounded-xl pl-3 mb-5">
                    <span
                      className="icon-[line-md--person-search-filled] "
                      style={{ width: "24px", height: "24px" }}
                    />
                    <input
                      type="text"
                      placeholder="Search for Employees"
                      className="bg-slate-100 rounded-xl outline-none p-2"
                    />
                    <Link to="/add-employee">
                      <button className="p-3 border rounded-xl bg-blue-700 text-white hover:bg-blue-800">
                        <span className="icon-[mingcute--user-add-fill] mr-2" />{" "}
                        Add New Employee
                      </button>
                    </Link>
                  </div>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-fit divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            ></th>
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
                              NIC
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Telephone
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Active
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {employees.map((employee) => (
                            <tr
                              key={employee.id}
                              className="hover:bg-slate-200"
                              onClick={() => handleNavigate(employee._id)}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={employee.image}
                                      alt={employee.name}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                {employee.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                {employee.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                {employee.nic}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                {employee.telephone}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                {employee.attendance ? (
                                  <div className="bg-green-600 w-5 h-5 rounded-full"></div>
                                ) : (
                                  <div className="bg-red-600 w-5 h-5 rounded-full"></div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserPool;
