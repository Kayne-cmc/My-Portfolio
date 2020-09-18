import "./Slideshow.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skateboarding from "./images/Skateboarding.mov";
import AnimalClimber from "./images/AnimalClimber.mov";
import EscapeTheCave from "./images/EscapeTheCave.mov";

function Slideshow() {
  let settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3350,
    pauseOnHover: true,
    className: "slider",
  };

  return (
    <div className="Slideshow">
      <Slider {...settings}>
        <div className="container">
          <video autoPlay loop muted playsInline src={Skateboarding}>Video not supported</video>
          <div className="image-content">
            <p>
              My first memories as a kid was learning to ride a skateboard for the very first time. Skateboarding has been one of the most influencial aspects in my life and has changed my perspective on learning. To me, it is more than just a hobby. Challenges only push me to work harder and this passion has been a demonstration of that. I keep track of my skateboarding progress on my instagram page.
            </p>
            <a href="https://www.instagram.com/kayne.skates/"
              target="blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <video autoPlay loop muted playsInline src={AnimalClimber}>Video not supported</video>
          <div className="image-content">
            <p>
              At the University of Waterloo, my classmates and I experienced the engineering design process as we created the Animal Climber - a wind up toy for children that travels across a straight track. Using SolidWorks we designed and 3D printed multiple parts to create arms that fit onto a wind up box. Our toy was presented in a symposium with everyone else's creations.
            </p>
            <a href="https://youtu.be/b8q1SQjiZmA"
              target="blank">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <video autoPlay loop muted playsInline src={EscapeTheCave}>Video not supported</video>
          <div className="image-content">
            <p>
              Escape The Cave! - My very first personal coding project. After learning the Java programming language, I used Android Studios to create my first mobile application. This application is a simple high score game that involves jumping from platform to platform while dodging falling obstacles.
            </p>
            <a
              className="youtube"
              href="https://github.com/Kayne-cmc/first-android-app"
              target="blank"
            >
              <i class="fab fa-github github"></i>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
