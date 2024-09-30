import React from "react";
import Welcome from "../components/Pages/Welcome";
import Partner from "../components/Partner/Partner";
import Dishes from "../components/Dishes/Dishes";
import Booking from "../components/Booking/Booking";
import Ambience from "../components/Pages/AmbientSection/Ambience";
import Delivery from "../components/Pages/Delivery/Delivery";
import About from "../components/Pages/About/About";

function Home() {
  return (
    <>
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
      <Ambience />
      <Delivery />
      <About />
    </>
  );
}

export default Home;
