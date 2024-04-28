import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles/SideBarStyles.css";
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
      <CSSTransition
        in={show}
        timeout={300}
        classNames="sidebar"
        unmountOnExit // this prop will unmount the component when it is hidden, so that other divs can use up the space
      >
        <div className="relative text-black-500 h-fit">
          <div
            className={`bg-blend-overlay lg:block pt-3 pl-5 w-[250px] ${
              show
                ? "bg-slate-50 absolute top-0 left-0 z-50 lg:static lg:bg-transparent"
                : ""
            }`}
          >
            <p className="text-3xl font-bold">Content</p>
            <div className="pt-5 pr-5">
              <NavLink to="/employee-pool" acc>
                <div className="p-2 my-2 rounded-xl  hover:bg-slate-200 transition">
                  <p className="text-l font-bold">
                    <span
                      className="icon-[ph--users] mx-2 "
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />{" "}
                    {""}
                    Employees
                  </p>
                </div>
              </NavLink>
              <Link to="/workoutpool">
                <div className="p-2 my-2 rounded-xl hover:bg-slate-200 transition">
                  <p className="text-l font-bold">
                    <span
                      className="icon-[iconoir--gym] mx-2"
                      style={{
                        width: "22px",
                        height: "22px",
                      }}
                    />{" "}
                    Workouts
                  </p>
                </div>
              </Link>
              <Link to="/payment-view">
                <div className="p-2 my-2 rounded-xl hover:bg-slate-200 transition">
                  <p className="text-l font-bold">
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
              <div className="p-2 my-2 rounded-xl hover:bg-slate-200 transition">
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
              <Link to="/diet-plan">
                <div className="p-2  w-50 my-2 rounded-xl  hover:bg-slate-200 transition">
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
              <Link to="/show-inventory">
                <div className="p-2  w-50 my-2 rounded-xl hover:bg-slate-200 transition">
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
              <Link to="/customer-feedbacks">
                <div className="p-2  w-50 my-2 rounded-xl  hover:bg-slate-200 transition">
                  <p className="text-l font-bold">
                    <span
                      className="icon-[mdi--feedback-outline] mx-2"
                      style={{
                        width: "22px",
                        height: "22px",
                      }}
                    />{" "}
                    Customer Feedback
                  </p>
                </div>
              </Link>
              <Link to="/create-notification">
                <div className="p-2  w-50 my-2 rounded-xl  hover:bg-slate-200 transition">
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
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default SideBar;
