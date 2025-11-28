import React, { useState } from "react";
import { motion } from "framer-motion";

const TiltCard = ({ CardDetails }) => {
  const { image, title } = CardDetails;

  const [showDetails, setShowDetails] = useState(false);

  const toggleMobile = () => setShowDetails(!showDetails);

  return (
    <motion.li
      onClick={toggleMobile} // Mobile & Tablet
      whileHover={() => setShowDetails(true)} // Desktop hover in
      onHoverEnd={() => setShowDetails(false)} // Desktop hover out
      className="relative w-full rounded-xl cursor-pointer overflow-hidden shadow-xl"
    >
      {/* IMAGE */}
      <img src={image} alt={title} className="w-full h-auto object-cover" />

      {/* GLASS OVERLAY ON BOTTOM HALF */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: showDetails ? "10%" : "100%",
          opacity: showDetails ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          absolute inset-x-0 bottom-0
          h-1/2
          backdrop-blur-xl
          bg-white/20
          border-t border-white/30
          flex flex-col items-center justify-center
          px-4 text-center text-white
        "
      >
        <h1 className="text-xl font-semibold mb-2 drop-shadow-lg">{title}</h1>

        <p className="text-sm opacity-90 drop-shadow-lg">
          Product description goes here. Customize as needed.
        </p>

        <button className="mt-3 bg-accent px-4 py-2 rounded-xl shadow-lg">
          More
        </button>
      </motion.div>
    </motion.li>
  );
};

export default TiltCard;
