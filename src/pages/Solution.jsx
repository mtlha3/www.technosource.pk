import {React, useState} from 'react'
import Nav from "../components/Nav";
import './Solution.css';
import Card from '../components/Card';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "../components/Footer"


const Solution = () => {

  
const [isTypingComplete, setIsTypingComplete] = useState(false);

const [solutionText] = useTypewriter({
  words: ["Solutions"],
  loop: 1,
  typeSpeed: 100,
  onLoopDone: () => setIsTypingComplete(true),
});

const solutions = [
  {
      head: "Food and Packaging",
      description: "With decades of combined experience in the Food , Beverage and packages industry, We provides food and beverage manufacturers with integrated automation solutions for food and beverage manufacturing along with control systems designed to optimize the manufacturing process, enhance productivity and improve manufacturing quality.",
      image: ["/assets/solutions/FoodandPacking.jpg"],
      docs: ["/assets/solutions/FoodandPacking.pdf"]
  },
  {
      head: "Automotive",
      description: "At Techno Source we are specialize in cost effective and efficient engineering and automation solutions for automotive industry. Our solutions are specially designed to fit the customer requirements.",
      image: ["/assets/solutions/Automotive.jpg"],
      docs: ["/assets/solutions/Automotive.pdf"]
  },
  {
      head: "Pharmaceuticals",
      description: "We have developed considerable expertise in handling large scale projects for the pharmaceuticals domain, having successfully executed totally integrated automation project in production, packing and quality assurance of pharmaceutical products.",
      image: ["/assets/solutions/Pharmaceuticals.jpg"],
      docs: ["/assets/solutions/Pharmaceuticals.pdf"]
  },
  {
      head: "Oil and Gas",
      description: "Over past years, we had developed expertise on field hardware, communications infrastructure, software and field service installations of the hardware required to retrieve production data for the oil and gas enterprise.",
      image: ["/assets/solutions/OilandGas.jpg"],
      docs: ["/assets/solutions/OilandGas.pdf"]
  },
  {
      head: "Telecom",
      description: "We are a rapidly growing cross field system integrator & turn key solutions provider in the field of Communication systems. Our unique combination of multiple skills and experience, enable us to deliver great value integrated solutions for voice, video & data on copper, fiber and wireless.",
      image: ["/assets/solutions/Telecom.jpg"],
      docs: ["/assets/solutions/Telecom.pdf"]
  },
  {
      head: "Electrical Power",
      description: "We provides Solutions in the field electrical systems for a broad range of facilities, both new and existing. Our designs consider efficiency, flexibility, redundancy, maintainability and sustainability as well as cost effectiveness. Our range of solutions include LT power, standby power and alternate energy.",
      image: ["/assets/solutions/ElectricalPower.jpg"],
      docs: ["/assets/solutions/ElectricalPower.pdf"]
  },
  {
      head: "Machine Manufacturers",
      description: "Techno Source provides technical knowledge, implementation tools and dedicated resources that enables the machines manufacturers to address real-world manufacturing challenges.",
      image: ["/assets/solutions/MachineManufacturers.jpg"],
      docs: ["/assets/solutions/MachineManufacturers.pdf"]
  },
  {
      head: "Data Acquisition",
      description: "We are a systems integrator with expertise in providing inovative solutions for customers with complex, automated data acquisition, storage and reporting needs. Our expertise includes the design and development of automated data acquisition and storage systems, custom sensor development, real-time data acquisition and critical instrumentation systems.",
      image: ["/assets/solutions/DataAcquisition.jpg"],
      docs: ["/assets/solutions/DataAcquisition.pdf"]
  },
  {
      head: "Building Management",
      description: "Our team provides building automation, security and safety solutions for public and private sector facilities. It Includes access control, Security, fire alarming and other control applications.",
      image: ["/assets/solutions/BuildingManagement.jpeg"],
      docs: ["/assets/solutions/BuildingManagement.pdf"]
  }
];




  return (
    <div>
      <Nav />

      <div className="solution-heading">
        <h3>
          <span className="welcome-text">
            {solutionText}
            {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
          </span>
        </h3>
      </div>

      <div className="solution-container">
      {solutions.map((solution, index) => (
        <Card
          key={index}
          title={solution.head}
          description={solution.description}
          image={solution.image[0]}
          pdfUrl={solution.docs[0]}
        />
      ))}
    </div>
    <Footer/>
    </div>
  )
}

export default Solution
