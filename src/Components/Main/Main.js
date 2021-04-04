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
          !) but most of all, I love learning new things and applying them into
          my projects! I am constantly looking for new programming languages to
          learn and new skills to develop so that I can create more awesome
          things. Check out the <a
            href="/projects"
            style={{
              color: "rgb(137,169,197)",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            projects
          </a> I have made so far!
        </p>
        <h1 className="header">My story, my goals</h1>
        <p className="text" style={{ marginBottom: 0 }}>
          Growing up in Richmond Hill, I watched my dad’s creativity unfold as
          he would be working on something new every week. Whether it was a renovation for the house, a new skateboard obstacle for my brother and I, or a fishing gadget for himself, my dad always
          kept himself busy. As a kid who couldn't even use a power drill (and I still struggle sometimes), I was
          amazed by his work and aspired to be creative like him. Now as a
          future engineer, I hold the same goal that I had as a kid - to explore my imagination and create amazing things.
        </p>
        <h1 className="header">Skills</h1>
      </div>

      <ul className="skills">
        <li>
          <div className="list-item">
            <i className="fab fa-js-square skill"></i>
            <div className="skill-description" data-aos="fade-right">
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
            <div className="skill-description" data-aos="fade-right">
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
            <div className="skill-description" data-aos="fade-right">
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
            <div className="skill-description" data-aos="fade-right">
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
            <div className="skill-description" data-aos="fade-right">
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
            <div className="skill-description" data-aos="fade-right">
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
            <div className="skill-description" data-aos="fade-right">
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
