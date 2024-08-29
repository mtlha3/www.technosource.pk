import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Solution from "./pages/Solution";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Solution" element={<Solution />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
  );
}

export default App;
