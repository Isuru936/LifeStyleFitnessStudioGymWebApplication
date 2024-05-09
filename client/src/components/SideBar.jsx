import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  const [show, setShow] = useState(false);

  const sidebarHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-fit h-fit">
      <div className="pl-3 pt-8">
        <button className="cursor-pointer" onClick={sidebarHandler}>
          <span
            className="icon-[ri--menu-2-line]"
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
                        <p className="text-l font-bold">
                          <span
                            className="icon-[ph--users] mx-2"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />{" "}
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
                        <p className="text-l font-bold">
                          {" "}
                          <span
                            className="icon-[fluent--payment-16-regular] mx-2"
                            style={{
                              width: "22px",
                              height: "22px",
                            }}
                          />{" "}
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
                        <p className="text-l font-bold">
                          <span
                            className="icon-[bi--qr-code-scan] mx-2"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />{" "}
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
                        <p className="text-l font-bold">
                          <span
                            className="icon-[ant-design--apple-outlined] mx-2"
                            style={{
                              width: "22px",
                              height: "22px",
                            }}
                          />{" "}
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
                        <p className="text-l font-bold">
                          <span
                            className="icon-[mingcute--inventory-line] mx-2"
                            style={{
                              width: "22px",
                              height: "22px",
                            }}
                          />{" "}
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
                        <p className="text-l font-bold">
                          <span
                            className="icon-[ph--users] mx-2"
                            style={{
                              width: "22px",
                              height: "22px",
                            }}
                          />{" "}
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
                        <p className="text-l font-bold">
                          <span
                            className="icon-[ion--notifications-outline] mx-2"
                            style={{
                              width: "22px",
                              height: "22px",
                            }}
                          />{" "}
                          Notifications
                        </p>
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
