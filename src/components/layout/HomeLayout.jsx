import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./HomeLayout.scss"

const HomeLayout = (props) => {
  return (
    <div className="main-home-layout-container">
      <div className="home-header">
        <Header />
      </div>

      <div className="home-content">{props.children}</div>

      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
