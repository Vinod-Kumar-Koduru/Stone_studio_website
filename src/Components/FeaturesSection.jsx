import React, { useRef } from "react";
import mockData from "../mockdata";
import { motion } from "framer-motion";

const intialFeatures = mockData.FeatureSections;

const FeatureSection = () => {
  return (
    <section className="flex flex-col lg:flex-row md:pt-10 gap-3 bg-black w-full">
      <motion.div
        initial={{ scale: 0.8, translateX: "-50%" }}
        whileInView={{ scale: 1, translateX: "0%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col lg:ml-20 lg:items-start lg:text-left h-3xl w-3xl mb:h-2xl mb-4 "
      >
        <img
          src={intialFeatures[0].imageUrl}
          alt={intialFeatures[0].alt}
          className="sm:object-cover lg:h-[768px] lg:w-2xl"
        />
        <p className="text-[1rem] md:text-[1.5rem] lg:text-2xl text-foreground">
          {intialFeatures[0].description}
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, translateX: "50%" }}
        whileInView={{ scale: 1, translateX: "0%" }}
        transition={{ duration: 1, delay: 0 }}
        className="flex flex-col lg:items-start lg:text-left h-3xl w-3xl mb-4 text-center lg:mr-5"
      >
        <img
          src={intialFeatures[1].imageUrl}
          alt={intialFeatures[1].alt}
          className="sm:object-cover lg:h-[768px] lg:w-2xl"
        />
        <p className="text-[1rem] md:text-[1.5rem] lg:text-2xl text-foreground">
          {intialFeatures[1].description}
        </p>
      </motion.div>
    </section>
  );
};
export default FeatureSection;
