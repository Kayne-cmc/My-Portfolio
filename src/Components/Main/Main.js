import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import "./Main.css";
import Nav from "../Nav/Nav";
import Testphoto from "../images/Portrait.jpg";
import Footer from "../Footer/Footer";
import Solidworks from "../images/Solidworks.png";
import Arduino from "../images/Arduino.jpg";

function Main() {

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="Main">
      <Nav />
      <div className="opening">
        <img className="portrait animate__animated animate__fadeIn" src={Testphoto} alt="Portrait"/>
        <div className="opening-text">
          <h1
            className="page-title animate__animated animate__fadeInRight"
            style={{ color: "white" }}
          >
            Hi, I'm Kayne
          </h1>
          <Link className="arrow" style={{ fontSize: 30 }} onClick={() => {window.scrollBy(0,window.innerHeight);}}>
            <i
              className="fas fa-chevron-down"
              style={{ color: "rgb(255,190,210)" }}
            ></i>
          </Link>
        </div>
      </div>

      <div className="introduction">
        <h1 className="header">A Little Bit About Myself. . .</h1>
        <p className="text">
          I am a 2B Mechanical Engineering student at the University of
          Waterloo. I love a nice relaxing day of coding or skateboarding (Check out my skateboarding page <a href="https://www.instagram.com/kayne.skates/" target="blank" style={{color: 'rgb(137,169,197)',textDecoration: 'none', fontWeight: 'bold'}} >here</a>!) but
          most of all, I love learning new things and teaching others! From
          working with younger students in the after school tutoring program at
          my high school to becoming a self-employed math tutor, I have
          developed a passion for helping others learn and succeed in their
          careers.
        </p>
        <h1 className="header">My story, my goals</h1>
        <p className="text">
          Ever since I was a kid, I have always been interested in how things
          worked. Whether it's at school or just my own curious thoughts, I
          always seek logical answers to my questions. This way of thinking has
          led me to my love for math, science and my pursuit to study mechanical
          engineering.
        </p>
        <p className="text" style={{ marginBottom: 0 }}>
          Growing up in Richmond Hill, I watched my dad's creativity unfold in
          his own personal projects. He was always building something new and I
          always aspired to be creative like him. I started taking technological
          design classes at my high school to improve my practical skills and
          created some of my own personal projects in my spare time. Now as a
          future mechanical engineer, I still hold the same goal that I had as a
          child - to create amazing things that help others.
        </p>
      </div>

      <div className="skills">
        <div
          className="skill-container"
          data-aos="flip-up"
          data-aos-anchor=".skills"
          data-aos-anchor-placement="center-bottom"
        >
          <i className="fa fa-code" />
          <p>HTML, CSS, REACTJS, C++</p>
        </div>

        <div
          className="skill-container"
          data-aos="flip-up"
          data-aos-delay="200"
          data-aos-anchor=".skills"
          data-aos-anchor-placement="center-bottom"
        >
          <i className="far fa-file-excel" />
          <p>Microsoft Excel, VBA</p>
        </div>

        <div
          className="skill-container"
          data-aos="flip-up"
          data-aos-delay="600"
          data-aos-anchor=".skills"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={Solidworks} alt="Solidworks"></img>
          <p>SolidWorks</p>
        </div>

        <div
          className="skill-container"
          data-aos="flip-up"
          data-aos-delay="800"
          data-aos-anchor=".skills"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={Arduino} alt="Arduino"></img>
          <p>Arduino</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Main;
