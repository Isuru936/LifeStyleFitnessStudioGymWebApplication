import logo from "../assets/logo.png";
// Import your background image
import backgroundImage from "../assets/sim.jpg";
function InventoryAdd() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="flex flex-col m-5">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-28" />
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl text-black">ADD INVENTORY</h2>
        </div>
        <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between">
          {/* Questions and input fields */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
            <div className="flex flex-col">
              <label htmlFor="itemName" className="text-black font-medium mb-2">
                Item/Machine/Equipment Name:
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
                Description:
              </label>
              <textarea
                id="description"
                className="border rounded py-1 px-2 h-24 w-full" // Adjust the 'h-24' value for a longer textarea
              ></textarea>
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="status" className="text-black font-medium mb-2">
                Status:
              </label>
              <select id="status" className="border rounded py-1 px-2 w-full">
                <option value="underMaintenance">Under Maintenance</option>
                <option value="outOfWork">Out of Work</option>
                <option value="brandNew">Brand New</option>
              </select>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto">
                Add Inventory
              </button>
            </div>
          </div>

          {/* Even larger image space */}
          <div className="w-full md:w-1/2 lg:w-2/3 mt-4 md:mt-0">
            <div className="w-full h-96 border border-dashed rounded-lg flex items-center justify-center mx-auto">
              {/* You can add an image or any other content here */}
              <span>Add Image</span>
              <img
                src="your_image_path.jpg"
                alt=""
                className="w-80 h-80 ml-4"
              />
            </div>

            {/* Button below the even larger image */}
            <div className="mt-4 text-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Add Image
              </button>
            </div>
          </div>
        </div>
        {/* Add more questions and input fields as needed */}
      </div>
    </div>
  );
}

export default InventoryAdd;
