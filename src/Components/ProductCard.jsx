import React, { useState } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import slugify from "../utils/slugify";
=======
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3

const TiltCard = ({ CardDetails }) => {
  const { image, title, description } = CardDetails;

  const [showDetails, setShowDetails] = useState(false);
<<<<<<< HEAD
  const navigate = useNavigate();

  const toggleMobile = () => setShowDetails(!showDetails);

  const goToDetail = (e) => {
    e.stopPropagation();
    // Navigate to the products list filtered by slugified product title
    navigate(`/products/${slugify(CardDetails.title)}`);
  };

=======

  const toggleMobile = () => setShowDetails(!showDetails);

>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
  return (
    <motion.li
      onClick={toggleMobile} // Mobile & Tablet
      whileHover={() => setShowDetails(true)} // Desktop hover in
<<<<<<< HEAD
      onHoverEnd={() => setShowDetails(false)}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }} // Desktop hover out
=======
      onHoverEnd={() => setShowDetails(false)} // Desktop hover out
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
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
        <p className="text-sm opacity-90 drop-shadow-lg">{description}</p>
<<<<<<< HEAD
        <button
          onClick={goToDetail}
          className="mt-3 bg-accent px-4 py-2 rounded-xl shadow-lg"
        >
=======
        <button className="mt-3 bg-accent px-4 py-2 rounded-xl shadow-lg">
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
          More
        </button>
      </motion.div>
    </motion.li>
  );
};

export default TiltCard;
