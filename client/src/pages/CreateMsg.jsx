import logo from "../assets/logo.png";
// Import your background image
import backgroundImage from "../assets/lot.jpgcd";

function CreateMsg() {
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
          <h2 className="font-bold text-xl text-black">ADD NEW MESSAGE</h2>
        </div>
        <div className="flex flex-col items-center h-screen">
          {/* Subject */}
          <div className="flex flex-col mb-4 w-full md:w-96">
            <label htmlFor="subject" className="text-black font-medium mb-2">
              Subject:
            </label>
            <textarea
              id="subject"
              className="border rounded py-1 px-2 w-full bg-blue-100" // Add a light blue background
            ></textarea>
          </div>

          {/* Message */}
          <div className="flex flex-col mb-4 w-full md:w-96">
            <label htmlFor="message" className="text-black font-medium mb-2">
              Message:
            </label>
            <textarea
              id="message"
              className="border rounded py-1 px-2 w-full bg-blue-100" // Add a light blue background
            ></textarea>
          </div>

          {/* Date */}
          <div className="flex flex-col mb-4 w-full md:w-96">
            <label htmlFor="date" className="text-black font-medium mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              className="border rounded py-1 px-2 w-full bg-blue-100"
            />
          </div>

          {/* Button (Center) */}
          <div className="flex justify-center mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Upload Message
            </button>
          </div>

          {/* Button (Left) */}
          <div className="flex justify-start mb-4">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMsg;
