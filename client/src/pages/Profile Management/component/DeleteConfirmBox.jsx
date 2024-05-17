import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../shared/context/auth.context";
import Toast from "../../../shared/toast/Toast";

const DeleteConfirmBox = () => {
  const Auth = useContext(AuthContext);
  const [openBox, setOpenBox] = useState();

  const toggleModel = () => {
    setOpenBox(!openBox);
  };

  const submitHandler = () => {
    axios
      .delete(`http://localhost:3000/api/users/delete/${Auth.userID}`)
      .then((res) => {
        if (res.data.message === "Account deleted") {
          Toast("Account deleted Successfully", "success");
          Auth.logout();
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="mt-12  flex justify-center">
        <button
          onClick={toggleModel}
          className="flex items-center bg-red-600 hover:bg-red-700 text-gray-100  rounded text-[12px]  transition duration-100 w-[130px] h-7 justify-center"
        >
          <span>Delete Profile</span>
        </button>
      </div>

      {openBox && (
        <div
          id="deleteModal"
          class="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-md"
        >
          <div class="relative w-full max-w-md bg-white rounded-lg shadow-lg">
            <div class="relative text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleModel}
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <svg
                class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="mb-4 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete your profile?
              </p>
              <div class="flex justify-center items-center space-x-4">
                <button
                  onClick={toggleModel}
                  type="button"
                  class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  type="submit"
                  onClick={submitHandler}
                  class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmBox;
