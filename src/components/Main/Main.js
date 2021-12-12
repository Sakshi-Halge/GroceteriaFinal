import React, { Component } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import OfferComponent from "./OfferComponent";
import OfferfiftyComponent from "./OfferfiftyComponent";
import OfferNintyNineComponent from "./OfferNintyNinePrice";
import OfferCategory from "./OfferCategory";
import OfferTwentyComponent from './OfferTwentyComponent'
import MainCatOffer from './MainCatOffer'
import "./Main.css";


class Main extends Component {
  constructor(props) {
    super();
    
  }

  render() {
    return (
      <>
      <Header />
        <main>
          <div className="offer-div">
            <OfferComponent />
          </div>
          <div className="how-it-works">
            <div className="how-it-works-text">
              <h1>How it works?</h1>
            </div>
            <div className="how-it-works-content">
              <div className="location-div">
                <div className="location-div-content">
                  <div className="location-img">
                    <img
                      src="https://i.ibb.co/R3DWd0d/map-marker.png"
                      alt="locationimg"
                    />
                  </div>
                  <div className="location-text">
                    <h2>Create an account and fill in the address</h2>
                  </div>
                </div>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/more-than.png"
                  className="next-on" alt="nextimg"
                />
              </div>
              <div className="select-div">
                <div className="select-div-content">
                  <div className="select-product-img">
                    <img
                      src="https://i.ibb.co/7KCq9zc/shopping-cart-how.png"
                      alt="shoppingcart"
                    />
                  </div>
                  <div className="select-product-text">
                    <h2>Select the product you want to buy</h2>
                  </div>
                </div>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/more-than.png"
                  className="next-on" alt="nexton"
                />
                {/* <i class="fas fa-chevron-right next-on"></i> */}
              </div>
              <div className="delivery-div">
                <div className="delivery-img">
                  <img
                    src="https://i.ibb.co/wyF9rM9/delivery-truck.png"
                    alt="deliverytruck"
                  />
                </div>
                <div className="delivery-text">
                  <h2>We will deliver your shopping to your door</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="offer1 best-prices-on-top-brands">
            <div className="best-prices-text">
              <h2>Best Prices On Top Brands | Upto 40% OFF</h2>
            </div>
            <div className="deal-1 best-prices-box">
              <OfferfiftyComponent />
            </div>
          </div>
          <div className="offer-2 best-prices-on-top-brands">
            <div className="best-prices-text">
              <h2>Deals under ₹99/- | Grab now</h2>
            </div>
            <div className="deal-2 best-prices-box">
              <OfferNintyNineComponent />
            </div>
          </div>
          <OfferCategory />
          <div className="offer-3 best-prices-on-top-brands">
            <div className="best-prices-text">
              <h2>Don't Forget To Add | Upto 20% off</h2>
            </div>
            <div className="deal-3 best-prices-box">
              <OfferTwentyComponent />
            </div>
          </div>
          <MainCatOffer />
        </main>
        <Footer />
      </>
    );
  }

  
}

export default Main;
