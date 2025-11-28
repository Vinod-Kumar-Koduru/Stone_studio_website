import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full h-100 overflow-hidden flex items-center justify-center bg-black md:min-h-screen">
        <video
          src="https://res.cloudinary.com/dl4viyuwh/video/upload/v1763291240/Hero_Page_Video_Clip_Generation_yynb9t.mp4"
          alt="handCraft video"
          autoPlay
          loop
          muted
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-70 pb-10"
        />
        {/* Mobile background fallback */}
        <div className="absolute inset-0 w-full h-100 opacity-60 sm:items-center">
          <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-3 sm:px-4 md:px-6 lg:px-8 translate-y-1/2">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-forground  mb-4 md:mb-8"
            >
              Stone Studio
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-gold mb-8 md:mb-12 font-extrabold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Crafting Luxury in Stone
            </motion.p>
            <motion.button
              className="px-6 sm:px-8 py-2 sm:py-3 border border-stone-gold text-stone-gold font-semibold hover:bg-stone-gold hover:text-stone-dark transition-colors rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Explore
            </motion.button>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="hidden w-6 h-6 md:block text-stone-gold" />
        </motion.div>
      </section>
    </>
  );
};
export default HeroSection;
