// src/DeveloperCards.js
import React from "react";
import { motion } from "framer-motion";
import developer1 from "../assets/developers/developer1.jpg";
import developer2 from "../assets/developers/developer2.png";
import developer3 from "../assets/developers/developer3.png";
import developer4 from "../assets/developers/developer4.png";
import developer5 from "../assets/developers/developer5.png";
import developer6 from "../assets/developers/developer6.png";

const developers = [
  { id: 1, name: "Alice", image: { developer1 } },
  { id: 2, name: "Bob", image: { developer2 } },
  { id: 3, name: "Charlie", image: { developer3 } },
];

const DeveloperCards = () => {
  return (
    <div className="flex space-x-4 justify-center mt-10">
      {developers.map((developer) => (
        <motion.div
          key={developer.id}
          className="w-40 h-40 bg-blue-500 text-white flex flex-col items-center justify-center rounded-lg"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ background: `url${developer1}` }}>
            <img
              src={developer.image}
              alt={developer.name}
              className="w-20 h-20 rounded-full mb-2"
            />
            <span>{developer.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DeveloperCards;
