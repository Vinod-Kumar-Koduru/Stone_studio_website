import React from "react";
import { motion } from "framer-motion";
const ProductCardEach = ({ design, onSelect }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="group shadow-md hover:shadow-xl transition cursor-pointer"
        onClick={() => onSelect?.()}
      >
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-120 object-cover group-hover:scale-105 transition duration-500"
        />
      </motion.div>
    </>
  );
};

export default ProductCardEach;
