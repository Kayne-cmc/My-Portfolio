import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Skateboarding from './images/Skateboarding.jpg';
import Projects from './images/Project-picture.png';
import Welding from './images/Welding.jpg';

export default class Slideshow extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slideshow">
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          <div>
            <img src={Skateboarding}></img>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}