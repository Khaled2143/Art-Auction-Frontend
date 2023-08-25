import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
import images from '../utils/ImageData';

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider className= "MyCarousel" {...settings}>
      {images.map((image, index) => (
        <Link to={"/artwork/" + index} key={image.src}>
          <img src={image.src} alt="carousel slide"/>
        </Link>
      ))}
    </Slider>
  );
}

export default ImageCarousel