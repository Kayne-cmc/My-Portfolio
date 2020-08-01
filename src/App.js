import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Skateboarding from './images/Skateboarding.jpg';
import Projects from './images/Project-picture.png';
import Welding from './images/Welding.jpg';
import Resume from './Resume.pdf';

function App() {
  return (
    <div className="App">
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
