import React, { Component } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

class Carousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      arrows: false
    };
    return (
          <Slider {...settings}>
            <div className="app-carousel-image"><img role="presentation" src="https://i.ytimg.com/vi/802wfN0GzVc/maxresdefault.jpg" /></div>
            <div className="app-carousel-image"><img role="presentation" src="http://www.pixelstalk.net/wp-content/uploads/2016/11/Nature-Farming-Wallpapers-HD.jpg" /></div>
            <div className="app-carousel-image"><img role="presentation" src="https://i.ytimg.com/vi/MjkdNl19eGw/maxresdefault.jpg" /></div>
          </Slider>
    );
  }
}

export default Carousel;
