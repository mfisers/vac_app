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
      //autoplay: true,
      //adaptiveHeight: true,
      arrows: false
    };
    return (
          <Slider {...settings}>
            <div className="app-carousel-image"><img role="presentation" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png" /></div>
            <div className="app-carousel-image"><img role="presentation" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png" /></div>
            <div className="app-carousel-image"><img role="presentation" src="http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png" /></div>
          </Slider>
    );
  }
}

export default Carousel;
