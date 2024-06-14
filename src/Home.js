import React from "react";
import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Footer from "./components/Footer"
import Slider from "./components/Slider"
import Location from "./components/Location"

function Level() {

  return (
    <div>      
     
        <Navbar />
        <Hero />
        <Location />
        <Slider />
        <Work />
        <Footer />
        

    </div>
    
  );
}

export default Level;
