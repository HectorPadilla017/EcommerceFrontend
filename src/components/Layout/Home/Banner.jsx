import React from "react";
import BannerAnimated from "../../Animated/BannerAnimated";
// import Berries from "../../img/berries.jpg";

const Banner = () => {
  return (
    <section className="containerBanner" id="Banner">
      <BannerAnimated />
      <div className="description">
        <h2 className="subtitle">
          HOMEMADE
          <br />
          ICE CREAMS
          <br />
          CREATED WITH
        </h2>
        <h1 className="title">LOVE & FUN!</h1>
      </div>
      <div className="contImg">
        <div className="cir" />
      </div>
    </section>
  );
};

export default Banner;
