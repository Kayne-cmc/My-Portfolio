import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './Nav.css';
import Resume from './Resume.pdf';

function Nav() {
    return (
        <div className="Dropdown">
            <Router>
                <div>
                    <nav>
                        <a className="title" href="/">Kayne Chu </a>
                        <input type="checkbox" id="menucheck"></input>
                        <label for="menucheck" className="menu"><i className="fas fa-bars"></i></label>
                        <ul>
                            <li>
                                <a href="#aboutme">About Me</a>
                            </li>
                            <li><a href={Resume} target="blank">Resume</a></li>
                            <li>Contact<i className="fas fa-caret-down"></i>
                                <ul>
                                    <li className="selector"><a href="https://www.linkedin.com/in/kayne-chu-273988189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT3%2BXw5KSQ26AMHS5FYGRUA%3D%3D" target="blank">LinkedIn</a></li>
                                    <li className="selector"><a href="tel:647-972-9298">Phone</a></li>
                                    <li className="selector"><a href="mailto:k33chu@uwaterloo.ca">Email</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        </div>
    );
}

export default Nav;