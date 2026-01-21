<<<<<<< HEAD
import { React } from "react";
import TiltCard from "./ProductCard.jsx";
import mockData from "../mockdata.js";

const ProductCardList = ({ products: propProducts }) => {
  const products = propProducts ?? mockData?.Products ?? [];

  return (
    <div className="px-4 py-12 bg-gradient-to-bm bg-black">
      <h1 className="text-[1rem] md:text-3xl lg:text-4xl mt-10 mb-10">
=======
import React from "react";
import TiltCard from "./ProductCard.jsx";
import mockData from "../mockdata.js";

const ProductCardList = () => {
  const products = mockData?.Products || [];

  return (
    <div className="px-4 py-12 bg-gradient-to-bm bg-black">
      <h1 className="text-2xl md:text-4xl lg:text-5xl mt-10 mb-10">
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
        Product Catogary
      </h1>
      <ul
        className="
    grid 
    grid-cols-1          /* mobile: 1 */
    sm:grid-cols-2       /* tablet: 2 */
    lg:grid-cols-3       /* large: 3 */
    gap-6
    w-full
    px-4
  "
      >
        {products.map((product) => (
          <TiltCard CardDetails={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductCardList;
