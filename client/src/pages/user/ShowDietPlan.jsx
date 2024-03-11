import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import bgImg from "../../assets/pexels-suzy-hazelwood-1098529.jpg";
import proImage from "../../assets/proImage.png";
import proImage2 from "../../assets/proImage2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="h-screen overflow-y-auto">
      {" "}
      {/* Use overflow-y-auto to enable scrolling */}
      <div
        className="flex flex-row items-start min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="m-4">
          <div className="mb-3 ml-3 mr-3 w-full">
            <img src={logo} alt="" />
          </div>
          <hr />
          <h1 className="text-4xl font-bold ml-10">Diet Plans</h1>
          <div className="text-blue-900 ml-10">
            <p>The diet plans were assigned by your instructor</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center m-5">
            <div className="lg:ml-5">
              <div className="flex flex-row justify-center lg:flex-col lg:mr-3">
                <button
                  onClick={() => handleButtonClick(1)}
                  className={`${
                    activeButton === 1 ? "bg-orange-700" : "bg-black "
                  } text-white font-semibold rounded w-20 focus:outline-none mb-3 hover:scale-110 transition focus:ring-2 mr-3 focus:ring-orange-700 pt-2 pb-2`}
                >
                  <span
                    className="icon-[fluent--food-apple-24-regular] mr-2 ml-1 "
                    style={{ width: "24px", height: "20px" }}
                  />
                  Breakfast
                </button>
                <button
                  onClick={() => handleButtonClick(2)}
                  className={`${
                    activeButton === 2 ? "bg-orange-700" : "bg-black"
                  } text-white font-semibold rounded w-20 px-2 focus:outline-none mb-3 hover:scale-110 transition focus:ring-2 mr-3 focus:ring-orange-700 p-2`}
                >
                  <span
                    style={{ width: "24px", height: "20px" }}
                    className="icon-[fluent-mdl2--breakfast] mr-2 ml-1 "
                  />
                  Lunch
                </button>
                <button
                  onClick={() => handleButtonClick(3)}
                  className={`${
                    activeButton === 3 ? "bg-orange-700" : "bg-black"
                  } text-white font-semibold rounded w-20 px-2 focus:outline-none mb-3 hover:scale-110 transition focus:ring-2 mr-3 focus:ring-orange-700 p-2`}
                >
                  <span
                    className="icon-[mdi--dinner] mr-2 ml-1 "
                    style={{ width: "24px", height: "20px" }}
                  />
                  Dinner
                </button>
              </div>
            </div>
            <div className=" bg-white bg-opacity-50 shadow-md p-2 w-full h-full rounded border border-solid  ">
              {activeButton === 1 && (
                <div className="flex flex-wrap mt-1 w-full">
                  {[...Array(20)].map((_, index) => (
                    <div
                      key={index}
                      className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-36 lg:w-[200px] hover:scale-105 transition"
                    >
                      <img
                        src={proImage}
                        alt="product"
                        className="w-28 h-28 object-cover mx-auto rounded-xl"
                      />
                      <p className="text-black text-sm font-bold">
                        Egg whole, Cooked, fried
                      </p>
                      <span className="text-black text-xs">
                        205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {activeButton === 2 && (
                <div className="flex flex-wrap mt-1 w-full">
                  {[...Array(20)].map((_, index) => (
                    <div
                      key={index}
                      className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-36 lg:w-[200px] hover:scale-105 transition"
                    >
                      <img
                        src={proImage2}
                        alt="product"
                        className="w-28 h-28 object-cover mx-auto rounded-xl"
                      />
                      <p className="text-black text-sm font-bold">
                        Egg whole, Cooked, fried
                      </p>
                      <span className="text-black text-xs">
                        205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {activeButton === 3 && (
                <div className="flex flex-wrap mt-1 w-full">
                  {[...Array(20)].map((_, index) => (
                    <div
                      key={index}
                      className="food-card p-4 m-2 bg-white rounded-lg shadow-md h-auto w-36 lg:w-[200px] hover:scale-105 transition"
                    >
                      <img
                        src={proImage}
                        alt="product"
                        className="w-28 h-28 object-cover mx-auto rounded-xl"
                      />
                      <p className="text-black text-sm font-bold">
                        Egg whole, Cooked, fried
                      </p>
                      <span className="text-black text-xs">
                        205 calories, 13.5g protein, 1.4g carbs, 15.7g fat
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
