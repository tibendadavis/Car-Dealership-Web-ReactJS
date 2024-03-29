import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Buy used cars from abroad for as low as Tshs 12,000,000</h4>
            <h1 className="text-light mb-4 font-sans font-bold"><span className=" text-red-700 font-bold">CFG</span> Motors Tanzania</h1>

            <button className="btn reserve__btn mt-0">
              <Link to="/cars" className=" font-bold text-xl text-blue-800">Buy Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Buy used cars from abroad for as low as Tshs 12,000,000</h4>
            <h1 className="text-light mb-4 font-sans font-bold">CFG <span className=" text-red-700 font-bold">Motors</span> Tanzania</h1>

            <button className="btn reserve__btn mt-0">
              <Link to="/cars" className=" font-bold text-xl text-blue-800">Buy Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Buy used cars from abroad for as low as Tshs 12,000,000</h4>
            <h1 className="text-light mb-4 font-sans font-bold">CFG <span className=" text-red-700 font-bold">Motors</span> Tanzania</h1>

            <button className="btn reserve__btn mt-0">
              <Link to="/cars" className=" font-bold text-xl text-blue-800">Buy Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
