import React from "react";
import Home from "../home/Home";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
