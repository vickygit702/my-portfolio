import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Projects from "./components/Projects/Project";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </div>

      <Footer />
    </>
  );
};

export default App;
