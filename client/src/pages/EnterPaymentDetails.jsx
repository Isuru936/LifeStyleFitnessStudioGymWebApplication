import { Link } from "react-router-dom";
import bgImg from "../assets/wp11154513.jpg";

function EnterPaymentDetails() {
  return (
    <>
      <div
        className="inline-flex flex-col items-start h-screen w-screen bg-cover bg-[#212121] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col w-full  ">
          <p className="mx-auto text-3xl font-extrabold text-white">
            HERE IS THE NAVIGATION BAR
          </p>
          <div className="flex flex-row m-5">
            {/* side bar, select user */}
            <div className="flex-col"></div>
            <div className="p-4 mt-3 bg-[#191819] w-fit mx-auto rounded-xl shadow-md">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold mx-auto mb-5 text-white">
                  Enter your Payment Details
                </h1>
              </div>
              <div className="flex flex-col  justify-center w-fit h-full mx-auto">
                <form className="mx-auto">
                  <div className="mb-5 ">
                    <div className="border-[#9C5C4A] border w-fit lg:w-full rounded-xl pr-0 h-fit ">
                      <input
                        type="text"
                        className="bg-[#121212] p-2 rounded-xl outline-none text-[#9C5C4A] w-full"
                        placeholder="Street Address" // Adjusted width
                      />
                    </div>
                    <div className="border-[#9C5C4A] border w-fit lg:w-full rounded-xl pr-0 h-fit  mt-5">
                      <input
                        type="text"
                        className="bg-[#121212] p-2 rounded-xl outline-none text-[#9C5C4A]  w-full"
                        placeholder="Apt, unit, suite, etc. (optional)" // Adjusted width
                      />
                    </div>
                    <div className="border-[#9C5C4A] border w-fit lg:w-full rounded-xl pr-0 h-fit  mt-5">
                      <input
                        type="text"
                        className="bg-[#121212] p-2 rounded-xl outline-none text-[#9C5C4A]  w-full"
                        placeholder="City" // Adjusted width
                      />
                    </div>
                  </div>
                  <div className="lg:flex mb-5">
                    <div className="border-[#9C5C4A] border w-fit lg:w-full rounded-xl pr-0 h-fit ">
                      <input
                        type="text"
                        className="bg-[#121212] p-2 rounded-xl outline-none text-[#9C5C4A] "
                        placeholder="State" // Adjusted width
                      />
                    </div>
                    <div className="border-[#9C5C4A] border w-fit rounded-xl pr-0 h-fit mt-5 lg:mt-0 lg:ml-5">
                      <input
                        type="text"
                        className="bg-[#121212] p-2 rounded-xl outline-none text-[#9C5C4A] "
                        placeholder="Zip Code" // Adjusted width
                      />
                    </div>
                  </div>
                  <Link to="/add-card">
                    <button
                      type="submit"
                      className="w-full bg-[#F2420D] text-white font-bold p-3 rounded-xl hover:bg-[#cb7445] mt-5 mb-10 hover:tracking-wider transition-transform duration-300 ease-linear"
                    >
                      CHOOSE PAYMENT METHOD
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterPaymentDetails;
