import React from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import { producrs } from "../DATA/Data";

function Products() {
  return (
    <div className="md:px-20 py-2 md:pb-20">
      <Title className="py-14 text-nowrap text-center md:text-left">
        Popular products
      </Title>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {producrs.map((product) => (
          <div className="w-[192px]" key={product.name}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
