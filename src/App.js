import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
