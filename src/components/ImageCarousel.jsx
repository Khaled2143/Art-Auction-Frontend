import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

function ImageCarousel(props) {

  const images = props.images;

  const settings = {
    dots: true,
    infinite: images?.length > 3,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider className= "MyCarousel" {...settings}>
      {images?.map((img) => (
        <Link to={"/artworks/" + img.id} key={img.id}>
          <img src={img.image} alt="carousel slide"/>
        </Link>
      ))}
    </Slider>
  );
}

export default ImageCarousel