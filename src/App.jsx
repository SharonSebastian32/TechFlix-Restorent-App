import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Pages/Welcome";
import Footer from "./components/Footer/Footer";
import Partner from "./components/Partner/Partner";
import Booking from "./components/Booking/Booking";
import Dishes from "./components/Dishes/Dishes";
import Ambience from "./components/Pages/AmbientSection/Ambience";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
      <Ambience/>
      <Footer />
    </>
  );
}

export default App;
