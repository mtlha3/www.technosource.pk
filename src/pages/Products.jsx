import {React, useState} from 'react'
import Nav from "../components/Nav";
import './Products.css';
import Card from '../components/Card';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "../components/Footer"

const Products = () => {

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const [productsText] = useTypewriter({
    words: ["Products"],
    loop: 1,
    typeSpeed: 100,
    onLoopDone: () => setIsTypingComplete(true),
  });

  const products = [
    {
        outline: "Automation and Controls",
        about: "Our engineering and design team can handle all of your control panel’s requirements including PLCs, Servo systems and Operator interfaces. We are not hooked to a specific brand or manufacturer.",
        img: ['/assets/products/AutomationandControls.jpg'],
        pdf: ['/assets/products/AutomationandControls.pdf']
    },
    {
        outline: "Data Loggers",
        about: "Data loggers are the heart of data acquisition, and weather station products. We address the data recording needs of the transportation, agricultural, pharmaceutical, HVAC/R, environmental, educational, scientific and industrial communities. Our data loggers support multi protocol communications.",
        img: ['/assets/products/DataLoggers.jpg'],
        pdf: ['/assets/products/DataLoggers.pdf']
    },
    {
        outline: "Electrical Power",
        about: "Range of products include MCC panels, AMF ATS panels, synchronizing panels, LT panels, PF panels, UPS systems , Power distribution panels, power monitoring and metering systems.",
        img: ['/assets/products/ElectricalPowers.jpg'],
        pdf: ['/assets/products/ElectricalPowers.pdf']
    },
    {
        outline: "Power Electronics",
        about: "We have expertise in designing power electronics circuits. Range includes power supplies, converters, solid state regulators, and other MOSFET, IGBT and Thyrister based circuits. Division is also responsible to develop and produce AVR and fuel governors for generators.",
        img: ['/assets/products/PowerElectronics.jpg'],
        pdf: ['/assets/products/PowerElectronics.pdf']
    },
    {
        outline: "Customized Control System",
        about: "Customized control cards based on embedded system is an economical solution where large quantities of control application are desired. Complexity varies from low, with a single microcontroller chip, to very high with dedicated DSP chips.",
        img: ['/assets/products/CustomizedControlSystem.jpg'],
        pdf: ['/assets/products/CustomizedControlSystem.pdf']
    },
    {
        outline: "Alternate Energy",
        about: "Share of alternate energy is to be increased to reduce the dependency on conventional energy sources. It is now time to think about energy efficient products like LED lights, high efficiency fans and low loss inverters to utilize alternate energy more efficiently.",
        img: ['/assets/products/AlternateEnergy.jpg'],
        pdf: ['/assets/products/AlternateEnergy.pdf']
    },
    {
        outline: "Home Automation",
        about: "Company has expertise in developing products related to home and building automation. It includes lift controllers, Fire Alarm Systems, SMS based door control System, School bell management system, Water level controller and many more.",
        img: ['/assets/products/HomeAutomation.jpg'],
        pdf: ['/assets/products/HomeAutomation.pdf']
    },
    {
        outline: "Andon Display",
        about: "The Andon board is a method of ensuring that production runs smoothly, Production data gathered is arranged, analyzed in CPU and displayed on large size display board fitted on factory floor. Both stand-alone and network board are available.",
        img: ['/assets/products/AndonDisplay.jpg'],
        pdf: ['/assets/products/AndonDisplay.pdf']
    },
    {
        outline: "Training Systems",
        about: "Our training systems are designed to meet experimental teaching requirements of electrical, electronics, telecom and mechatronics engineering in higher education. Products are in use at different engineering universities and technical institutions. For details, please visit www.ettrainers.com.",
        img: ['/assets/products/TrainingSystem.jpeg'],
        pdf: ['/assets/TrainingSystem.pdf']
    }
];

  return (
    <div>
      <Nav />

      <div className="product-heading">
        <h3>
          <span className="welcome-text">
            {productsText}
            {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
          </span>
        </h3>
      </div>

      <div className="products-container">
      {products.map((product, index) => (
        <Card
          key={index}
          title={product.outline}
          description={product.about}
          image={product.img[0]}
          pdfUrl={product.pdf[0]}
        />
      ))}
    </div>

    <Footer/>
    </div>
  )
}

export default Products
