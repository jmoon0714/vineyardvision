import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Mission from "./components/mission/Mission";
import Vision from "./components/vision/Vision";
import Technology from "./components/technology/Technology";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./index.scss";

function App() {
  useEffect(() => {
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Mission />
      <Vision />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
