import React, {useEffect, useState} from 'react';
import validator from 'validator';
import "./Footer.scss";
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  const [submitMessage, setSubmitMessage] = useState('Please include your name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitColor, setSubmitColor] = useState('red');

  function fadeSubmitMessage() {
    document.querySelector('.submitMessage').classList.remove('fadeOut');
    document.querySelector('.submitMessage').classList.add('fadeIn');
    setTimeout(() => {
      document.querySelector('.submitMessage').classList.add('fadeOut');
      document.querySelector('.submitMessage').classList.remove('fadeIn');
    }, 2000);
  }

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
      fadeSubmitMessage();
      return false;
    }
    else {
      setSubmitMessage('Submitted Successfully!');
      setSubmitColor('rgb(137, 169, 197)');
      fadeSubmitMessage();
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
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        e.target.reset();
    }
  }

  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
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
              <a href="https://www.linkedin.com/in/kaynechu" target="blank">
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
            <input type="text" name="subject" placeholder="Subject"/>
            <textarea type="text" name="message" placeholder="Hey! What's up" onChange={(e) => {setMessage(e.target.value);}}/><br></br>
          <button onClick={() => validateForm()}>Send Message</button>
          <h1 className="submitMessage" style={{color: submitColor}}>{submitMessage}</h1>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Footer;