import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);


const CardsSlider = () => {
  const data = [
    {
      id: "1",
      city: "Chicago,",
      state: "IL",
      adress: "1852 W 19th St",
      day1: "Monday - Friday",
      hour1: "09:00 AM - 06:00 PM",
      day2: "Saturday - Sunday",
      hour2: "10:00 AM - 08:00 PM",
      telephone: "+1 312-738-1503",
      email: "noreply@envanto.com",
    },
    {
      id: "2",
      city: "New York,",
      state: "NY",
      adress: "100 Orchard St",
      day1: "Monday - Friday",
      hour1: "09:00 AM - 06:00 PM",
      day2: "Saturday - Sunday",
      hour2: "Closed",
      telephone: "+1 312-738-1503",
      email: "noreply@envanto.com",
    },
    {
      id: "3",
      city: "Washington,",
      state: "NW",
      adress: "1601 14th St",
      day1: "Monday - Friday",
      hour1: "09:00 AM - 06:00 PM",
      day2: "Saturday - Sunday",
      hour2: "10:00 AM - 05:00 PM",
      telephone: "+1 312-738-1503",
      email: "noreply@envanto.com",
    },
    {
      id: "4",
      city: "Washington",
      state: "NW",
      adress: "1502 H St NE",
      day1: "Monday - Friday",
      hour1: "09:00 AM - 06:00 PM",
      day2: "Saturday - Sunday",
      hour2: "10:00 AM - 08:00 PM",
      telephone: "+1 312-738-1503",
      email: "noreply@envanto.com",
    },
  ];

  return (
    <div className="containerCards">
      <Swiper
        className="cards"
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          769: {
            slidesPerView: 3,
            loop: true,
          },
          601: {
            slidesPerView: 3,
          },
          391: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((i) => {
          return (
            <SwiperSlide key={i.id}>
              <div className="card">
                <div className="conText small">
                  <div className={`${"intro"}`}>
                    <p>STATIONARY</p>
                  </div>
                  <p className="text1">
                    <strong>{i.city}</strong> {i.state}
                    <br /> {i.adress}
                  </p>
                  <hr />
                  <p className="text2">
                    {i.day1} <br />
                    <strong>{i.hour1}</strong>
                    <br />
                    {i.day2} <br />
                    <strong>{i.hour2}</strong>
                  </p>
                  <hr />
                  <p className="text3">
                    {i.telephone}
                    <br />
                    {i.email}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardsSlider;
