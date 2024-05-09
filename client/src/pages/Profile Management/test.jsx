import React, { useState } from "react";
import LOGO from "../../assets/Logo.png";
import bg from "../../assets/gym.jpg";

const test = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  const isSaveEnabled =
    fullName !== "" &&
    nic !== "" &&
    phone !== "" &&
    !isNaN(parseInt(phone)) &&
    !isNaN(parseInt(nic));

  const handleSave = () => {
    if (isSaveEnabled) {
      alert("Saving profile...");
    } else {
      alert("Please fill in all fields with valid values before saving.");
    }
  };

  const handleAgeGroupChange = (event) => {
    setAge(event.target.value); 
  };

  return (
    <div className="bg-gray-200">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 object-cover w-full h-screen opacity-80 grayscale brightness-50"
      />
      <div className="p-5 relative">
        <img
          src={LOGO}
          alt="logo"
          className="absolute top-0 left-0 h-10 mt-2 ml-5 "
        />
        <div className="mt-10">
          <h1 class="text-xl font-bold text-white capitalize dark:text-white">
            Edit Profile
          </h1>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white dark:text-gray-200" for="username">
                  Full Name
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  id="fullName"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Select Your Age
                </label>
                <select 
                value={age}
                onChange={handleAgeGroupChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option>18-29</option>
                  <option>30-39</option>
                  <option>40-49</option>
                  <option>50+</option>
                </select>
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">
                  NIC
                </label>
                <input
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                  id="nic"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="password">
                  Telephone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-white">
                  Profile Picture
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer u font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span class="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-gray-600"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center bg-white bg-opacity-50 p-2 absolute bottom-0 left-0 w-full">
        <p className="text-black">Copyright© All rights Reserved.</p>
      </div>
    </div>
  );
};

export default test;
