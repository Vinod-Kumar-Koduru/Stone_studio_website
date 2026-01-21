import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "../mockdata.js";
import slugify from "../utils/slugify";
import ProductDetailsCard from "../Components/ProductDetailsCard.jsx";
import Navbar from "../Components/Navbar.jsx";
import BottomCard from "../Components/BottomSection.jsx";
import BottomFooter from "../Components/Footer.jsx";

const FlooringListPage = () => {
  const { category } = useParams();

  // prefer FlooringListItems (used for product list pages); fall back to Products
  const allFlooring = mockData?.FlooringListItems ?? mockData?.Products ?? [];

  const FlooringCategory = category
    ? allFlooring.find((p) => slugify(p.title) === category)
    : null;

  const filteredFlooring = category
    ? FlooringCategory?.items ?? []
    : allFlooring;

  const displayName = category ? FlooringCategory?.title || category : "";

  const displayImgUrl = category
    ? FlooringCategory?.displayImgurl || FlooringCategory?.image || ""
    : "";

  const [currentHero, setCurrentHero] = useState(displayImgUrl);

  useEffect(() => {
    console.log("displayImgUrl changed:", displayImgUrl);
    // reset hero to category default when category changes
    setCurrentHero(displayImgUrl);
  }, [displayImgUrl]);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="relative h-[40vh] lg:h-screen bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: currentHero ? `url('${currentHero}')` : "none",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
                {displayName}
              </h1>
              <p className="text-gray-200 max-w-xl">
                Discover premium elevation stone designs crafted for modern and
                timeless architecture.
              </p>
            </div>
          </div>
        </section>
        <ProductDetailsCard
          products={filteredFlooring}
          onSelectItem={(imgUrl) => setCurrentHero(imgUrl)}
        />
      </div>
      <BottomCard />
      <BottomFooter />
    </>
  );
};

export default FlooringListPage;
