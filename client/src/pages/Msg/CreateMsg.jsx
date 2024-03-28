// TODO: Add Logo
// Import your background image
import backgroundImage from "../../assets/sim.jpg";
import SideBar from "../../components/SideBar";

function InventoryUpdateDlt() {
  return (
    <div className="">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-row p-8">
          <SideBar />
          <div className="flex flex-col  justify-center mx-auto w-full">
            <div className="mt-5 justify-center mx-auto">
              <h2 className="font-bold text-black text-3xl">NEW MESSAGE</h2>
            </div>
            <div className="mt-8 flex flex-row mx-auto justify-center w-full">
              <div className="flex  flex-col justify-center mx-auto w-full md:w-1/3 ml-5 mr-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="itemName"
                    className="text-black font-medium mb-2"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    className="border rounded py-1 px-2 w-full"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="description"
                    className="text-black font-medium mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="description"
                    className="border rounded py-1 px-2 h-24 w-full" // Adjust the 'h-24' value for a longer textarea
                  ></textarea>
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="date" className="text-black font-medium mb-2">
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="border rounded py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-4 flex flex-col md:flex-row">
                  <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0 md:mr-2">
                    Update
                  </button>
                  <button className="bg-orange-500 text-white py-2 px-4 rounded">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryUpdateDlt;
