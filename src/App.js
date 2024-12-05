import React from "react";
// import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
// import About from "./components/About";
import Destinations from "./components/Destinations";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";


function App() {
  return (
    <div className="container-fluid px-0">
      {/* <Header /> */}
      <Home />
      <Destinations />
      <Categories />
      {/* <About /> */}
      <CTA />
      <Contact />
      <Testimonial />


      {/* <Footer /> */}
    </div>
  );
}

export default App;
