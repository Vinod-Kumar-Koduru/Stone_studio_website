import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import BottomCard from "../Components/BottomSection";
import BottomFooter from "../Components/Footer.jsx";
import {
  Gem,
  Hammer,
  Layers,
  Handshake,
  Headset,
  Building2,
} from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* HERO ABOUT SECTION */}
      <section
        className="
          relative h-[100vh] sm:h-[100vh]
          bg-[url('https://res.cloudinary.com/dl4viyuwh/image/upload/v1768809978/Gemini_Generated_Image_yqoo59yqoo59yqoo_goeghb.png')]
          bg-cover bg-center
        "
      >
        <div className="absolute inset-0 bg-black/10">
          <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:mt-40">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-5xl font-bold text-white mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="max-w-2xl text-sm sm:text-base text-gray-200 leading-relaxed"
            >
              Stone Studio is a trusted name in premium natural stones and
              handcrafted stone creations, delivering timeless elegance,
              durability, and refined craftsmanship.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-accent mb-4">
              Stone Studio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stone Studio was founded with a vision to redefine stone
              craftsmanship through quality, authenticity, and timeless design.
              Our journey is built on strong values, transparent practices, and
              an uncompromising commitment to excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From premium natural stones to bespoke stone décor and handcrafted
              creations, every product reflects our dedication to superior
              materials and expert workmanship.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <video
              src="https://res.cloudinary.com/dl4viyuwh/video/upload/v1765808044/1_rqhsdf.mp4"
              alt="Stone Studio Interior"
              className="w-full h-full object-cover"
              muted={true}
              autoPlay={true}
              loop={true}
              playsInline={true}
            />
          </motion.div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="py-10 bg-muted pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center xs:flex xs:flex-col sm:flex-col md:flex md:flex-row gap-1.5">
          <motion.div
            initial={{ scale: 0.8, translateX: "-50%" }}
            whileInView={{ scale: 1, translateX: "0%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-col max-w-2xl"
          >
            <h2 className="text-3xl font-bold text-accent mb-6">
              Our Founders
            </h2>
            <p className="mx-auto text-muted-foreground mb-8">
              Stone Studio is led by passionate visionaries with deep-rooted
              expertise in stone craftsmanship. Their commitment to quality,
              ethical sourcing, and customer trust continues to shape the
              brand’s success.
            </p>
          </motion.div>
          {/* FOUNDERS IMAGE */}
          <motion.div
            initial={{ scale: 0.8, translateX: "50%" }}
            whileInView={{ scale: 1, translateX: "0%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="https://res.cloudinary.com/dl4viyuwh/image/upload/v1765868826/images_duebcv.jpg"
              alt="Founder"
              className="w-full h-full lg:w-[100rem] lg:h-[18rem] object-fit shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ scale: 0.8, translateX: "-50%" }}
            whileInView={{ scale: 1, translateX: "0%" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver premium-quality natural stones and handcrafted stone
              products that combine elegance, durability, and value—serving
              customers with expertise, innovation, and integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, translateX: "50%" }}
            whileInView={{ scale: 1, translateX: "0%" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as a leading stone studio known for exceptional
              quality, trusted relationships, and timeless architectural
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-accent text-center mb-10">
            Why Should You Buy From Stone Studio
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gem,
                title: "Premium Quality Stones",
                desc: "We source only the finest natural stones ensuring durability, elegance, and long-lasting value.",
              },
              {
                icon: Hammer,
                title: "Expert Craftsmanship",
                desc: "Every product is crafted with precision by skilled artisans with years of experience.",
              },
              {
                icon: Layers,
                title: "Wide Product Range",
                desc: "From marbles to handcrafted stone décor, we offer solutions for every space.",
              },
              {
                icon: Handshake,
                title: "Ethical & Transparent",
                desc: "Honest pricing, ethical sourcing, and clear communication you can trust.",
              },
              {
                icon: Headset,
                title: "Personalized Support",
                desc: "We guide you at every step—from selection to delivery and installation.",
              },
              {
                icon: Building2,
                title: "Industry Trusted",
                desc: "Preferred by architects, builders, and designers for quality consistency.",
              },
            ].map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                initial={{ scale: 0.8, translateX: "-50%" }}
                whileInView={{ scale: 1, translateX: "0%" }}
                transition={{ duration: 1, delay: 0.2 }}
                key={index}
                className="
            bg-background p-6 rounded-xl shadow-sm
            hover:shadow-md transition
          "
              >
                <div className="mb-4 text-accent">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BottomCard />
      <BottomFooter />
    </>
  );
};

export default AboutUs;
