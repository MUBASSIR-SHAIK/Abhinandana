import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HomeSlider.scss";
import Banner1 from "../images/img/Sai-Bhuvana-Home.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HomeSlider = () => {
 

  const slides = [
    {
      image: Banner1,
      title: "LOREM ISPUM IS SIMPLY DUMMY TEXT",
      buttonText: "Lorem Ispum",
    },
    {
      image: Banner1,
      title: "LOREM ISPUM IS SIMPLY DUMMY TEXT",
      buttonText: "Lorem Ispum",
    },
  ];

  return (
    <div className="hero-slider">
      <div className="custom-prev">
        <AiOutlineLeft size={18} />
      </div>
      <div className="custom-next">
        <AiOutlineRight size={18} />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 5000 }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay-content">
                <h2>{slide.title}</h2>
                <br />
                <button>{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
