import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GetInfo from "./GetInfo";
import "./Details.css";

const url = "https://apigroceteria.herokuapp.com/products?id=";

class Details extends Component {
  constructor(props) {
    super();

    this.state = {
      totalPrice: 0,
      payClassName: "",
      productInfo: "",
      quantity: 1,
      price : ''
    };
  }

  setprice = () => {
    this.setState({ totalPrice: (this.state.price * this.state.quantity) });
  }

  decreaseQuan = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 },() => {
        this.setprice();
      });
    }
  };

  increaseQuan = () => {
      this.setState({ quantity: this.state.quantity + 1 }, () => {
        this.setprice();
      });
  };

  renderPreviwImages = (data) => {
    return data.map((image, index) => {
      return (
        <img
          ref="imagePreviewimg"
          key={index}
          src={image}
          alt={`prevImage ${index}`}
        />
      );
    });
  };

  renderProductInfo = () => {
    if (this.state.productInfo) {
      let actPrice = (
        (100 * this.state.productInfo.price) /
        (100 - this.state.productInfo.offer)
      ).toFixed(2);

      return (
        <>
          <div className="main-product-box">
            <section className="product-box">
              <div className="product-gallery">
                <div className="image-preview">
                  {this.renderPreviwImages(
                    this.state.productInfo.image_gallery
                  )}
                </div>

                <div className="full-image">
                  <img
                    src={this.state.productInfo.item_thumb}
                    alt="productimg"
                  />
                  <p style={{ marginBottom: "20" }}>
                    Click on image to zoom in
                  </p>
                </div>
              </div>
              <div className="product-description">
                <h1 className="product-name">{this.state.productInfo.name}</h1>
                <div className="rating-section">
                  <div className="star-section">
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="productimg"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="productimg"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="productimg"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="productimg"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/star--v1.png"
                      className="star-icon"
                      alt="productimg"
                    />
                  </div>
                  <h5>{this.state.productInfo.rating} customer ratings</h5>
                </div>
                <div className="mrp">
                  <h5 className="mrp-text">M.R.P: </h5>
                  <h5 className="mrp-val">
                    <del>₹{actPrice}</del>
                  </h5>
                </div>
                <div className="price">
                  <h5 className="price-text">Price: </h5>
                  <h4 className="price-val">{this.state.totalPrice}</h4>
                  <div className="quantity-box">
                    <button
                      className="quantity-btn"
                      onClick={this.decreaseQuan}
                    >
                      <img
                        src="https://media.istockphoto.com/vectors/black-minus-sign-negative-symbol-vector-id688548090?k=20&m=688548090&s=170667a&w=0&h=xVmB2eSVy3nX8zpGOxzo9loLO1FMglDGUx8vX0arlI0="
                        alt="plus"
                      />
                    </button>
                    <h4>{this.state.quantity}</h4>
                    <button
                      className="quantity-btn"
                      onClick={this.increaseQuan}
                    >
                      <img
                        src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0="
                        alt="decrease"
                      />
                    </button>
                  </div>
                </div>
                <div className="you-save">
                  <h5 className="you-save-text">You save: </h5>
                  <div className="val-box">
                    <h4 className="you-save-val">
                      {" "}
                      ₹{(actPrice - this.state.productInfo.price).toFixed(
                        2
                      )}{" "}
                      {this.state.productInfo.offer}% off
                    </h4>
                    <h5 className="taxes">Inclusive of all taxes</h5>
                  </div>
                </div>
                <div className="guaranteed-delivery">
                  <h3>
                    Want guaranteed delivery by Friday, Oct 29 ?{" "}
                    <span className="order-within"> Order within </span>
                    <span className="time"> 21 hrs and 50 mins</span>
                  </h3>
                </div>
                <div className="details">
                  <div className="details-box">
                    <img
                      src="https://i.ibb.co/tMdddGf/icon-returns-struck-CB484058890.png"
                      alt="deliveryimg"
                    />
                    <h4>Not Returnable</h4>
                  </div>
                  <div className="details-box">
                    <img
                      src="https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png"
                      alt="deliveryimg"
                    />
                    <h4>Groceteria Delivered </h4>
                  </div>
                  <div className="details-box">
                    <img
                      src="https://i.ibb.co/YWpGSBD/icon-warranty-CB485935626.png"
                      alt="deliveryimg"
                    />
                    <h4>7 Month Warranty </h4>
                  </div>
                  <div className="details-box">
                    <img
                      src="https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png"
                      alt="deliveryimg"
                    />
                    <h4>No-Contact Delivery </h4>
                  </div>
                </div>
                <h3 className="free-delivery-details">
                  Free delivery above <span className="fprice-val">₹799</span> |
                  Minimum order value of{" "}
                  <span className="fprice-val">₹200</span>
                </h3>
                <h3 className="best-before">
                  Best Before: <span className="best-time"> 11 Apr 2022</span>
                </h3>
                <h1 className="stock">In Stock. </h1>
                <div className="detail-btns">
                  <button
                    onClick={() => {
                      this.paynow("show-pay");
                    }}
                    className="detail-buy-btn"
                  >
                    Buy Now
                  </button>
                  <button className="detail-cart">Add to cart</button>
                </div>
              </div>
            </section>
          </div>

          <i className="fas fa-times cross"></i>
          <div className="product-img-overlay"></div>
          <div className="product-zoom-img">
            <img src={this.state.productInfo.item_thumb} alt="" />
          </div>
        </>
      );
    }
  };

  paynow = (pclassname) => {
    this.setState({ payClassName: pclassname });
  };

  render() {
    return (
      <>
      <Header />
        {this.renderProductInfo()}

        <GetInfo
          payClassName={this.state.payClassName}
          paynow={(pclassname) => {
            this.paynow(pclassname);
          }}
          productName={
            this.state.productInfo ? this.state.productInfo.name : ""
          }
          totalPrice={this.state.totalPrice}
          quantity={this.state.quantity}
          productImg={
            this.state.productInfo ? this.state.productInfo.item_thumb : ""
          }
          id={this.state.productInfo ? this.state.productInfo.id : ""}
        />
        <Footer />
      </>
    );
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    fetch(`${url}${productId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ productInfo: data[0] }, () => {
          this.setState({ totalPrice: this.state.productInfo.price, price :this.state.productInfo.price});
        });
      });
  }

  componentDidUpdate() {
    // window.scrollTo(0, 0);

    const prev_images = document.querySelectorAll(".image-preview img");
    const full_img = document.querySelector(".full-image img");

    prev_images.forEach((image, index) => {
      image.addEventListener("mouseover", () => {
        full_img.src = image.src;
        image.classList.add("img-active");

        for (let i = 0; i < prev_images.length; i++) {
          if (i !== index) {
            prev_images[i].classList.remove("img-active");
          }
        }
      });
    });

    const productImg = document.querySelector(".full-image img");
    const productOverlay = document.querySelector(".product-img-overlay");
    const productZoomblock = document.querySelector(".product-zoom-img");
    const productZoomImg = document.querySelector(".product-zoom-img img");
    const crossProductImg = document.querySelector(".cross");

    productImg.addEventListener("click", () => {
      productOverlay.style.display = "block";
      productZoomblock.style.display = "block";
      crossProductImg.style.display = "block";
      crossProductImg.style.visibility = "visible";

      productZoomImg.src = productImg.src;
    });

    crossProductImg.addEventListener("click", () => {
      productOverlay.style.display = "none";
      productZoomblock.style.display = "none";
      crossProductImg.style.display = "none";
      crossProductImg.style.visibility = "hidden";
    });
  }
}


export default Details;
