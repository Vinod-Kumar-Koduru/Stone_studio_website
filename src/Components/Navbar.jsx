import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

// Reusable NavLink with underline animation
const NavLink = ({ children, href = "#" }) => (
  <a href={href} className="relative inline-block">
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="px-1 hover:text-accent-border-0.5"
    >
      {children}
    </motion.span>

    {/* Gold underline animation */}
    <motion.span
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.28 }}
      style={{ transformOrigin: "left" }}
      className="absolute left-0 hover:text-accent h-[3px] text-accent"
    ></motion.span>
  </a>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dropdown items
  const services = [
    "Murals",
    "Idols",
    "Temples",
    "Fiber Art",
    "Tulsi Planter",
    "Fountains",
    "Wash Basin",
    "Pergola & Benches",
    "Flooring",
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-luxury" : "bg-transparent"
        }`}
      >
        <div className="w-full px-3 sm:px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-row gap-0.5">
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              src="https://res.cloudinary.com/dl4viyuwh/image/upload/v1763383199/logo_without_background_gnl8dm.png"
              className="h-10 w-10 object-contain"
            />
            <p className="text-1xl font-bold text-accent font-inter py-2">
              Stone Studio
            </p>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-foreground relative items-center font-inter">
            <NavLink>Home</NavLink>

            {/* Desktop DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className="flex items-center gap-1">
                <span className="relative">
                  Products
                  {/* underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.28 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute left-0 -bottom-0.5 h-[3px] bg-accent w-full"
                  />
                </span>
                <ChevronDown size={18} className="mt" />
              </button>

              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-card shadow-luxury rounded-md py-2"
                  >
                    {services.map((item, i) => (
                      <motion.a
                        key={item}
                        href="#"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink>Elevation stones</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>About us</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="md:hidden bg-card text-foreground shadow-luxury px-6 py-6 space-y-4"
            >
              <a className="block">Home</a>

              <div className="block">
                <button
                  className="w-full flex items-center justify-between"
                  onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: openMobileDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openMobileDropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {services.map((item, index) => (
                        <motion.a
                          key={item}
                          className="block py-1 text-sm"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a className="block">Gallery</a>
              <a className="block">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}
