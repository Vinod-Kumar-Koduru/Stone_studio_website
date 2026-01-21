import React, { useRef } from "react";
import mockData from "../mockdata";
import { motion } from "framer-motion";

const intialFeatures = mockData.FeatureSections;

const FeatureSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center pt-10 gap-8 bg-black w-full position:relative">
      <motion.div
        initial={{ scale: 0.8, translateX: "-50%" }}
        whileInView={{ scale: 1, translateX: "0%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col items-start lg:ml-10 h-3xl w-3xl md:h-2xl mb-4 w-full"
      >
        <img
          src={intialFeatures[0].imageUrl}
          alt={intialFeatures[0].alt}
        />
        <p className="max-w-4xl mx-auto space-y-4 
          text-base sm:text-lg md:text-xl text-foreground position:absolute">
          {intialFeatures[0].description}
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, translateX: "50%" }}
        whileInView={{ scale: 1, translateX: "0%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col items-start lg:mr-10 h-3xl w-3xl lg:mt-6 md:h-2xl mb-4 w-full"
      >
        <img
          src={intialFeatures[1].imageUrl}
          alt={intialFeatures[1].alt}
        />
        <p className="max-w-4xl mx-auto space-y-4 
          text-base sm:text-lg md:text-xl text-foreground">
          {intialFeatures[1].description}
        </p>
      </motion.div>
    </section>
  );
};
export default FeatureSection;
