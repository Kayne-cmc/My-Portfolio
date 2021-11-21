import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "aos/dist/aos.css";
import "./Main.css";
import Nav from "../Nav/Nav";
import Testphoto from "../images/Portrait.jpg";
import Introduction from "./Introduction";
import ProjectDemo from './ProjectDemo';
import Footer from "../Footer/Footer";
import coding from "../images/C++.png";
// import ScrollMagic from 'scrollmagic';

function Main(props) {
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";

    // const controller = new ScrollMagic.Controller();
    // const scene = new ScrollMagic.Scene({
    //   duration: 100,
    //   offset: 50
    // }).setPin("test");
    // controller.addScene(scene)
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
          <ScrollLink
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
          </ScrollLink>
        </div>
      </div>
      <Introduction />
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
            <img src={coding} className="skill" alt="C++" />
            <div className="skill-description" data-aos="fade-right">
              <h1 className="skill-header header">C++</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">January 2020</p>
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
            <i className="fab fa-vuejs skill"></i>
            <div className="skill-description" data-aos="fade-right">
              <h1 className="skill-header header">VueJS</h1>
              <div className="break"></div>
              <i className="far fa-calendar-alt" />
              <p className="skill-text text">September 2021</p>
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
      </ul>
      
      <div style={{ width: "100%" }}><h1 className="header">Projects</h1></div>
      <ProjectDemo index={props.index} setIndex={props.setIndex}/>
      <Footer />
    </div>
  );
}

export default Main;
