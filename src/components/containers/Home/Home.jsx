import React from "react";
import "./Home.scss";
import HomeSlider from "../../../assets/elements/HomeSlider";
import AboutUs from "../AboutUs/AboutUs";
import Ventures from "../Ventures/Ventures";
import Developments from "../Developments/Developments";
import Gallery from "../Gallery/Gallery";
import PrimeLocations from "../PrimeLocations/PrimeLocations";
import Blogs from "../Blogs/Blogs";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <section id="home" className="section">
        <HomeSlider />
      </section>

      <section id="about" className="section">
        <AboutUs />
      </section>

      <section id="ventures" className="section">
        <Ventures />
      </section>

    {/*   <section id="contact" className="section">
        <h1>Services</h1>
        <p>Here you’ll find our latest projects and updates.</p>
      </section> */}

      <section id="blog" className="section">
        <Developments />
      </section>

      <section className="section">
       <Gallery />
      </section>

      <section className="section">
        <PrimeLocations />
      </section>

      <section className="section">
        <Blogs />
      </section>

      <section className="section">
        <Testimonials />
      </section>

    {/*   <section id="awards" className="section">
        <h1>Awards & Recognition</h1>
        <p>Achievements and recognitions we've received.</p>
      </section> */}
    </div>
  );
};

export default Home;
