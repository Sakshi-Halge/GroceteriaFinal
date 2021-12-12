import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./ProductsComponent.css";
import Pagination from "../Pagination/Pagination";

const carturl = "https://groceteriaapi.herokuapp.com/placecart";

const viewcart = "https://groceteriaapi.herokuapp.com/viewcart/";

class ProductsComponentDisplay extends Component {
  constructor(props) {
    super();
    this.state = {
      Indexes: "",
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

  setDataInterval = (findex, lindex) => {
    const indexArray = [];
    for (let i = findex; i < lindex; i++) {
      indexArray.push(i);
    }
    this.setState({ Indexes: indexArray }, () => {});
  };

  renderProducts = () => {
    if (this.props.productList) {
      return this.props.productList.map((item, index) => {
        if (this.state.Indexes.indexOf(index) > -1) {
          let actPrice = ((100 * item.price) / (100 - item.offer)).toFixed(2);
          return (
            <div className="result-box" key={item.id}>
              {item.offer > 0 ? (
                <div className="result-guide">
                  <h3>{item.offer}%</h3>
                </div>
              ) : (
                ""
              )}

              <div className="item-img-pro">
                <img src={item.item_thumb} alt="productimg" />
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
              <div className="shop-btns">
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
        }
      });
    }
  };

  render() {
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
        {this.renderProducts()}
        <Pagination
          dataLen={this.props.productList.length}
          setResIndexes={(findex, lindex) => {
            this.setDataInterval(findex, lindex);
          }}
        />
      </>
    );
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.setDataInterval(0, 6);
  }
}

export default ProductsComponentDisplay;
