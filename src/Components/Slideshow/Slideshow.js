import "./Slideshow.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skateboarding from "./images/Skateboarding.jpg";
import Projects from "./images/Project-picture.png";
import Welding from "./images/Welding.jpg";

function Slideshow() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    className: "slider",
  };

  return (
    <div className="Slideshow">
      <Slider {...settings}>
        <div className="container">
          <img src={Skateboarding} alt="Skateboarding" width="100%" />
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
          <img src={Projects}></img>
          <div className="image-content">
            <p>
              Working with 3D printing, my group and I printed parts to create a
              wind up climbing toy
            </p>
            <a href="https://youtu.be/b8q1SQjiZmA"
              target="blank">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={Welding}></img>
          <div className="image-content">
            <p>
              With some robotC coding, my group and I have programmed a robot to
              pick up objects.
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
