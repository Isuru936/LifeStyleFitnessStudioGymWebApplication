import React from "react";
import bgImg from "../../assets/userPoolbgImg.png";
import DropDownNavBar from "../../components/DropDownNavBar";
import SideBar from "../../components/SideBar";
import logo from "../../assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserPool() {
  const [mobileView] = useState(window.innerWidth < 768);
  return (
    <>
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
            {/* side bar, select user */}
            <div className="flex-col">
              {mobileView ? <DropDownNavBar /> : <SideBar />}
            </div>
            <div className=" font-bold mt-0 ml-3 w-full">
              <div className="flex bg-slate-50 bg-opacity-25 pt-5 text-4xl justify-between items-center">
                Registered Users
                <img src={logo} className="w-24 h-12 mr-5" alt="" />
              </div>
              <hr />
              {/* table */}
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
                        placeholder="Search for Users"
                        className="bg-slate-100 rounded-xl outline-none p-2"
                      />
                      <Link to="/add-user">
                        <button className="p-3 border rounded-xl bg-blue-700 text-white hover:bg-blue-800">
                          <span className="icon-[mingcute--user-add-fill] mr-2" />
                          Add New User
                        </button>
                      </Link>
                    </div>
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-fit divide-y divide-gray-200">
                        <Link to="/update-user">
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
                                Joined Date
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
                                Diet Plan
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-slate-200">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://randomuser.me/api/portraits/men/1.jpg"
                                      alt="User 1"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                John Doe
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                john.doe@example.com
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                2023-02-28
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight  ">
                                <div className="h-5 w-5 rounded-full bg-red-700"></div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight ">
                                <div className="h-5 w-5 rounded-full bg-green-700"></div>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-100">
                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://randomuser.me/api/portraits/women/2.jpg"
                                      alt="User 2"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                Jane Smith
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                jane.smith@example.com
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight">
                                2023-03-01
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight  ">
                                <div className="h-5 w-5 rounded-full bg-green-700"></div>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm font-extralight ">
                                <div className="h-5 w-5 rounded-full bg-green-700"></div>
                              </td>
                            </tr>
                          </tbody>
                        </Link>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPool;
