import React, { useContext, useState } from "react";
import MENU from "../../../assets/MENU.png";
import { AuthContext } from "../../../shared/context/auth.context";

const profiledropdown = () => {
  const Auth = useContext(AuthContext);
  const [opendropdown, setopendropdown] = useState(false);

  const toggledropdown = () => {
    setopendropdown(!opendropdown);
  };

  const logout = () => {
    Auth.logout()
  };
  return (
    <>
      <div onClick={toggledropdown}>
        <img
          src={MENU}
          className="absolute w-10 h-10 top-0 right-0 mt-2 mr-2"
          alt="menu"
        />
      </div>
      {opendropdown && (
        <div class="z-10 block absolute top-12 right-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Generate Report
              </a>
            </li>
            <div onClick={logout}>
            <li class="block px-4 py-2 hover:bg-gray-00 dark:hover:bg-gray-600 dark:hover:text-white">
              Sign out
            </li></div>
          </ul>
        </div>
      )}
    </>
  );
};

export default profiledropdown;
