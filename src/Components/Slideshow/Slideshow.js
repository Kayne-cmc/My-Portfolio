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
    autoplaySpeed: 335000,
    pauseOnHover: true,
    className: "slider",
  };

  return (
    <div className="Slideshow">
      <Slider {...settings}>
        <div className="container">
          <video src={Skateboarding} autoPlay loop muted>Video not supported</video>
          <div className="image-content">
            <p>
              One of my earliest memories as a kid was learning to ride a skateboard. It has been one of the most influencial aspects in my life and has changed my perspective on learning. To me, skateboarding is more than a hobby. Challenges only push me to work harder and skateboarding has been a demonstration of that. I keep track of my skateboarding progress on my instagram page.
            </p>
            <a href="https://www.instagram.com/kayne.skates/"
              target="blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <video src={AnimalClimber} autoPlay loop muted>Video not supported</video>
          <div className="image-content">
            <p>
              Tasked with designing and building a prototype for a children's toy, my group and I at the University of Waterloo 3D printed parts to attach to a wind up boxWorking with 3D printing, my group and I printed parts to create a
              wind up climbing toy
            </p>
            <a href="https://youtu.be/b8q1SQjiZmA"
              target="blank">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <video src={EscapeTheCave} autoPlay loop muted style={{}}>Video not supported</video>
          <div className="image-content">
            <p>
              Escape The Cave! My very first personal coding project. Using Android Studios, I created my very first mobile app. This game, called Escape the Cave, is a simple record game that involves jumping from platform to platform, and dodging rocks that are falling 
            </p>
            <a
              className="youtube"
              href="https://youtu.be/Od4rgrqviLM"
              target="blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
