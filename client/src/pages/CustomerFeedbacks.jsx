import React from "react";
import bgImg from "../assets/asdad.jpeg";
import DropDownNavBar from "../components/DropDownNavBar";
import SideBar from "../components/SideBar";
import logo from "../assets/logo.png";
import { useState } from "react";

function CustomerFeedbacks() {
  const [mobileView] = useState(window.innerWidth < 768);
  return (
    <div>
      <div
        className="inline-flex flex-col items-start min-h-screen w-screen bg-cover bg-opacity-95 bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      >
        <div className="flex flex-col w-full ">
          <div className="flex flex-row">
            {/* side bar, select user */}
            <div className="flex-col">
              {mobileView ? <DropDownNavBar /> : <SideBar />}
            </div>
            <div className=" font-bold mt-0 ml-3 w-full">
              <div className="flex bg-slate-50 bg-opacity-30 pt-5 text-4xl justify-between items-center">
                Customer Feedbacks
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
                        placeholder="Search Customer Feedbacks"
                        className="bg-slate-100 rounded-xl outline-none p-4"
                      />
                    </div>
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="divide-y divide-gray-200 w-[800px]">
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr className="hover:bg-slate-200">
                            <td className="px-6 py-4 whitespace-nowrap text-sm relative">
                              <div className="flex justify-between">
                                <p>Isuru Gayantha</p>
                                <p className="justify-end absolute right-5 font-normal">
                                  5 sec ago..
                                </p>
                              </div>
                              <p className="font-normal">Yo Rock</p>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-200">
                            <td className="px-6 py-4 whitespace-nowrap text-sm relative">
                              <div className="flex justify-between">
                                <p>Isuru Gayantha</p>
                                <p className="justify-end absolute right-5 font-normal">
                                  5 days ago..
                                </p>
                              </div>
                              <p className="font-normal whitespace-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi atque praesentium, modi
                                eveniet rerum architecto nulla quod vel maiores
                                optio accusantium tempora soluta, magni et? Qui
                                nesciunt maxime dolores ea.Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Animi atque
                                praesentium, modi eveniet rerum architecto nulla
                                quod vel maiores optio accusantium tempora
                                soluta, magni et? Qui nesciunt maxime dolores
                                ea.
                              </p>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-100"></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedbacks;
