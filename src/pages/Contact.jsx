import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import BottomCard from "../Components/BottomSection";
import BottomFooter from "../Components/Footer.jsx";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* HERO SECTION */}
        <section className="relative sm:h-[100vh] w-full">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dl4viyuwh/image/upload/v1768808200/contact_hqwsap.png')] h-[100%] bg-cover ">
            <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 lg:mt-40">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className="text-3xl sm:text-5xl font-bold text-white mb-3"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className="text-sm sm:text-lg text-gray-200 max-w-xl"
              >
                Give us a call or send in your concerns through the form below.
              </motion.p>
            </div>
          </div>
        </section>

        {/* CONTACT CONTENT   if background color is then image not display "bg-background"*/}
        <section className="bg-accent-foreground py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* LEFT INFO */}
              <div className="space-y-8 text-sm sm:text-base">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-accent font-semibold mb-2"
                  >
                    STORE ADDRESS:
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    8-9-388/34/7/5, Stone Studio,
                    <br />
                    Gulab Towers, Opp. Quality Marble,
                    <br />
                    Srinagar Colony, Hyderabad – 500073
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  <h3 className="text-accent font-semibold mb-2">
                    RECEPTION HOURS:
                  </h3>
                  <p>10:00 AM – 08:00 PM</p>
                </motion.div>

                <motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-accent font-semibold mb-2"
                  >
                    CONTACT:
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    +91 89198 49050
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    info@ganeshidol.com
                  </motion.p>
                </motion.div>

                <div className="flex items-center gap-6 mt-5 text-[#C96B32] text-3xl">
                  <a
                    href="https://www.facebook.com/profile.php?id=61563156855063"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.youtube.com/@stonestudiohyd"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.instagram.com/stonestudio_hyd/?igsh=MTQ2dXUzZWF3Ymd3NA%3D%3D&utm_source=qr#"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.pinterest.com/rohitsurana3/?invite_code=03a9d7fe63d140169298b6b62e4cc20d&sender=775041554531223028"
                    target="_blank"
                  >
                    <FaPinterest />
                  </a>
                </div>
              </div>

              {/* RIGHT FORM */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0.2 }}
                transition={{ duration: 1.2 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                <p className="text-xs text-muted-foreground mb-6">
                  Fields marked with an <span className="text-red-500">*</span>{" "}
                  are required
                </p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="w-full h-[350px] sm:h-[450px]">
          <iframe
            title="Stone Studio Location"
            src="https://www.google.com/maps?q=Stone%20Studio%20Hyderabad&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </section>
      </div>
      <BottomCard />
      <BottomFooter />
    </>
  );
};

export default Contact;
