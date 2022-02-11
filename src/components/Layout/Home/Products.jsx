import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";

SwiperCore.use([Navigation]);

const Products = () => {
  const [data, setData] = useState([
    {
      c: "c1",
      color: "color1",
      title: "Mango",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
      amount: "1",
    },
    {
      c: "c2",
      color: "color2",
      title: "Limon",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
      amount: "1",
    },
    {
      c: "c3",
      color: "color3",
      title: "Uva",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
      amount: "1",
    },
    {
      c: "c2",
      color: "color2",
      title: "Grosella",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
      amount: "1",
    },
  ]);
  const dataAgua = [
    {
      c: "c1",
      color: "color1",
      title: "Mango",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
    },
    {
      c: "c2",
      color: "color2",
      title: "Limon",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
    },
    {
      c: "c3",
      color: "color3",
      title: "Uva",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
    },
    {
      c: "c2",
      color: "color2",
      title: "Grosella",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "10",
    },
  ];
  const dataLeche = [
    {
      c: "c1",
      color: "color1",
      title: "Cacahuate",
      description:
        "Lorem ipsum dolor sit ammus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "12",
    },
    {
      c: "c2",
      color: "color2",
      title: "Chocolate",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "12",
    },
    {
      c: "c3",
      color: "color3",
      title: "Yoghurt Fresa",
      description:
        "psum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "12",
    },
  ];
  const dataGourmet = [
    {
      c: "c1",
      color: "color1",
      title: "Chocolate Oreo",
      description:
        "Lorem ipsum dolor sit ammus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "16",
    },
    {
      c: "c2",
      color: "color2",
      title: "Carlota",
      description:
        "Lorem ipsum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "16",
    },
    {
      c: "c3",
      color: "color3",
      title: "Gansito",
      description:
        "psum dolor sit amet consectetur, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "16",
    },
  ];
  return (
    <div className="container containerProducts" id="Products">
      <div className="titles">
        <h6 className="subtitle">100% NATURAL</h6>
        <h4 className="title">PRODUCTS</h4>
      </div>
      <div className="conText small catalogue">
        <button onClick={() => setData(dataAgua)}>
          Bolis Water
        </button>
        <button onClick={() => setData(dataLeche)}>
          Bolis Milk
        </button>
        <button onClick={() => setData(dataGourmet)}>
          Bolis Gourmet
        </button>
      </div>
      <Swiper
        id="swiper-product"
        className="products"
        slidesPerView={3}
        // spaceBetween={5}
        navigation
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 3,
            // loop: true,
          },
          601: {
            slidesPerView: 3,
          },
          551: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          451: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((i) => {
          return (
            <SwiperSlide>
              <div className={`${"card"} ${i.c}`}>
                <div className={`${"contImg"} ${i.color}`}></div>
                <div className="conText small">
                  <h5>{i.title}</h5>
                  <br />
                  <p>{i.description}</p>
                  <div className="count">
                    <h5>${1 * i.price}</h5>
                    <button className={i.color}>
                      <p>Add Cart</p>
                      <div className={`${"add"} ${i.color}`}>
                        <AddIcon className="icon" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Products;
//
/* <a onClick={() => handleQuantity("dec")}>
                        <ArrowBackIosNewIcon />
                      </a> */
/* <h5>{quantity}</h5> */
/* <a onClick={() => handleQuantity("add")}>
                        <ArrowForwardIosIcon />
                      </a> */
