import React from "react";
import Navbar from "../Components/Navbar";
import ProductCardEach from "./ProductCardEach.jsx";
import mockData from "../mockdata.js";

const ElevationDataInitial = mockData.ProductListItems || [];
const ProductDetailsCard = (props) => {
  const { products, onSelectItem } = props;
  // choose what to render: provided products (items or categories) or fallback data
  const dataToRender =
    products && products.length ? products : ElevationDataInitial;

  return (
    <div>
      <Navbar />

      {/* HERO */}
      {/* GRID */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataToRender.map((design) => {
              // if this entry is a category (has items), render a category card that uses displayImgurl
              if (design.items) {
                const img =
                  design.displayImgurl || design.items[0]?.image || "";
                return (
                  <div
                    key={design.id}
                    className="group shadow-md hover:shadow-xl transition cursor-pointer"
                    onClick={() => onSelectItem?.(img)}
                  >
                    <img
                      src={img}
                      alt={design.title}
                      className="w-full h-120 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                );
              }

              // otherwise it's a simple design/item
              return (
                <ProductCardEach
                  key={design.id}
                  design={design}
                  onSelect={() => onSelectItem?.(design.image)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsCard;
