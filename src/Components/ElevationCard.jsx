import React from "react";
import { motion } from "framer-motion";

const ElevationCard = (props) => {
  const { EachCard } = props;
  const { image, alt } = EachCard;
  //console.log(image, alt);
  return (
    <motion.li
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <img
        src={image}
        className="w-full h-auto object-cover rounded-md"
        alt={alt}
      />
    </motion.li>
  );
};
export default ElevationCard;
