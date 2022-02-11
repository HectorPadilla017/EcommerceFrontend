import React, { useState } from "react";
import Cart from '../../Components/Cart'


const LayoutCart = () => {
  return (
    <section className="containerCart" id="Cart">
      <h5>Cart</h5>
      <Cart/>
      <Cart/>
    </section>
  );
};

export default LayoutCart;
