import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Footer.css';

function Footer() {
    return (
        <ScrollAnimation animateIn="animate__animated animate__fadeInUp" duration="0.5">
            <div className="Footer">
                <h1 id="bottom-header" className="header">Get in Touch</h1>
                <p className="conclusion text">Whether it's for new career opportunities or just to introduce yourself, I love meeting new people and I'm always looking to make new connections. Get in touch with me and we can set something up!</p>
            </div>
            
            <div className="contact">
                <ul>
                    <li><a href="https://www.linkedin.com/in/kayne-chu-273988189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT3%2BXw5KSQ26AMHS5FYGRUA%3D%3D" target="blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/Kayne-cmc" target="blank"><i className="fab fa-github"></i></a></li>
                    <li><a href="tel:647-972-9298"><i className="fas fa-phone"></i></a></li>
                    <li><a href="mailto:k33chu@uwaterloo.ca"><i className="fas fa-envelope"></i></a></li>
                </ul>
                {/* <a href="https://www.linkedin.com/in/kayne-chu-273988189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT3%2BXw5KSQ26AMHS5FYGRUA%3D%3D" target="blank"><i className="fab fa-linkedin"></i></a>
                <a href="tel:647-972-9298"><i className="fas fa-phone"></i></a>
                <a href="mailto:k33chu@uwaterloo.ca"><i className="fas fa-envelope"></i></a>
                <a href="https://github.com/Kayne-cmc" target="blank"><i className="fab fa-github"></i></a> */}
            </div>
        </ScrollAnimation>
    );
}

export default Footer;