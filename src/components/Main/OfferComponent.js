import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";

const NextArrowBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} next-gal`}>
      <i
        className="fas fa-chevron-right"
        style={{ color: "black" }}
        onClick={onClick}
      ></i>
    </div>
  );
};

const PrevArrowBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} prev-gal`}>
      <i
        className="fas fa-chevron-left"
        style={{ color: "black" }}
        onClick={onClick}
      ></i>
    </div>
  );
};

class OfferComponent extends React.Component {
  render() {
    const settings = {
      nextArrow: <NextArrowBtn />,
      prevArrow: <PrevArrowBtn />,
      adaptiveHeight: false,
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Slider {...settings}>
          <div className="offer-item">
            <img
              src="https://i.ibb.co/W0GsLZR/nathalia-rosa-r-WMIbqm-Oxr-Y-unsplash.jpg"
              alt="Everyday Essentials"
            />
            <div className="offer-overlay"></div>

            <div className="offer-info">
              <h1>
                Get upto <span className="offer-num">50% OFF</span> on{" "}
                <span className="offer-on">Cooking Essentials.</span> Grap now
              </h1>
              <Link to={`/products/${5}?catId=${1}`}>
                <button className="shop-now">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="offer-item">
            <img
              src="https://i.ibb.co/Y8PMWMM/daria-volkova-BMn-X7-L9-G5xc-unsplash.jpg"
              alt="Everyday Essentials"
            />
            <div className="offer-overlay"></div>

            <div className="offer-info">
              <h1>
                All you need for your <span className="offer-on">Kitchen</span>{" "}
                are at <span className="offer-num">40% OFF.</span> Go ahead
              </h1>
              <Link to={`/products/${8}?catId=${2}`}>
                <button className="shop-now">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="offer-item">
            <img
              src="https://i.ibb.co/7pnppw9/gil-ribeiro-3h-O8ig-Cybds-unsplash.jpg"
              alt="kitchen Essentials"
            />
            <div className="offer-overlay"></div>

            <div className="offer-info">
              <h1>
                <span className="offer-on">Cleaning Essentials</span> are on
                sale. Get upto <span className="offer-num">20% OFF</span>
              </h1>
              <Link to={`/products/${18}?catId=${4}`}>
                <button className="shop-now">Shop Now</button>
              </Link>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}

export default OfferComponent;
