import React, {useEffect, useState} from 'react';
import validator from 'validator';
import "./Footer.scss";
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  const [submitMessage, setSubmitMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitColor, setSubmitColor] = useState('');

  function validateForm() {
    if ((name==='' || email==='' || phone==='' || message==='') || (!validator.isEmail(email))) {
      if (name==='') {
        setSubmitMessage('Please include your name');
      }
      else if (email==='') {
        setSubmitMessage('Please include your email');
      }
      else if (phone==='') {
        setSubmitMessage('Please include your phone number');
      }
      else if (message==='') {
        setSubmitMessage('Please include a message');
      }
      else if (!validator.isEmail(email)) {
        setSubmitMessage('Please enter a valid email address');
      }
      setSubmitColor('red');
      return false;
    }
    else {
      setSubmitMessage('Submitted Successfully!');
      setSubmitColor('rgb(137, 169, 197)');
      return true;
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_cGQ9CnFFFhpStpuGhmtRF')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
    }
  }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <div className="filler">
    <div className="Footer" data-aos="fade-up" data-aos-duration="700">
      <div className="footer-left">
        <div style={{marginLeft: '5vw'}}>
          <h1 className="bottom-header"
          data-aos="typing"
          data-aos-duration="1500"
          data-aos-easing="typing">
            Get in Touch
          </h1>
        </div>
        <p className="conclusion" style={{ color: "white"}}>
          Whether it's new career opportunities or just to introduce yourself, I
          love meeting new people and I'm always looking to make new
          connections. Get in touch with me and we can set something up!
        </p>

        <div className="contact">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/kayne-chu-273988189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT3%2BXw5KSQ26AMHS5FYGRUA%3D%3D" target="blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <div className="divider"></div>
            <li>
              <a href="https://github.com/Kayne-cmc" target="blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <div className="divider"></div>
            <li>
              <a href="tel:647-972-9298">
                <i className="fas fa-phone"></i>
              </a>
            </li>
            <div className="divider"></div>
            <li style={{borderRight: "none"}}>
              <a href="mailto:k33chu@uwaterloo.ca">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-right">
        <form onSubmit={sendEmail}>
          <div className="forminput">
            <div className="input">
              <input type="text" name="name" placeholder="Name" onChange={(e) => {setName(e.target.value);}}/>
              <i className="fas fa-user"></i>
            </div>
            <div className="input">
              <input type="text" name="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value);}}/>
              <i className="fas fa-envelope"></i>
            </div>
            <div className="input">
              <input type="text" name="phone" placeholder="Phone Number" style={{marginRight: 0}} onChange={(e) => {setPhone(e.target.value);}}/>
              <i className="fas fa-phone"></i>
            </div>
          </div>
            <input type="text" name="subject" placeholder="Subject"/><br></br>
            <textarea type="text" name="message" placeholder="Hey! What's up" onChange={(e) => {setMessage(e.target.value);}}/><br></br>
          <input type="submit" value="Send Message" onClick={(e) => validateForm()}/>
          <h1 className="submitMessage" style={{color: submitColor}}>{submitMessage}</h1>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Footer;