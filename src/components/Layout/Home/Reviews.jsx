import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Pomegranate from "../../img/pomegranate.jpg";
import Blueberries from "../../img/blueberries.jpg";
import Lime from "../../img/lime.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Reviews = () => {
  const data = [
    {
      id: "1",
      img: `${Pomegranate}`,
      description:
        "The best ice cream in Chicago! Fresh, exploding with taste, melting in your mounth",
      user: "Jessica",
      city: "Chicago",
    },
    {
      id: "2",
      img: `${Blueberries}`,
      description:
        "The best ice cream in Chicago! Fresh, exploding with taste, melting in your mounth",
      user: "Ricardo",
      city: "Londres",
    },
    {
      id: "3",
      img: `${Lime}`,
      description:
        "The best ice cream in Chicago! Fresh, exploding with taste, melting in your mounth",
      user: "Nicol",
      city: "Cancun",
    },
  ];

  return (
    <div className="container containerReviews" id="Reviews">
      <div className="reviews">
        <Swiper
          id="swiper-replace"
          className="contSwiper"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="slider">
                  <img className="photo" src={item.img} alt="" />
                  <div className="conText small">
                    <p>{item.description}</p>
                    <p>
                      <strong>{item.user},</strong> {item.city}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
