import React from "react";
import Container from "./Container";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ProductCard({ name, img, price, soldOutPrice, reviews, star }) {
  const navigate = useNavigate();
  return (
    <Container className="space-y-3">
      <div className="w-full h-[200px] bg-white/25 border-2 border-white/30 rounded-t-xl inline-flex justify-center items-center overflow-hidden">
        <img className="" src={img} alt={name} />
      </div>
      <div className="flex flex-wrap justify-between items-end gap-2">
        <div className="space-y-2 text-slate-900">
          <p className="flex items-center gap-x-3">
            <span className="text-yellow-400">{star}</span>
            <span>{reviews}</span>
          </p>
          <p className="text-lg">{name}</p>
          <p className="inline-flex items-center gap-7">
            <span>${price}</span>
            <span className="line-through">${soldOutPrice} Sold Out</span>
          </p>
        </div>
        <Button
          onClick={() => navigate(`/productPage/${name}`)}
          type="submit"
          className="bg-[#A61473] hover:bg-[#ff20b1] duration-300 w-[85px] h-[35px] text-sm text-white"
        >
          Buy Now
        </Button>
      </div>
    </Container>
  );
}

export default ProductCard;
