import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Blueberries from "../img/blueberries.jpg";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };
  return (
    <div className="items conText mini">
      <img src={Blueberries} alt="Blue" />
      <div className="info">
        <h5>Bolis Water</h5>
        <h5>${quantity * 15}</h5>
      </div>
      <div className="number">
        <button>
          <DeleteForeverIcon className="ico" />
        </button>
        <div className="count">
          <button
            className="prev"
            onClick={() => handleQuantity("dec")}
          ></button>
          <h5>{quantity}</h5>
          <button
            className="next"
            onClick={() => handleQuantity("add")}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
