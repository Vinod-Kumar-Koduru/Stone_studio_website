import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "../mockdata.js";
import slugify from "../utils/slugify";
import ProductDetailsCard from "../Components/ProductDetailsCard.jsx";
import Navbar from "../Components/Navbar.jsx";
import BottomCard from "../Components/BottomSection.jsx";
import BottomFooter from "../Components/Footer.jsx";

const ProductListPage = () => {
  const { category } = useParams();

  // prefer ProductListItems (used for product list pages); fall back to Products
  const allProducts = mockData?.ProductListItems ?? mockData?.Products ?? [];

  const productForCategory = category
    ? allProducts.find((p) => slugify(p.title) === category)
    : null;

  const filteredProducts = category
    ? (productForCategory?.items ?? [])
    : allProducts;

  const displayName = category ? productForCategory?.title || category : "";

  const displayImgUrl = category
    ? productForCategory?.displayImgurl || productForCategory?.image || ""
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
            </div>
          </div>
        </section>
        <ProductDetailsCard
          products={filteredProducts}
          onSelectItem={(imgUrl) => setCurrentHero(imgUrl)}
        />
      </div>
      <BottomCard />
      <BottomFooter />
    </>
  );
};

export default ProductListPage;
