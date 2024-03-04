import React from "react";
import bgImg from "../assets/about-us-bgImg.jpeg";
function ContactUs() {
  return (
    <div
      className="inline-flex flex-col items-start min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="flex flex-col lg:flex-row m-2 lg:m-16 bg-slate-50 bg-opacity-40 rounded-2xl">
        <div className=" mr-3 w-96 p-9  flex-1">
          <h1 className="text-3xl font-bold mb-3">Write to Us!</h1>
          <p className="font-semibold text-lg">Name</p>
          <input
            type="text"
            placeholder="ex: Saman Bandara"
            className="p-3 border w-full rounded-xl  outline-none"
          />
          <p>E-mail</p>
          <input
            type="email"
            placeholder="ex: youremail@gmail.coms"
            className="p-3 border w-full rounded-xl  outline-none"
          />
          <p>Message</p>
          <textarea
            name=""
            id=""
            cols="80"
            rows="10"
            className="border rounded-xl w-full outline-none p-5"
            placeholder="Type your message here..."
          ></textarea>
          <button
            type="submit"
            className="bg-orange-600 p-3 pl-5 pr-5 rounded-lg text-white font-bold hover:bg-orange-500 duration-300 transition-colors"
          >
            Send
          </button>
        </div>
        <div className="flex-1 ml-3 p-1 lg:p-9">
          <h1 className="text-3xl font-bold mb-3 ">Contact Us</h1>
          <div className="mt-10 ml-5 ">
            <div className="flex flex-row mb-5 hover:scale-110 translate duration-300 hover:text-orange-700">
              <span
                className="icon-[logos--whatsapp-icon]"
                style={{ width: "36px", height: "36px" }}
              />
              <p className="font-bold pt-1 ml-5">+94 77 123 4567</p>
            </div>
            <div className=" mb-5 hover:scale-110 translate duration-300 hover:text-orange-700">
              <a
                href="https://www.instagram.com/lifestyle_fitnessstudio/"
                className="flex flex-row"
                target="_blank"
              >
                <span
                  className="icon-[skill-icons--instagram] "
                  style={{ width: "36px", height: "36px" }}
                />
                <p className="font-bold pt-1 ml-5 ">lifestyle_fitnessstudio</p>
              </a>
            </div>
            <div className=" mb-5 hover:scale-110 translate duration-300 hover:text-orange-700">
              <a
                href="https://www.youtube.com/channel/UCcVD0uHzvwMFE1KuQ9R9EEQ"
                className="flex flex-row"
                target="_blank"
              >
                <span
                  className="icon-[logos--youtube-icon] "
                  style={{ width: "36px", height: "36px" }}
                />
                <p className="font-bold pt-1 ml-5 ">
                  @lifestylefitnessstudio8155
                </p>
              </a>
            </div>
            <div className=" mb-5 hover:scale-110 translate duration-300 hover:text-orange-700">
              <a
                href="https://www.google.com/maps/place/LifeStyle+Fitness+Studio/@7.2876168,80.6153886,16.35z/data=!4m6!3m5!1s0x3ae368852367cca1:0xdb673bd4769ce11e!8m2!3d7.2866936!4d80.6181334!16s%2Fg%2F1q5bvbn43?entry=ttu"
                className="flex flex-row"
                target="_blank"
              >
                <span
                  className="icon-[openmoji--location-indicator-red]"
                  style={{ width: "42px", height: "42px" }}
                />
                <p className="font-bold pt-1 ml-5 ">
                  No.198/11/12 Lifestyle Fitness Studio George E de Silva
                  Mawatha, Santa Maria Church Lane, Kandy 20000
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
