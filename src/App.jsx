import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Pages/Welcome";
import Footer from "./components/Footer/Footer";
import Partner from "./components/Partner";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Partner />
      <Footer />
    </>
  );
}

export default App;
