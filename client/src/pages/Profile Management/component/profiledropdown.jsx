import React, { useContext, useState } from "react";
import MENU from "../../../assets/MENU.png";
import { AuthContext } from "../../../shared/context/auth.context";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const profiledropdown = () => {
  const Auth = useContext(AuthContext);
  const [opendropdown, setopendropdown] = useState(false);

  const toggledropdown = () => {
    setopendropdown(!opendropdown);
  };

  const logout = () => {
    Auth.logout();
  };
  return (
    <>
      <div onClick={toggledropdown} className="right-5 top-5 absolute ">
        <Icon
          icon="tabler:layout-navbar-expand"
          className="text-3xl text-slate-50 hover:scale-105 transition-transform cursor-pointer "
        />
      </div>
      {opendropdown && (
        <div className="z-10 block absolute top-12 right-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <Link
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Generate Report
              </Link>
            </li>
            <div onClick={logout}>
              <li className="block px-4 py-2 hover:bg-gray-00 dark:hover:bg-gray-600 dark:hover:text-white">
                Sign out
              </li>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default profiledropdown;
