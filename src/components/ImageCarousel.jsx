import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/bear.png"
import image2 from "../assets/forevermonke.png"
import image3 from "../assets/gecko.png"
import image4 from "../assets/howdymonke.png"

const images = [
  {src: image1, alt: ""},
  {src: image2, alt: ""},
  {src: image3, alt: ""},
  {src: image4, alt: ""},
];


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
      {images.map((image) => (
        <div key={image.src}>
          <img src={image.src} alt="carousel slide"/>
        </div>
      ))}
    </Slider>
  );
}

export default ImageCarousel