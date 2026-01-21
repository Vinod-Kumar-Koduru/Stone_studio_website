import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import ElevationCardEle from "../Components/ElevationCardEle.jsx";
import mockData from "../mockdata.js";
import BottomCard from "../Components/BottomSection.jsx";
import BottomFooter from "../Components/Footer.jsx";
const ElevationDataIntial = mockData.elevationData;
const ElevationStone = () => {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[40vh] lg:h-screen bg-black">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dl4viyuwh/image/upload/v1765871595/Rustic-natural-stone-facades_s4cpx4.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-5xl font-bold text-white mb-3"
            >
              Elevation Stone Designs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-gray-200 max-w-xl"
            >
              Discover premium elevation stone designs crafted for modern and
              timeless architecture.
            </motion.p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ElevationDataIntial.map((design) => (
              <ElevationCardEle key={design.id} design={design} />
            ))}
          </div>
        </div>
      </section>
      <BottomCard />
      <BottomFooter />
    </div>
  );
};

export default ElevationStone;
