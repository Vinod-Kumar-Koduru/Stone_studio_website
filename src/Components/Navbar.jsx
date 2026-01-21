import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import mockData from "../mockdata.js";
import slugify from "../utils/slugify";

// Reusable NavLink with underline animation
const NavLink = ({ children, to = "/" }) => (
  <Link to={to} className="relative inline-block">
    <Motion.span className="hover:text-accent hover:underline sm:text-sm lg:text-base">
      {children}
    </Motion.span>
  </Link>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop dropdown states
  const [openProductDropdown, setOpenProductDropdown] = useState(false);
  const [openFlooringDropdown, setOpenFlooringDropdown] = useState(false);

  // Mobile dropdown state
  const [openMobileDropdown, setOpenMobileDropdown] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Product dropdown items (derived from mock data for exact matches)
  const services = Array.from(
    new Set((mockData?.Products || []).map((p) => p.title)),
  );

  // Flooring dropdown items
  const flooringItems = ["Hand Made Tiles", "Natural Stone Flooring"];

  return (
    <>
      <Motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-luxury" : "bg-transparent"
        }`}
      >
        <div className="w-full px-3 sm:px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-row gap-0.5">
            <Motion.img
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
            <NavLink to="/">Home</NavLink>

            {/* PRODUCT DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                setOpenProductDropdown(true);
                setOpenFlooringDropdown(false);
              }}
              onMouseLeave={() => setOpenProductDropdown(false)}
            >
              <button className="flex items-center gap-1">
                <span className="relative">
                  Products
                  <Motion.span
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.28 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute left-0 border-b-2 border-accent w-full"
                  />
                </span>
                <ChevronDown size={18} />
              </button>

              <AnimatePresence>
                {openProductDropdown && (
                  <Motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-card shadow-luxury rounded-md py-2"
                  >
                    {services.map((item, index) => (
                      <Link
                        key={item}
                        to={`/products/${slugify(item)}`}
                        className="block px-4 py-2 hover:bg-accent hover:text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FLOORING DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                setOpenFlooringDropdown(true);
                setOpenProductDropdown(false);
              }}
              onMouseLeave={() => setOpenFlooringDropdown(false)}
            >
              <button className="flex items-center gap-1">
                <span className="relative">
                  Flooring
                  <Motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.28 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute left-0 bottom h-[3px] bg-accent w-full"
                  />
                </span>
                <ChevronDown size={18} />
              </button>

              <AnimatePresence>
                {openFlooringDropdown && (
                  <Motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-60 bg-card shadow-luxury rounded-md py-2"
                  >
                    {flooringItems.map((item, index) => (
                      <Link
                        key={item}
                        to={`/flooring/${slugify(item)}`}
                        className="block px-4 py-2 hover:bg-accent hover:text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/elevation-stones">Elevation stones</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About us</NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <Motion.div
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* ---------------- MOBILE MENU ---------------- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="md:hidden bg-card text-foreground shadow-luxury px-6 py-6 space-y-4"
            >
              {/* Home */}
              <Link to="/" className="block">
                Home
              </Link>

              {/* Products — direct mobile link */}
              <Link to="/products" className="block">
                Products
              </Link>

              {/* PRODUCT — mobile accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between"
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === "products" ? "" : "products",
                    )
                  }
                >
                  <span>Products</span>
                  <Motion.div
                    animate={{
                      rotate: openMobileDropdown === "products" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown />
                  </Motion.div>
                </button>

                <AnimatePresence>
                  {openMobileDropdown === "products" && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {services.map((item) => (
                        <Link
                          key={item}
                          to={`/products/${slugify(item)}`}
                          className="block py-1 text-sm opacity-90"
                        >
                          {item}
                        </Link>
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FLOORING — mobile accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between"
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === "flooring" ? "" : "flooring",
                    )
                  }
                >
                  <span>Flooring</span>
                  <Motion.div
                    animate={{
                      rotate: openMobileDropdown === "flooring" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown />
                  </Motion.div>
                </button>

                <AnimatePresence>
                  {openMobileDropdown === "flooring" && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {flooringItems.map((item) => (
                        <Link
                          key={item}
                          to={`/flooring/${slugify(item)}`}
                          className="block py-1 text-sm opacity-90"
                        >
                          {item}
                        </Link>
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other mobile links */}
              <Link to="/elevation-stones" className="block">
                Elevation stones
              </Link>
              <Link to="/contact" className="block">
                Contact
              </Link>
              <Link to="/about" className="block">
                About us
              </Link>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.nav>

      <div className="h-20"></div>
    </>
  );
}
