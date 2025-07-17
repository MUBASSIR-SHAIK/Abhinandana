import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Home from "../components/containers/Home/Home";

const HomeRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </HomeLayout>
  );
};

export default HomeRoutes;