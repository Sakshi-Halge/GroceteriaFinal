import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";

const url = "https://groceteriaapi.herokuapp.com/product?loffer=35&hoffer=40";

const carturl = "https://groceteriaapi.herokuapp.com/placecart";

const viewcart = "https://groceteriaapi.herokuapp.com/viewcart/";

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

class OfferfiftyComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      offerList: "",
    };
  }

  addToCart = (id, name, amount, item_img) => {
    const msgOverlay = document.querySelector(".msg-overlay");
    if (sessionStorage.getItem("userData")) {
      const email = sessionStorage.getItem("userData").split(",")[1];
      fetch(`${viewcart}${email}?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            const myObj = {};
            myObj.id = id;
            myObj.email = email;
            myObj.name = name;
            myObj.amount = amount;
            myObj.item_img = item_img;

            fetch(carturl, {
              method: "POST",
              headers: {
                accept: "application/json",
                "content-type": "application/json",
              },
              body: JSON.stringify(myObj),
            }).then(() => {
              msgOverlay.classList.add("show-overlay");
              const addMsg = document.querySelector(".add-msg");
              addMsg.classList.add("show-msg");
              setTimeout(() => {
                addMsg.classList.remove("show-msg");
                msgOverlay.classList.remove("show-overlay");
              }, 2000);
            });
          } else {
            msgOverlay.classList.add("show-overlay");
            const cartMsg = document.querySelector(".cart-msg");
            cartMsg.classList.add("show-cart");
            setTimeout(() => {
              cartMsg.classList.remove("show-cart");
              msgOverlay.classList.remove("show-overlay");
            }, 2000);
          }
        });
    } else {
      msgOverlay.classList.add("show-overlay");
      const loginMsg = document.querySelector(".login-msg");
      loginMsg.classList.add("show-login");
      setTimeout(() => {
        loginMsg.classList.remove("show-login");
        msgOverlay.classList.remove("show-overlay");
      }, 2000);
    }
  };

  renderOffer = () => {
    if (this.state.offerList) {
      return this.state.offerList.map((item) => {
        let actPrice = ((100 * item.price) / (100 - item.offer)).toFixed(2);
        return (
          <div className="best-price-item" key={item.id}>
            <div className="offer-guide">
              <h3>{item.offer}%</h3>
            </div>
            <div className="item-img-prod">
              <img src={item.item_thumb} alt="productimgs" />
            </div>
            <div className="brand-detail">
              <div className="brand-title">
                <h4>{item.name}</h4>
              </div>
              <div className="pricing-box">
                <div className="product-val">
                  <h4>₹ {item.price}</h4>
                  <h5>
                    M.R.P <del>₹{actPrice}</del>
                  </h5>
                </div>
                <div className="customer-rating">
                  <div className="rating-images">
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="star"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="star"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="star"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="star"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="star"
                    />
                  </div>

                  <h5>{item.rating} customer ratings</h5>
                </div>
                <div className="save-val">
                  <h5>
                    You Save:{" "}
                    <span className="save-val-mrp">
                      ₹{(actPrice - item.price).toFixed(2)} {item.offer}% off
                    </span>{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="shop-btns-offer">
              <Link to={`/details/${item.id}`}>
                <button className="buy-now">Buy Now</button>
              </Link>
              <button
                className="add-cart"
                onClick={() => {
                  this.addToCart(
                    item.id,
                    item.name,
                    item.price,
                    item.item_thumb
                  );
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    const settings = {
      adaptiveHeight: true,
      speed: 500,
      nextArrow: <NextArrowBtn />,
      prevArrow: <PrevArrowBtn />,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1264,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 935,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="msg-overlay"></div>
        <div className="add-msg">
          <h3>Added to cart</h3>
          <img
            src="https://i.ibb.co/7SYFCt3/green-tick-icon-17.png"
            alt="tick"
            className="tick"
          />
        </div>
        <div className="login-msg">
          <h3>Login first to add to cart</h3>
        </div>
        <div className="cart-msg">
          <h3>Item is already added to cart</h3>
        </div>
        <Slider {...settings}>{this.renderOffer()}</Slider>
      </>
    );
  }

  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ offerList: data });
      });
  }
}

export default OfferfiftyComponent;
