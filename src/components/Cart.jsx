import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <NavLink to="/cartPage" className="text-pink-500 text-xl cursor-pointer">
      <FaShoppingCart />
    </NavLink>
  );
}

export default Cart;
