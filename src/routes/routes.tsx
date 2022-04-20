import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";

const routes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default routes;
