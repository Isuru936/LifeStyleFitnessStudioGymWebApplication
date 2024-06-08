import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

function SideBar() {
  const [show, setShow] = useState(false);

  const sidebarHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-fit h-fit">
      <div className="pl-3 pt-8">
        <button className="cursor-pointer" onClick={sidebarHandler}>
          <Icon
            icon="ri:menu-2-line"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </div>
      <AnimatePresence>
        {show && (
          <div className="relative text-black-500 h-fit">
            <div className="bg-blend-overlay lg:block pt-3 pl-5 w-[250px]">
              <div className="pt-5 pr-5">
                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NavLink to="/employee-pool" className="">
                      <div className="p-2 my-2 rounded-xl bg-slate-50 hover:bg-slate-200 transition">
                        <p className="text-l flex font-bold gap-2 items-center align-middle">
                          <Icon
                            icon="ep:user"
                            className=""
                            style={{ width: "20px", height: "20px" }}
                          />
                          Employees
                        </p>
                      </div>
                    </NavLink>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/payment-view">
                      <div className="p-2 my-2 rounded-xl bg-slate-50 hover:bg-slate-200 transition">
                        <p className="text-l font-bold flex gap-2">
                          {" "}
                          <Icon
                            icon="solar:card-2-outline"
                            classname="text-5xl"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Payments
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link to="/QR-CodeScanner" target="_blank">
                      <div className="p-2 my-2 rounded-xl bg-slate-50 hover:bg-slate-200 transition">
                        <p className="text-l font-bold flex gap-2">
                          <Icon
                            icon="ri:qr-code-line"
                            classname="text-5xl"
                            style={{ width: "20px", height: "20px" }}
                          />
                          QR Scan
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link to="/diet-plan">
                      <div className="p-2  w-50 my-2 rounded-xl bg-slate-50  hover:bg-slate-200 transition">
                        <p className="text-l font-bold flex gap-2">
                          <Icon
                            icon="pajamas:food"
                            classname="text-5xl"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Diet Plan
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/show-inventory">
                      <div className="p-2  w-50 my-2 rounded-xl bg-slate-50 hover:bg-slate-200 transition">
                        <p className="text-l font-bold flex gap-2">
                          <Icon
                            icon="mingcute:inventory-line"
                            classname="text-5xl"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Inventory
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link to="/view-all-users">
                      <div className="p-2  w-50 my-2 rounded-xl bg-slate-50 hover:bg-slate-200 transition">
                        <p className="text-l font-bold flex gap-2">
                          <Icon
                            icon="majesticons:users-line"
                            classname="text-5xl"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Users
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Link to="/notifications">
                      <div className="p-2  w-50 my-2 rounded-xl bg-slate-50  hover:bg-slate-200 transition">
                        <p className="text-l font-bold flex gap-2">
                          <Icon
                            icon="ic:round-edit-notifications"
                            classname="text-5xl"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Notifications
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-120%" }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Link to="/notifications">
                      <div
                        className="p-2  w-50 my-2 rounded-xl bg-green-400 flex gap-2  hover:bg-green-500 transition"
                        onClick={(e) => {
                          localStorage.clear();
                          window.location.href = "/admin-login";
                        }}
                      >
                        <Icon icon="line-md:logout" />
                        <p className="text-center  font-bold">Logout</p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SideBar;
