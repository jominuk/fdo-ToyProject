import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Community from "../pages/Community";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/community" element={<Community />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;