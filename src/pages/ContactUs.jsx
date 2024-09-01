import { React, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './Contact.css';
import Footer from "../components/Footer";

const ContactUs = () => {

  emailjs.init('t7dOPoeM5-GAvu6Um');
  
  const handleContactClick = () => {
    Swal.fire({
      title: 'Query Form',
      html: `
        <form id="contact-form">
          <div class="form-group">
            <input type="text" id="name" name="name" class="form-control" required placeholder="Name">
          </div>
          <div class="form-group">
            <input type="text" id="no" name="no" class="form-control" required placeholder="Phone Number">
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" class="form-control" required placeholder="Email">
          </div>
          <div class="form-group">
            <textarea id="comment" name="comment" class="form-control" rows="3" required placeholder="Your Query"></textarea>
          </div>
        </form>
      `,
      confirmButtonText: 'Submit',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const form = Swal.getPopup().querySelector('#contact-form');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Check if any field is empty
        if (!data.name || !data.no || !data.email || !data.comment) {
          Swal.showValidationMessage('Please fill out all fields');
          return false; // Prevent the form from being submitted
        }

        return emailjs.send('service_zjhtl3u', 'template_lx3t7wr', data)
          .then(response => response)
          .catch(error => {
            Swal.showValidationMessage(`Request failed: ${error.message}`);
          });
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Success!', 'Your message has been sent.', 'success');
      }
    });
  };

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const [contactText] = useTypewriter({
    words: ["Contact Us"],
    loop: 1,
    typeSpeed: 100,
    onLoopDone: () => setIsTypingComplete(true),
  });

  return (
    <>
      <Nav />
      <div className="contact-page">
        <div className="contact-container">
          <h3>
            <span className="welcome-text">
              {contactText}
              {!isTypingComplete && <Cursor cursorStyle="|" cursorColor="white" />}
            </span>
          </h3>
        </div>
        <div>
          <h3 style={{ color: 'black', marginTop: '25px', marginLeft: '20px' }}>Techno Source</h3>
        </div>

        <div className="details">
          <table className="contact-table">
            <tbody>
              <tr>
                <td className="contact-label">Phone No <span><i className="fa-solid fa-phone"></i></span> :</td>
                <td className="contact-info">+92-213-5387140</td>
              </tr>
              <tr>
                <td className="contact-label">Cell <span><i className="fa-solid fa-phone-volume"></i></span> :</td>
                <td className="contact-info">
                  +92-323-0000219 <br />
                  +92-334-2193000
                </td>
              </tr>
              <tr>
                <td className="contact-label">Whatsapp <span><i className="fa-brands fa-square-whatsapp"></i> :</span></td>
                <td className="contact-info">+92-334-2193000</td>
              </tr>
              <tr>
                <td className="contact-label">Email <span><i className="fa-solid fa-envelope"></i></span> :</td>
                <td className="contact-info">
                  info@technosource.pk <br />
                  tecsource@yahoo.com
                </td>
              </tr>
              <tr>
                <td className="contact-label">Facebook <span><i className="fa-brands fa-facebook" style={{ color: '#000000' }}></i></span> :</td>
                <td className="contact-info"><a href="" style={{textDecoration: "none", color:"black"}}><span><i className="fa-brands fa-square-facebook"></i></span> Facebook Page</a></td>
              </tr>
            </tbody>
          </table>
          <div className="contact-form-container">
            <button id="contact-form-button" className="btn btn-primary" onClick={handleContactClick}>Click to write your queries</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
