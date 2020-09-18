import React from 'react';
import './App.css';
import Testphoto from './Testphoto.jpg';

function App() {
  return (
    <div className="App">
      <div className="opening" id="aboutme">
        <img className="portrait" src={Testphoto} alt="Portrait" />
        <div className="opening-text">
          <h1 className="header animate__animated animate__fadeInRight">Hi, I'm Kayne</h1>
          <p style={{paddingBottom: 0}} className="text introduction">I am a 2A Mechanical Engineering student at the University of Waterloo. I love a nice relaxing day of coding or skateboarding but most of all, I love learning new things and teaching others! From working with younger students in the after school tutoring program at my high school to becoming a self-employed math tutor, I have developed a passion for helping others learn and succeed in their careers.</p>
        </div>
      </div>
      
      <div>
        <h1 className="header">My story, my goals</h1>
        <p className="description text" style={{paddingBottom: '0px'}}>
         Ever since I was a kid, I have always been interested in how things worked. Whether it's at school or just my own curious thoughts, I always seek logical answers to my questions. This way of thinking has led me to my love for math, science and my pursuit to study mechanical engineering.
        </p>
        <p className="description text" style={{marginTop: 0}}>
          Growing up in Richmond Hill, I watched my dad's creativity unfold in his own personal projects. He was always building something new and I always aspired to be creative like him. I started taking technological design classes at my high school to improve my practical skills and created some of my own personal projects in my spare time. Now as a future mechanical engineer, I still hold the same goal that I had as a child - to create amazing things that help others.
        </p>
      </div>
    </div>
  );
}

export default App;
