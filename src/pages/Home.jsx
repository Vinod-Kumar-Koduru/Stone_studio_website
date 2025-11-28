import React from "react";
import Navbar from "../Components/Navbar.jsx";
import HeroSection from "../Components/Herosection.jsx";
import FeatureSection from "../Components/FeaturesSection";
import ProductCardList from "../Components/ProductCardList.jsx";
import ElevationsList from "../Components/ElevationsList.jsx";
import Review from "../Components/reviews.jsx";
import BottomCard from "../Components/BottomSection.jsx";
import BottomFooter from "../Components/Footer.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ProductCardList />
      <ElevationsList />
      <Review />
      <BottomCard />
      <div className="bg-[repeating-linear-gradient(90deg,#fbe3e3_0,#fbe3e3_40px,#ffffff_40px,#ffffff_80px)]">
        <BottomFooter />
      </div>
    </>
  );
};
export default Home;
