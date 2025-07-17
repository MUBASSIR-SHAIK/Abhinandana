import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./AboutUs.scss";
import AboutImage from "../../../assets/images/img/about-us-1.png";  
import AboutImage2 from "../../../assets/images/img/about-us-2.png"; 

const tabData = [
  {
    label: "Company",
    heading: "ABOUT US",
    subheading: "Building Andhra Pradesh’s Future, One Landmark at a Time",
    content: `Abinandana Housing is Andhra Pradesh’s leading integrated real estate developer, headquartered in Guntur. We specialize in delivering premium residential and commercial projects that redefine quality living across major cities like Guntur, Vijayawada, and Visakhapatnam (Vizag).`,
    content2: `With a proven track record of landmark developments, our focus is on creating vibrant, sustainable communities that combine smart design, superior construction, and long-term value for our customers.`,
    button: "Lorem Lor",
    image: AboutImage,
  },
  {
    label: "Why Abinandana",
    heading: "Why Choose Abinandana Housing?",
    customContent: (
      <div className="why-abinandana">
        <ul className="features-list">
          <li>
            ✅ <span>Premium Quality Projects</span>
          </li>
          <li>
            ✅ <span>100% Clear Land Titles</span>
          </li>
          <li>
            ✅ <span>On-Time Delivery</span>
          </li>
          <li>
            ✅ <span>Transparency & Ethical Practices</span>
          </li>
          <li>
            ✅ <span>Expert Design & Project Management</span>
          </li>
        </ul>
        <p className="why-desc">
          From hidden wiring to concrete foundations, we ensure that every
          component meets the highest industry standards before handing over a
          property. Our homes aren’t just visually impressive — they’re also
          safe, energy-efficient, and built to last.
        </p>
        <button className="tab-btn">Lorem Lor</button>
      </div>
    ),
    image: AboutImage,
  },

  {
    label: "Founder",
    heading: "Dr. Kommalapati Sridhar",
    subheading: "Founder and Chairman, Abinandana Housing Private Limited",
    content: `Dr. Kommalapati Sridhar is the visionary Founder and Chairman of Abinandana Housing Private Limited with over 25 years of extensive experience in construction, real estate, and multiple industries. Beginning his career as an industrialist, he has successfully founded and managed several companies, building a strong legacy in Andhra Pradesh and beyond.`,
    content2: `Under Dr. Sridhar’s leadership, Abinandana Housing has adopted international quality standards and advanced construction processes, reflecting his unwavering commitment to quality, transparency, and innovation in every project.`,
    button: "Lorem Ipsum",
    image: AboutImage2,
  },
  {
    label: "Our work",
    heading: "OUR WORK",
    subheading: "Milestones of Excellence Across AP",
    content: `From residential townships to commercial hubs, our work spans multiple cities. Each project tells a story of trust, planning, and execution.`,
    content2: `Our portfolio reflects our legacy and ongoing impact.`,
    button: "View Projects",
    image: AboutImage,
  },
  {
    label: "Vision",
    heading: "OUR VISION",
    subheading: "Shaping the Future of Urban Living",
    content: `We aspire to build a future where everyone enjoys smart, sustainable, and elegant living environments that improve life quality.`,
    content2: `We innovate to create affordable and aesthetic spaces.`,
    button: "Our Future Goals",
    image: AboutImage,
  },
];

const legacyStats = [
  { number: "37+", label: "Years of Experience" },
  { number: "20+", label: "Years of Customer Services" },
  { number: "9", label: "Dedicated Branches" },
  { number: "100+", label: "Premium Projects" },
  { number: "100000+", label: "Satisfied Customers" },
];

const AboutUs = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="about-us">
      <h2 className="section-title">Our Legacy</h2>
      <div className="stats-grid">
        {legacyStats.map((item, i) => (
          <div className="stat-box" key={i}>
            <h3 className="stat-number">{item.number}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="tabs">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? "tab active" : "tab"}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
        slidesPerView={1}
        allowTouchMove={false}
        speed={500}
      >
        {tabData.map((tab, index) => (
          <SwiperSlide key={index}>
            <div className="tab-content">
              <div className="tab-image">
                <img src={tab.image} alt={tab.heading} />
              </div>
              <div className="tab-text">
                <h3>{tab.heading}</h3>
                {tab.customContent ? (
                  tab.customContent
                ) : (
                  <>
                    <h4>{tab.subheading}</h4>
                    <p>{tab.content}</p>
                    <p>{tab.content2}</p>
                    <button className="tab-btn">{tab.button}</button>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutUs;
