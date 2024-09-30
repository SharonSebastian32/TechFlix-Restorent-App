import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Home/Home";
import Dishes from "../components/Dishes/Dishes";
import Booking from "../components/Booking/Booking";
import About from "../components/Pages/About/About";
import NotFound from "../components/Pages/404/NotFound";
 
const LayoutRoutes = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/services" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default LayoutRoutes;
