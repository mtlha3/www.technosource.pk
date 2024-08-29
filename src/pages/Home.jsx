import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import image1 from "/assets/autoimg1.jpg";
import image2 from "/assets/autoimg2.jpg";
import image3 from "/assets/autoimg3.jpg";
import talhaImage from "/assets/talhaimg.png";
import Footer from "../components/Footer"

const Home = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const [text] = useTypewriter({
    words: ["Welcome to Our Company"],
    loop: 1,
    typeSpeed: 100,
    onLoopDone: () => setIsTypingComplete(true), 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Nav />
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="welcome-container">
        <h3>
          <span className="welcome-text">
            {text}
            {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
          </span>
        </h3>
      </div>
      <div className="slide-text-container">
        <div className="justify-container">
          Technological advancements in process monitoring, control and industrial automation over the past decades have contributed greatly to improve the productivity of virtually all manufacturing industries throughout the world. Techno Source helps customers in the industrial, manufacturing and construction sectors succeed by providing complete electrical, engineering, mechanical and automation solutions. Through a commitment to innovative engineering that is backed by top professionals, Techno Source serves the largest and most respected companies through integrated solutions, software, hardware and services.
        </div>
      </div>
      
      <div className="info">
          <img src={talhaImage} alt="CEO" className="info-img"/>
          <p className="info-text"> CEO Techno Source <br/><b>MR. TAHIR MEHMOOD</b></p>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
