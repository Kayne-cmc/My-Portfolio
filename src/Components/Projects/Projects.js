import React from "react";
import "./Projects.css";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Animalclimber from "../images/AnimalClimber.mov";
import Escapethecave from "../images/EscapeTheCave.mov";
import Hyperloop from "../images/HyperLoop.mp4";
import Batterybox from "../images/BatteryBox.mp4"
import AnimalClimber from "../images/AnimalClimber.png";
import EscapeTheCave from "../images/EscapeTheCave.png";
import HyperLoop from "../images/HyperLoop.png";
import BatteryBox from "../images/BatteryBox.png";

const images = [
  {
    photo: HyperLoop,
    link: "first",
  },
  {
    photo: BatteryBox,
    link: "second",
  },
  {
    photo: AnimalClimber,
    link: "third",
  },
  {
    photo: EscapeTheCave,
    link: "last",
  },
];

function Projects() {
  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="prev slide-arrow">
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="next slide-arrow">
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  };

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    lazyLoad: true,
    slidesToScroll: 1,
    centerPadding: 0,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (dot) => <div className="slide-button"></div>,
  };

  return (
    <div className="Projects">
      <Nav />
      <div className="slideshow">
        <h1 className="page-title animate__animated animate__fadeInDown">
          Projects
        </h1>
        <Slider {...settings}>
          {images.map((image) => (
            <div>
              <Link to={image.link}>
                <img src={image.photo} alt={image.photo} />
              </Link>
            </div>
          ))}
        </Slider>
        <Link to="first" className="arrow">
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>

      <div className="container" id="first">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={Hyperloop}
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          Video not supported
        </video>
        <div
          className="image-content"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <h1 className="right-header header">The aCADemics HyperLoop</h1>
          <p className="text">
            During my second year as a student at the University of Waterloo, I
            had the privilege of participating in the McMaster CAD Designathon
            alongside three bright and enthusiastic Waterloo students. After
            discussing the four design challenges available, our team chose to
            explore our creativity and to take on the design the interior of a
            Hyperloop train. Using Solidworks and some careful considerations of
            the constraints given, we finished with a full CAD assembly and a
            presentation to accompany the masterpiece. This experience was one
            to remember, and the Solidworks experience developed was a bonus.
            Learn more here.
          </p>
          <a
            href="https://youtu.be/e2PxlpOMfnw"
            target="blank"
            className="link"
          >
            LEARN MORE
          </a>
        </div>
      </div>
      <Link to="second" className="arrow">
        <i className="fas fa-chevron-down"></i>
      </Link>

      <div className="container" id="second">
        <div
          className="image-content"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 className="left-header header">Module Supports</h2>
          <p className="text">
            As a member of the University of Waterloo Midnight Sun solar car team, I was given the opportunity to design various parts for the Battery box subteam. Using Solidworks, I designed a module support to prevent the battery modules from moving when the car was operating.
          </p>
          <a
            className="link"
            href="https://www.uwmidsun.com/"
            target="blank"
          >
            LEARN MORE
          </a>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={Batterybox}
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          Video not supported
        </video>
      </div>
      <Link to="third" className="arrow">
        <i className="fas fa-chevron-down"></i>
      </Link>

      <div className="container" id="third">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={Animalclimber}
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          Video not supported
        </video>
        <div
          className="image-content"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 className="right-header header">The Animal Climber</h2>
          <p className="text">
            Escape The Cave! - My very first personal coding project. After
            learning the Java programming language, I used Android Studios to
            create my first mobile application. This application is a simple
            high score game that involves jumping from platform to platform
            while dodging falling obstacles.
          </p>
          <a
            className="link"
            href="https://youtu.be/b8q1SQjiZmA"
            target="blank"
          >
            LEARN MORE
          </a>
        </div>
      </div>
      <Link to="last" className="arrow">
        <i className="fas fa-chevron-down"></i>
      </Link>

      <div className="container" id="last">
        <div
          className="image-content"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 className="left-header header">Escape The Cave</h2>
          <p className="text">
            Escape The Cave! - My very first personal coding project. After
            learning the Java programming language, I used Android Studios to
            create my first mobile application. This application is a simple
            high score game that involves jumping from platform to platform
            while dodging falling obstacles.
          </p>
          <a
            className="link"
            href="https://github.com/Kayne-cmc/first-android-app"
            target="blank"
          >
            LEARN MORE
          </a>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={Escapethecave}
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          Video not supported
        </video>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;