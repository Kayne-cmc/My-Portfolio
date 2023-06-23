import React from 'react';
import { Link } from "react-scroll";
import './Nav.css';
import Resume from './Resume.pdf';

function scrollToFooter() {
  window.scrollTo(0,document.body.scrollHeight);
}

function Nav() {
  return (
    <div className="Dropdown">
      <div className="line"></div>
      <div>
        <nav>
        <div className="logo">
          <div className="prism">
            <div className="quote front-face">EXPLORE</div>
            <div className="quote top-face">DISCOVER</div>
            <div className="quote back-face">CREATE</div>
            <div className="quote bottom-face">REPEAT</div>
          </div>
        </div>
          <input type="checkbox" id="menucheck"></input>
          <label htmlFor="menucheck" className="menu">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="left-nav">
            <li className="menuItem">
              <a href="/">
                About Me
              </a>
            </li>
            <li className="menuItem">
              <a href="/Projects/"
              >
                Projects
              </a>
            </li>
          </ul>
          <a className="title" href="/">
            Kayne Chu 
          </a>
          <ul className="right-nav">
            <li className="menuItem">
              <a href={Resume} target="blank">
                Resume
              </a>
            </li>
            <li className="menuItem"><Link to="/" onClick={scrollToFooter}>Contact<i className="fas fa-caret-down"></i></Link>
              <ul>
                <li className="selector">
                  <a
                    href="https://www.linkedin.com/in/kaynechu"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="selector">
                  <a href="tel:647-972-9298">Phone</a>
                </li>
                <li className="selector">
                  <a href="mailto:k33chu@uwaterloo.ca">Email</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;