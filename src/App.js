import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Skateboarding from './images/Skateboarding.jpg';
import Projects from './images/Project-picture.png';
import Welding from './images/Welding.jpg';
import Resume from './Resume.pdf';
import AnimalClimber from './AnimalClimber';
import Botler from './Botler';

function App() {
  return (
    <div className="App">
      <div className="dropdown">
        <Router>
          <div>
            <nav>
              <a className="title" href="./">Kayne Chu </a>
              <ul>
                <li>
                  <Link to="/">About Me</Link>
                </li>
                {/* <li>
                  <Link to="/projects">Projects<i class="fas fa-caret-down"></i></Link>
                  <ul>
                    <li><Link to="/animalclimber">Animal Climber</Link></li>
                    <li><Link to="/botler">Botler</Link></li>
                  </ul>
                </li> */}
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
          <Switch>
            <Route exact path="/animalclimber">
              <AnimalClimber/>
            </Route>
            <Route exact path="/botler">
              <Botler/>
            </Route>
              
          </Switch>
            
        </Router>
      </div>

        {/* // <nav>
        //   <ul>
        //     <li><a href="./">About Me</a></li>
        //     <li><a href="#">Projects <i class="fas fa-caret-down"></i></a>
        //       <ul>
        //         <li><a href="#">Animal Climber</a></li>
        //         <li><a href="#">Botler</a></li>
        //       </ul>
        //     </li>
        //     <li><a href={Resume}>Resume</a></li>
        //     <li><a href="#">Contact <i class="fas fa-caret-down"></i></a>
        //       <ul>
        //         <li><a href="#">Email</a></li>
        //         <li><a href="#">Phone</a></li>
        //         <li><a href="https://www.linkedin.com/in/kayne-chu-273988189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT3%2BXw5KSQ26AMHS5FYGRUA%3D%3D">LinkedIn</a></li>
        //       </ul>
        //     </li>
        //   </ul>
        // </nav> */}
    
        <p className="text">
          Hi, I'm Kayne and I am a 2A Mechanical Engineering student at the University of Waterloo. I love a nice relaxing day of coding or skateboarding but most of all I love learning new things! Ever since I was a kid, I would always question. Whether its a solution or a design, every problem or difficult situation that I encounter, I would come up with a solution in my head. Without the proper experience, I was unable to make my designs come to life. As a future engineer I still hold the same goal I had as a child-to create awesome things that help others.
        </p>        


      <div className="slideshow">
        <figure>
          <div className="container">
            <img src={Skateboarding} alt="Skateboarding"/>
            <p className="skateboarding-text">Skateboarding was one of my very first hobbies as a kid. It has been very influencial in my life and has changed my perspective on learning. To me, skateboarding is a discipline. The challenge of learning a new trick is more difficult than what others often assume. I keep track of my progress on my instagram page.</p>
            <a className="instagram" href="https://www.instagram.com/kayne.skates/" target="blank"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="container">
            <img src={Projects} alt="Projects"></img>
            <p className="animalclimber-text">Working with 3D printing, my group and I printed parts to create a wind up climbing toy</p>
            <a className="youtube" href="https://youtu.be/b8q1SQjiZmA" target="blank"><i className="fab fa-youtube"></i></a>
          </div>

          <div className="container">
            <img src={Welding} alt="Resume"></img>
            <p className="botler-text">With some robotC coding, my group and I have programmed a robot to pick up objects</p>
            <a className="youtube" href="https://youtu.be/Od4rgrqviLM" target="blank"><i className="fab fa-youtube"></i></a>
          </div>

          <div className="container">
            <img src={Skateboarding} alt="Skateboarding"/>
            <p className="skateboarding-text">I love skateboarding. To me, skateboarding is a discipline. The challenge of learning a new trick is more difficult than what others often assume. I keep track of my progress on my instagram page.</p>
            <a className="instagram" href="https://www.instagram.com/kayne.skates/" target="blank"><i className="fab fa-instagram"></i></a>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default App;
