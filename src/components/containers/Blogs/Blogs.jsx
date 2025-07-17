import React from "react";
import "./Blogs.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const blogData = [
  {
    title: "THERE ARE MANY",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    link: "#",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    title: "THERE ARE MANY",
    content:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    link: "#",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    title: "THERE ARE MANY",
    content:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    link: "#",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  },
  {
    title: "THERE ARE MANY",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    link: "#",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  },
  {
    title: "THERE ARE MANY",
    content:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    link: "#",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  },
  {
    title: "THERE ARE MANY",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    link: "#",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container" id="blogs">
      <h2 className="section-title">Blogs</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}  
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        modules={[Pagination]}
        className="blogs-swiper"
      >
        {blogData.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card">
              <div
                className="image"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
              <div className="content">
                <h4>{blog.title}</h4>
                <p>{blog.content}</p>
                <a href={blog.link}>
                  <strong>Lorem Ipsu</strong> →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
