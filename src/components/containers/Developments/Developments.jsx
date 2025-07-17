import React from "react";
import Slider from "react-slick";
import "./Development.scss";
import DevImg from "../../../assets/images/img/dev-1.jpg"

const developments = [
  {
    id: 1,
    title: "THERE ARE MANY THERE ARE MANY",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    image: DevImg,
  },
  {
    id: 2,
    title: "THERE ARE MANY THERE ARE MANY",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    image: DevImg,
  },
  {
    id: 3,
    title: "THERE ARE MANY THERE ARE MANY",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    image: DevImg,
  },
];

const Developments = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="developments-section" id="blog">
      <h2 className="developments-title">Developments</h2>
      <Slider {...settings}>
        {developments.map((item) => (
          <div className="development-card" key={item.id}>
            <img src={item.image} alt="building" />
            <h5 className="dev-title">{item.title}</h5>
            <p className="dev-desc">{item.desc}</p>
            <span className="read-more">
              Lorem Ipsu <span className="arrow">→</span>
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Developments;
