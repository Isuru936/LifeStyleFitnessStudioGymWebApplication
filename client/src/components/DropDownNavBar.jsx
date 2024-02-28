import { useState } from "react";
import "./styles/SideBarStyles.css";

function SideBar() {
  const [show, setShow] = useState(false);

  const sidebarHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-fit h-fit relative">
      <div className="pl-3 pt-8">
        <button className="cursor-pointer" onClick={sidebarHandler}>
          <span
            className="icon-[ri--menu-2-line]"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </div>
      {show && (
        <div className="absolute top-15 left-0 w-[250px] z-50 bg-slate-50 transition-opacity duration-500">
          <div className="bg-blend-overlay lg:block pt-3 pl-5">
            <hr />

            <p className="text-xl font-bold bg-blue-50">Content</p>
            <hr />
            <div className="pt-1 pr-5">
              <div className="p-2 my-2 rounded-xl hover:bg-slate-200 transition">
                <p className="text-l font-bold">
                  <span
                    className="icon-[ph--users] mx-2 "
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  Users
                </p>
              </div>
              <div className="p-2 my-2 rounded-xl hover:bg-slate-200 transition">
                <p className="text-l font-bold">
                  <span
                    className="icon-[iconoir--gym] mx-2"
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                  />
                  Workouts
                </p>
              </div>
              <div className="p-2 my-2 rounded-xl hover:bg-slate-200 transition">
                <p className="text-l font-bold">
                  <span
                    className="icon-[fluent--payment-16-regular] mx-2"
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                  />
                  Payments
                </p>
              </div>
              <div className="p-2 my-2 rounded-xl hover:bg-slate-200 transition">
                <p className="text-l font-bold">
                  <span
                    className="icon-[bi--qr-code-scan] mx-2"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  QR Scan
                </p>
              </div>
              <div className="p-2  w-50 my-2 rounded-xl bg-side-bar-hover hover:bg-slate-200 transition">
                <p className="text-l font-bold">
                  <span
                    className="icon-[ant-design--apple-outlined] mx-2"
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                  />
                  Diet Plan
                </p>
              </div>
              <div className="p-2  w-50 my-2 rounded-xl hover:bg-slate-200 transition">
                <p className="text-l font-bold">
                  <span
                    className="icon-[mingcute--inventory-line] mx-2"
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                  />
                  Inventory
                </p>
              </div>
              <div className="p-2  w-50 my-2 rounded-xl  hover:bg-slate-200 transition">
                <p className="text-l font-bold">
                  <span
                    className="icon-[mdi--feedback-outline] mx-2"
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                  />
                  Customer Feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
