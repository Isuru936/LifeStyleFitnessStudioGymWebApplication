function SideBar() {
  return (
    <div className="hidden lg:block text-black-500 h-screen fixed">
      <div className="hidden lg:block pt-10 pb-10 pl-5 pr-0 w-[250px] ">
        <p className="text-3xl font-bold">Content</p>
        <div className="pt-5 pr-5">
          <div className="p-2 my-2 rounded-xl  hover:bg-navSelectedCol transition">
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
          <div className="p-2 my-2 rounded-xl hover:bg-navSelectedCol transition">
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
          <div className="p-2 my-2 rounded-xl hover:bg-navSelectedCol transition">
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
          <div className="p-2 my-2 rounded-xl hover:bg-navSelectedCol transition">
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
          <div className="p-2 bg-navSelectedCol w-50 my-2 rounded-xl hover:bg-navSelectedCol transition">
            <p className="text-l font-bold">
              <span
                className="icon-[ant-design--apple-outlined] mx-2"
                style={{
                  width: "22px",
                  height: "22px",
                }}
              />
              Nutrition
            </p>
          </div>
        </div>
      </div>
      <div className=" bottom-0 left-0 p-5">
        <button className="bg-lightBlue-300 font-bold text-white p-3 rounded-2xl w-full hover:bg-blue-900">
          <p className="">
            <span
              className="icon-[mingcute--add-fill] mx-1"
              style={{ height: "20px", width: "20px" }}
            />
            Add Food Item
          </p>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
