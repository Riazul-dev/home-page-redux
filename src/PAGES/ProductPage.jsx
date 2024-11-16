import React from "react";
import { useParams } from "react-router-dom";
import { producrs } from "../DATA/Data";
import Button from "../components/Button";
import { addProduct } from "../REDUX/Features/productCart/CartSlice";
import { useDispatch } from "react-redux";

function ProductPage() {
  const { id } = useParams();
  const filteredProduct = producrs.filter((product) => product.name === id);
  const { name, img, price, reviews, soldOutPrice, star } = filteredProduct[0];
  const dispatch = useDispatch();
  const product = filteredProduct[0]

  return (
    <div className="flex flex-col justify-center items-center gap-10 text-white py-10">
      <h1 className="text-5xl">{name}</h1>
      <div className="bg-white/25 rounded-sm">
        <img className="" src={img} alt={name} />
      </div>
      <div className="space-x-10">
        <span>${price}</span>
        <span className="line-through">${soldOutPrice}</span>
      </div>
      <div className="flex justify-center items-center gap-10">
        <span>{star}</span>
        <span>{reviews}</span>
      </div>

      <Button
        onClick={() => dispatch(addProduct(product))}
        className="bg-white px-4 py-2 text-slate-900"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductPage;
