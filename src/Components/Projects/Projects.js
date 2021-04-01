import React, { useEffect } from "react";
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
import Workouttracker from '../images/WorkoutTracker.mp4';
import AnimalClimber from "../images/AnimalClimber.jpg";
import EscapeTheCave from "../images/EscapeTheCave.jpg";
import HyperLoop from "../images/HyperLoop.jpg";
import BatteryBox from "../images/BatteryBox.jpg";
import WorkoutTracker from '../images/WorkoutTracker.png';

const images = [
    {
        photo: WorkoutTracker,
        link: 'first'
    },
    {
        photo: HyperLoop,
        link: "second",
    },
    {
        photo: BatteryBox,
        link: "third",
    },
    {
        photo: AnimalClimber,
        link: "fourth",
    },
    {
        photo: EscapeTheCave,
        link: "last",
    },
];

function Projects() {

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
  }, []);

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
          {images.map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.photo} alt={image.photo} className='slide-image' />
              </Link>
            </div>
          ))}
        </Slider>
        <Link to="first" className="arrow">
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>

      <div className='content-container' id="first">
        <div className="container">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={Workouttracker}
            className="right"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            Video not supported
          </video>
          <div
            className="left image-content"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <h1 className="header">Workout Tracker</h1>
            <p className="text">
                Create, edit and view new workouts with the Workout Tracker. Using the MongoDB, ExpressJS, NodeJS, and ReactJS programming stack, I developed my very first full stack web application. This web applicaiton allows users to create or edit workouts that can be stored and retrieved from a database collection connected to a back-end server.
            </p>
            <a
              href="https://github.com/Kayne-cmc/workout-tracker"
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
      </div>

      <div className='content-container' id="second">
        <div className="container">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={Hyperloop}
            className="left"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            Video not supported
          </video>
          <div
            className="right image-content"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <h1 className="header">The aCADemics HyperLoop</h1>
            <p className="text">
              During my second year at the University of Waterloo, I
              had the privilege of participating in the McMaster CAD Designathon
              alongside three bright and enthusiastic Waterloo students. Given a choice between four design challenges, our team decided to
              explore our creativity and design the interior of a
              Hyperloop train. Using Solidworks and some careful considerations of
              the provided constraints, we finished with a full CAD assembly and a
              presentation to accompany the masterpiece. This event was one
              to remember, and the Solidworks experience developed was a bonus.
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
        <Link to="third" className="arrow">
          <i className="fas fa-chevron-down"></i>
        </Link>        
      </div>
     
      <div className='content-container' id='third'>
        <div className="container">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={Batterybox}
            className="right"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            Video not supported
          </video>
          <div
            className="left image-content"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <h2 className="header">Module Supports</h2>
            <p className="text">
              As a member of the University of Waterloo Midnight Sun solar car team, I was given the opportunity to participate in the process of designing the battery system that powers the car. Using Solidworks, I designed a support to prevent the battery modules from moving while the car was operating. After many discussions and revisions with the team, the final product was a module support which met all the specifications and optimizes air flow of the batteries to prevent overheating.
            </p>
            <a
              className="link"
              href="https://www.uwmidsun.com/"
              target="blank"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <Link to="fourth" className="arrow">
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>

      <div className='content-container' id='fourth'>
        <div className="container">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={Animalclimber}
            className="left"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            Video not supported
          </video>
          <div
            className="right image-content"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <h2 className="header">The Animal Climber</h2>
            <p className="text">
                For our final project during our first year, my group and I were tasked to design and create a prototype for a toy. The Animal Climber is a wind up toy that uses 3D printed parts to climb along a straight track.
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
      </div>

      <div className='content-container' id='last'>
        <div className="container">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={Escapethecave}
            className="right"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            Video not supported
          </video>
          <div
            className="left image-content"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <h2 className="header">Escape The Cave</h2>
            <p className="text">
              Escape The Cave! - My very first personal programming project. After
              learning the Java programming language, I used the Android Studios IDE to
              create my first mobile application. This application is a simple
              high score game that involves player interaction to control a virtual character and jump between platforms
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
