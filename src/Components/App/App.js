import React from 'react';
import './App.css';
import Testphoto from './Testphoto.jpg';

function App() {
  return (
    <div className="App">
      <div className="opening">
        <img className="portrait" src={Testphoto} alt="Portrait" />
        <div className="opening-text">
          <h1 className="header animate__animated animate__fadeInRight">Hi, I'm Kayne</h1>
          <p style={{paddingBottom: 0}} className="text introduction">I am a 2A Mechanical Engineering student at the University of Waterloo. I love a nice relaxing day of coding or skateboarding but most of all, I love learning new things and teaching others! From teaching younger students in the after school tutoring program at my high school to becoming a self-employed math tutor, I have a developed an appreciation for the skill of teaching.</p>
        </div>
      </div>
      
      <div>
        <h1 className="header">My story, my goals</h1>
        <p className="description text">
         Ever since I was a kid, I was always interested in how things worked. I grew up watching my dad build his own projects and aspired to be innovative. Without the proper experience, I was unable to make my designs come to life. Now as a future engineer, I still hold the same goal I had as a child-to create awesome things that help others.
        </p>
      </div>
    </div>
  );
}

export default App;
