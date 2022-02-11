import React from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import LayoutCart from "../Cart/LayoutCart";

export default function NavBar(props) {
  const drawer = () => {
    document.getElementById("Drawer").classList.toggle("activeDrawer");
  };
  const cart = () => {
    document.getElementById("Cart").classList.toggle("activeCart");
  };
  return (
    <>
      <Navbar onCart={cart} onDrawer={drawer} register={props.register} />
      <Drawer actionOpen="Drawer" onDrawer={drawer} />
      <LayoutCart actionOpen="Cart" onCart={cart} />
    </>
  );
}
