import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import "./Main.css";
import Nav from "../Nav/Nav";
import Testphoto from "../images/Portrait.jpg";
import Footer from "../Footer/Footer";
import coding from "../images/C++.png";

function Main() {
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="Main">
      <Nav />
      <div className="opening">
        <img
          className="portrait animate__animated animate__fadeIn"
          src={Testphoto}
          alt="Portrait"
        />
        <div className="opening-text">
          <h1
            className="page-title animate__animated animate__fadeInRight"
            style={{ color: "white" }}
          >
            Hi, I'm Kayne
          </h1>
          <Link
            className="arrow"
            style={{ fontSize: 30 }}
            to="/"
            onClick={() => {
              window.scrollBy(0, window.innerHeight);
            }}
          >
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
          Waterloo. I love a nice relaxing day of coding or skateboarding (Check
          out my skateboarding page{" "}
          <a
            href="https://www.instagram.com/kayne.skates/"
            target="blank"
            style={{
              color: "rgb(137,169,197)",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            here
          </a>
          !) but most of all, I love learning new things and using it to make new projects! Being able to express my creativity in my work is my passion and I want to be able to share it with others.
        </p>
        <h1 className="header">My story, my goals</h1>
        {/* <p className="text">
          Ever since I was a kid, I would spend my time dwelling on any problem I could think of. Whether it was a math problem I couldn't figure out or questioning how Bluetooth connection worked, my curiosity always puts me into action.
        </p> */}
        <p className="text" style={{ marginBottom: 0 }}>
          Growing up in Richmond Hill, I watched my dad's creativity unfold in
          his own personal projects. He was always building something new and I
          always aspired to be creative like him. I started taking technological
          design classes at my high school to improve my practical skills and
          created some of my own personal projects in my spare time. Now as a
          future engineer, I still hold the same goal that I had as a
          child - to create amazing things.
        </p>
        <h1 className="header">Skills</h1>
      </div>

      <ul className="skills">
        <li>
          <div className="list-item">
            <i className="fab fa-js-square skill"></i>
            <div
              className="skill-description"
              data-aos='fade-right'
            >
              <h1 className="skill-header header">Javascript</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">September 2020</p>
            </div>
          </div>
        </li>

        <li>
          <div className="list-item">
            <i className="fab fa-html5 skill" />
            <div className="skill-description" data-aos='fade-right'>
              <h1 className="skill-header header">HTML</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">July 2020</p>
            </div>
          </div>
        </li>

        <li>
          <div className="list-item">
            <i className="fab fa-css3 skill"></i>
            <div className="skill-description" data-aos='fade-right'>
              <h1 className="skill-header header">CSS</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">July 2020</p>
            </div>
          </div>
        </li>

        <li>
          <div className="list-item">
            <i className="fab fa-react skill" />
            <div className="skill-description" data-aos='fade-right'>
              <h1 className="skill-header header">ReactJS</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">September 2020</p>
            </div>
          </div>
        </li>

        <li>
          <div className="list-item">
            <i className="far fa-file-excel skill" />
            <div className="skill-description" data-aos='fade-right'>
              <h1 className="skill-header header">Excel VBA</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">January 2021</p>
            </div>
          </div>
        </li>

        <li>
          <div className="list-item">
            <i className="fas fa-cubes skill" />
            <div className="skill-description" data-aos='fade-right'>
              <h1 className="skill-header header">SolidWorks</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">September 2019</p>
            </div>
          </div>
        </li>

        <li>
          <div className="list-item">
            <img src={coding} className="skill" alt="C++" />
            <div className="skill-description" data-aos='fade-right'>
              <h1 className="skill-header header">C++</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">January 2020</p>
            </div>
          </div>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Main;
