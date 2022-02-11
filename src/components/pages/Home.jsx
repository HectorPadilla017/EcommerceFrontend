import React from "react";
import Banner from "../Layout/Home/Banner";
import CardsSlider from "../Layout/Home/CardsSlider";
import Info from "../Layout/Home/Info";
import Photos from "../Layout/Home/Photos";
import Products from "../Layout/Home/Products";
import Reviews from "../Layout/Home/Reviews";

const Home = () => {
  return (
    <>
      <Banner/>
      <Products/>
      <Info/>
      <Photos/>
      <Reviews/>
      <CardsSlider/>
    </>
  );
};

export default Home;
