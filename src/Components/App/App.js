import React from 'react';
import './App.css';
import Testphoto from './Testphoto.jpg';

function App() {
  return (
    <div className="App">
      <div className="opening">
        <img className="portrait" src={Testphoto} alt="Portrait" />
        <div className="opening-text">
          <h1 className="header">Hi, I'm Kayne</h1>
          <p style={{paddingBottom: 0}} className="text introduction">I am a 2A Mechanical Engineering student at the University of Waterloo. I love a nice relaxing day of coding or skateboarding but most of all I love learning new things and I love teaching others! From participating in the tutoring program at my highschool to becoming a self-employed math tutor, I have a developed an appreciation to the skill of teaching.</p>
        </div>
      </div>
      
      <p className="description text">
         Ever since I was a kid, I was always interested in how things worked. Whether its a solution or a design, every problem or difficult situation that I encounter, I would come up with a solution in my head. Without the proper experience, I was unable to make my designs come to life. As a future engineer I still hold the same goal I had as a child-to create awesome things that help others.
      </p>
    </div>
  );
}

export default App;
