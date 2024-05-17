import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import NavBar from "../components/UserNavbar.jsx";
import BgVideo from "../components/BgVideo.jsx";
import developer1 from "../assets/developers/developer1.jpg";
import developer2 from "../assets/developers/developer2.png";
import developer3 from "../assets/developers/developer3.png";
import developer4 from "../assets/developers/developer4.png";
import developer5 from "../assets/dev5.png";
import developer6 from "../assets/developers/developer6.png";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import DeveloperCards from "../components/Developers.jsx";

const developerImages = [
  { src: developer1, name: "Vinuka Wijerathne" },
  { src: developer2, name: "Shafry Mohommad" },
  { src: developer3, name: "Isuru Bandara" },
  { src: developer4, name: "Umaya Thilakarathna" },
  { src: developer5, name: "Sewmini Swarnasinghe" },
  { src: developer6, name: "Thamalsha Perera" },
];

function DashBoard() {
  useEffect(() => {
    const loopAnimation = async () => {
      for (let i = 0; i < developerImages.length; i++) {
        await imageControls[i].start({ scale: 1.2 });
        await imageControls[i].start({ scale: 1 });
      }
    };
    loopAnimation();
  }, []);

  const imageControls = developerImages.map(() => useAnimation());

  return (
    <div>
      <NavBar />
      <BgVideo />
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold">PEOPLE WHO RUN THE SHOW</h2>
        <p className="text-lg mt-4 mx-auto max-w-2xl">
          Meet our dedicated team of developers who have worked tirelessly to
          bring this platform to life. Each member of the team brings a wealth
          of experience and passion to deliver an exceptional experience for our
          users.
        </p>
        <div className="flex justify-center items-center mt-8 flex-wrap w-screen">
          {developerImages.map((developer, index) => (
            <motion.div
              key={index}
              className="rounded-full w-48 h-5w-48 flex flex-col items-center  mx-4 mb-4"
              animate={imageControls[index]}
            >
              <motion.div
                className="w-48 h-5w-48 rounded-full overflow-hidden"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.img
                  src={developer.src}
                  alt={developer.name}
                  className="w-48 h-48 object-cover"
                />
              </motion.div>
              <p className="text-l">{developer.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-lg mt-4 mx-auto max-w-2xl">
          Connect with us on social media for the latest updates and promotions!
        </p>
        <div className="flex justify-center items-center mt-8 space-x-8">
          <a
            href="https://www.instagram.com/lifestyle_fitnessstudio/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={40}
              className="text-gray-700 hover:text-gray-900"
            />
          </a>
          <a
            href="https://www.facebook.com/lifestylefitnessstudiokandy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={40}
              className="text-gray-700 hover:text-gray-900"
            />
          </a>
          <a
            href="https://www.tiktok.com/@lifestylefitnessstudio?_t=8lA6Un3Gd1T&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={40} className="text-gray-700 hover:text-gray-900" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCcVD0uHzvwMFE1KuQ9R9EEQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              size={40}
              className="text-gray-700 hover:text-gray-900"
            />
          </a>
        </div>
        <p className="text-lg mt-4">
          Call us at:{" "}
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            +1 (234) 567-890
          </a>
        </p>
        <p className="text-lg mt-4">
          Visit us at:{" "}
          <span className="text-gray-700">
            No.198/11/12 Lifestyle Fitness Studio, George E de Silva Mawatha,
            Santa Maria Church Lane, Kandy 20000
          </span>
        </p>
        <div className="mt-8 flex justify-center w-full border-2">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63055.75597800309!2d80.6181334!3d7.2866936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368852367cca1%3A0xdb673bd4769ce11e!2sLifeStyle%20Fitness%20Studio!5e0!3m2!1sen!2slk!4v1629890745683!5m2!1sen!2slk"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-96"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
