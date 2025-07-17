import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/*" exact element={<HomeRoutes />} />
    </Routes>
  );
};

export default CustomRoutes;
