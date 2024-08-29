import {React, useState} from 'react'
import Nav from "../components/Nav";
import './Services.css';
import Card from '../components/Card';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "../components/Footer"
const Services = () => {

  const [isTypingComplete, setIsTypingComplete] = useState(false);

    const [servicesText] = useTypewriter({
      words: ["Services"],
      loop: 1,
      typeSpeed: 100,
      onLoopDone: () => setIsTypingComplete(true),
    });

    const services = [
      {
          heading: "Technical Support",
          des: "There is a need to focus on customer service and post-sale technical support as critical service differentiator, that help organizations stay ahead in a highly competitive business environment. Techno Source is a trusted and respected player in the technical support services segment and aims to relentlessly deliver value in addressing each client’s specific business goals.",
          imge: ['/assets/services/technicalsupport.jpg'],
          file: ['/assets/services/technicalsupport.pdf']
      },
      {
          heading: "Customized Machine Design",
          des: "We with joint ventures of our associates has ability to completely design, fabricate and automate any type of assembly or production equipment for manufacturing. It may be conventional machines or a NC control machines.",
          imge: ['/assets/services/customizedmachinedesign.jpg'],
          file: ['/assets/services/customizedmachinedesign.pdf']
      },
      {
          heading: "Control System Up Gradation",
          des: "Techno Source offers a cost-effective, continuous evolution path from your existing systems to the unified and intelligent control system. We integrates advanced applications that work together across your entire facility to increase productivity and decrease maintenance costs. Updating equipment also enables plants to realize incremental value by providing the infrastructure for new solutions such as fire & safety, information sharing and wireless applications.",
          imge: ['/assets/services/controlsystemgradation.jpg'],
          file: ['/assets/services/controlsystemgradation.pdf']
      },
      {
          heading: "Retrofitting of CNC machines",
          des: "We have developed a fastest and easiest, most full featured CNC controllers for NC and CNC machines. Hardware used is locally available PC, PLC and sensors. Whether it is a retrofit or brand new machine tool, Techno Source has the answer for you.",
          imge: ['/assets/services/retrofittingCNCmachines.jpg'],
          file: ['/assets/services/retrofittingCNCmachines.pdf']
      },
      {
          heading: "Plant and Machines Maintenance",
          des: "We have a long list of satisfied clients enjoying inspections, trouble shooting, maintenance services by our qualified and experience staff. Type of services may includes on call, preventive, and contract maintenances services.",
          imge: ['/assets/services/plantsandmachines.jpeg'],
          file: ['/assets/services/plantsandmachines.pdf']
      },
      {
          heading: "Calibration",
          des: "Calibration of electrical, electronics and instrumentation equipment is essential for accurate and precise measurements. We have limited ability for on site calibration but fulfill the requirements with the help of our partners.",
          imge: ['/assets/services/calibration.jpg'],
          file: ['/assets/services/calibration.pdf']
      },
      {
          heading: "Reverse Engineering",
          des: "When it become necessary to retain and reproduced a hardware for which documentation is not available then we help our clients to provide reverse engineering services.",
          imge: ['/assets/services/reverseengineering.jpeg'],
          file: ['/assets/services/reverseengineering.pdf']
      },
      {
          heading: "Generator Maintenance",
          des: "We have a network of maintenance and service technicians trained in maintenance of Generator. We provide warranty programs, parts and service on all type of generators. Our local manufacturing capabilities power solutions can be custom-built, offer the best cost versus performance ratios.",
          imge: ['/assets/services/generatormaintenance.jpg'],
          file: ['/assets/services/generatormaintenance.pdf']
      },
      {
          heading: "Trainings",
          des: "Techno source understands that key of progress is the continues development and we believe that emphasizes on continuing education and training accelerate the pace of developments. Our internship program is part of our will and efforts to bridge the industries and academia gap.",
          imge: ['/assets/services/trainings.jpg'],
          file: ['/assets/services/trainings.pdf']
      },
  ];
  
  return (
    <div>
      <Nav />

      <div className="services-heading">
        <h3>
          <span className="welcome-text">
            {servicesText}
            {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
          </span>
        </h3>
      </div>

      <div className="services-container">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.heading}
          description={service.des}
          image={service.imge[0]}
          pdfUrl={service.file[0]}
        />
      ))}
    </div>

    <Footer/>

    </div>
  )
}

export default Services
