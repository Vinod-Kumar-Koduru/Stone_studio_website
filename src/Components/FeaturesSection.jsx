import React, { useRef } from "react";
import mockData from "../mockdata";
import { motion } from "framer-motion";

const intialFeatures = mockData.FeatureSections;

const FeatureSection = () => {
  return (
<<<<<<< HEAD
    <section className="flex flex-col lg:flex-row items-center pt-10 gap-8 bg-black w-full position:relative">
=======
    <section className="flex flex-col lg:flex-row md:pt-10 gap-8 bg-black w-full">
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
      <motion.div
        initial={{ scale: 0.8, translateX: "-50%" }}
        whileInView={{ scale: 1, translateX: "0%" }}
        transition={{ duration: 1, delay: 0.2 }}
<<<<<<< HEAD
        className="flex flex-col items-start lg:ml-10 h-3xl w-3xl md:h-2xl mb-4 w-full"
=======
        className="flex flex-col lg:ml-10 lg:items-start lg:text-left h-3xl w-3xl mb:h-2xl mb-4"
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
      >
        <img
          src={intialFeatures[0].imageUrl}
          alt={intialFeatures[0].alt}
<<<<<<< HEAD
        />
        <p className="max-w-4xl mx-auto space-y-4 
          text-base sm:text-lg md:text-xl text-foreground position:absolute">
=======
          className="sm:object-cover lg:h-[768px] lg:w-2xl"
        />
        <p className="text-[1rem] md:text-[1.5rem] lg:text-2xl text-foreground">
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
          {intialFeatures[0].description}
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, translateX: "50%" }}
        whileInView={{ scale: 1, translateX: "0%" }}
<<<<<<< HEAD
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col items-start lg:mr-10 h-3xl w-3xl lg:mt-6 md:h-2xl mb-4 w-full"
=======
        transition={{ duration: 1, delay: 0 }}
        className="flex flex-col lg:items-start lg:text-left h-3xl w-3xl mb-4 text-center lg:mr-5"
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
      >
        <img
          src={intialFeatures[1].imageUrl}
          alt={intialFeatures[1].alt}
<<<<<<< HEAD
        />
        <p className="max-w-4xl mx-auto space-y-4 
          text-base sm:text-lg md:text-xl text-foreground">
=======
          className="sm:object-cover lg:h-[768px] lg:w-2xl"
        />
        <p className="text-[1rem] md:text-[1.5rem] lg:text-2xl text-foreground">
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
          {intialFeatures[1].description}
        </p>
      </motion.div>
    </section>
  );
};
export default FeatureSection;
