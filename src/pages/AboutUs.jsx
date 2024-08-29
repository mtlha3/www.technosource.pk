import React, { useState } from 'react';
import Nav from "../components/Nav";
import './Aboutus.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import techGif from '/assets/techgif.gif';
import Footer from "../components/Footer"

const AboutUs = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const [aboutText] = useTypewriter({
    words: ["About Us"],
    loop: 1,
    typeSpeed: 100,
    onLoopDone: () => setIsTypingComplete(true),
  });

  const [introText] = useTypewriter({
    words: ["Introduction"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 0,
  });

  const [missionText] = useTypewriter({
    words: ["Mission Statement"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 0,
  });

  const [visionText] = useTypewriter({
    words: ["Vision"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 0,
  });

  const [valuesText] = useTypewriter({
    words: ["Values"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 0,
  });

  return (
    <>
    <Nav />

    <div className="aboutus-container">

      <section className="header-section">
        <h3 className="typewriter-text-h">
          {aboutText}
          {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
        </h3>
      </section>

      <section className="intro-section">
        <h3 className="typewriter-text">
          {introText}
          {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
        </h3>
        <div className="intro-content">
          <p className="intro-description">
            Techno Source is a design and development organization working in the fields of electronics and industrial control engineering. It was established in 1999 with the aim of doing innovative work for the local industry and general customers. The team comprises engineers and technicians with more than two decades of experience in related fields. Apart from development, Techno Source also provides repair and maintenance services to industries in the fields of automation and control systems, CNC machines, and PLC-based systems.
          </p>
          <img className="gif" src={techGif} alt="Tech GIF" />
        </div>
      </section>

      <section className="mission-section">
        <h3 className="typewriter-text">
          {missionText}
          {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
        </h3>
        <p className="mission-description">
          Techno Source is committed to meeting the technology needs of customers in the field of Industrial automation, Instrumentation, and other Industrial essentials. We offer innovative solutions tailored to customer needs. We are confident enough to take on the challenges of the technology revolution of the 21st century.
        </p>
      </section>

      <section className="vision-section">
        <h3 className="typewriter-text">
          {visionText}
          {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
        </h3>
        <p className="vision-description">
          The Company continues to move forward and become the leading Engineering firm in the region, while delivering projects that consistently meet international standards.
        </p>
      </section>

      <section className="values-section">
        <h3 className="typewriter-text">
          {valuesText}
          {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
        </h3>
        <p className="values-description">
          To achieve our mission and realize our vision, we must live by our values.
          <ul>
            <li>Integrity</li>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Quality</li>
          </ul>
        </p>
      </section>

      <section className="pdf-section">
        <h3 className="pdf-header">
          Company Hierarchy
          <a href="./assets/Company Hierarchy.pdf" download="Company_Hierarchy.pdf" className="pdf-btn">
            <i className="fa-regular fa-file-pdf"></i> Download PDF
          </a>
        </h3>
        <h3 className="pdf-header">
          Key Person
          <a href="./assets/Key Persons.pdf" download="Key_Persons.pdf" className="pdf-btn">
            <i className="fa-regular fa-file-pdf"></i> Download PDF
          </a>
        </h3>
        <h3 className="pdf-header">
          Business Partners
          <a href="./assets/Business Partners.pdf" download="Business_Partners.pdf" className="pdf-btn">
            <i className="fa-regular fa-file-pdf"></i> Download PDF
          </a>
        </h3>
        <h3 className="pdf-header">
          Clients List
          <span>Available on Request</span>
        </h3>
        <h3 className="pdf-header">
          Partners List
          <span>Available on Request</span>
        </h3>
      </section>
      <Footer/>
    </div>
    </>
  );
};

export default AboutUs;
