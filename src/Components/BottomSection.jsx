import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import slugify from "../utils/slugify";
const BottomCard = () => {
  return (
    <footer className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* ------- Left Section ------- */}
        <div>
          <img
            src="https://res.cloudinary.com/dl4viyuwh/image/upload/v1761475435/logo_without_background_vo0zef.png" // replace with your logo
            alt="Stone Studio Logo"
            className="lg:w-30 md:w-20 w-35 items-center mb-6"
          />

          <p className="text-gray-600 leading-relaxed">
            Stone Studio is a trusted name across Hyderabad and India, known for
            its exceptional craftsmanship and premium quality.
          </p>
        </div>

        {/* ------- Middle Links ------- */}
        <div>
          <h3 className="text-accent-foreground font-bold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-600">
            {[
              "Murals",
              "Idols",
              "Temple",
              "Fiber Art",
              "Tulsi Planter",
              "Fountains",
              "Wash Basin",
              "Pergola and Benches",
              "Flooring",
            ].map((name) => (
              <li key={name}>
                <Link
                  to={
                    name === "Flooring"
                      ? "/flooring"
                      : `/products/${slugify(name)}`
                  }
                  className="hover:text-accent"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ------- Contact ------- */}
        <div>
          <h3 className="text-accent-foreground font-bold text-xl mb-4">
            Contact
          </h3>

          <p className="text-gray-600 leading-relaxed">
            8-9-388/34/7/5, Stone Studio, Gulab Towers, opp. Quality Marble,
            Srinagar Colony, Hyderabad, Telangana 500073
          </p>

          <p className="text-[#C96B32] font-semibold mt-3">+91 8919849050</p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-5 text-[#C96B32] text-3xl">
            <a
              href="https://www.facebook.com/profile.php?id=61563156855063"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@stonestudiohyd" target="_blank">
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
      </div>
    </footer>
  );
};
export default BottomCard;
