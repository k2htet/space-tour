import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Destination, Crew, Technology } from "../pages";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
