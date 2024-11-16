import React from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const { cartProducts } = useSelector((state) => state.cartReducer);

  return (
    <div className="text-white space-y-2">
      {cartProducts.map((item) => {
        return (
          <div key={item.name} className="flex items-center gap-4">
            <h1>{item.name}</h1>
            <div className="bg-white/25 rounded-sm p-2">
              <img className="w-20" src={item.img} alt={item.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
