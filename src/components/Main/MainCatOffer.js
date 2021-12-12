import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./Main.css";

class OfferCategory extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div className="offer-on-groceries">
          <div className="offer-on-groceries-text">
            <h2>Offer on Groceries</h2>
          </div>
          <div className="offer-on-groceries-info">
            <Link to={`/products/${7}?catId=${2}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/04_Biscuits__Snacks_400x400.jpg"
                alt="biscuits-snacks"
              />
            </Link>
            <Link to={`/products/${1}?catId=${1}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/05_Pulses_400x400.jpg"
                alt="pulses"
              />
            </Link>
            <Link to={`/products/${4}?catId=${1}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/06_Spices__Masala_400x400.jpg"
                alt="spices & masala"
              />
            </Link>
            <Link to={`/products/${8}?catId=${2}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/07Tea__Coffee_400x400.jpg"
                alt="tea & coffee"
              />
            </Link>
            <Link to={`/products/${11}?catId=${3}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/08_Breakfast_Essentials_400x400.jpg"
                alt="breakfast-essentials"
              />
            </Link>
            <Link to={`/products/${13}?catId=${3}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/09_Dry_fruits__Nuts_400x400.jpg"
                alt="dryfruits-nuts"
              />
            </Link>
            <Link to={`/products/${2}?catId=${1}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/10_Atta__Flour_400x400.jpg"
                alt="atta-flour"
              />
            </Link>
            <Link to={`/products/${14}?catId=${3}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/11_Noodles__More_400x400.jpg"
                alt="noodles-more"
              />
            </Link>
          </div>
        </div>

        <div className="offer-on-hygine-skin">
          <div className="offer-on-hygine-skin-text">
            <h2>Offer on home & hygiene essentials</h2>
          </div>
          <div className="offer-on-hygine-skin-info">
            <Link to={`/products/${16}?catId=${4}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/storefront/Laundry_Essentials_400x400.jpg"
                alt="laundry-essentials"
              />
            </Link>
            <Link to={`/products/${17}?catId=${4}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/storefront/Dishwash__cleaners_400x400.jpg"
                alt="dishwash-cleaners"
              />
            </Link>
            <Link to={`/products/${19}?catId=${4}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/storefront/Cleaning_Supplies_400x400.jpg"
                alt="cleaning-supplies"
              />
            </Link>
            <Link to={`/products/${18}?catId=${4}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/storefront/Hand_Wash__Sanitizers_400x400__copy.jpg"
                alt="handwash-sanitizer"
              />
            </Link>
          </div>
        </div>

        <div className="offer-on-hygine-skin">
          <div className="offer-on-hygine-skin-text">
            <h2>Offers on Beauty</h2>
          </div>
          <div className="offer-on-hygine-skin-info">
            <Link to={`/products/${26}?catId=${6}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pantry/SF/Tile/01_Body_lotion_400x400.jpg"
                alt="body-lotion"
              />
            </Link>
            <Link to={`/products/${27}?catId=${6}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pantry/SF/Tile/02_Face_creams_400x400.jpg"
                alt="face-creams"
              />
            </Link>
            <Link to={`/products/${22}?catId=${5}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pantry/SF/Tile/03_Soap_400x400.jpg"
                alt="soap"
              />
            </Link>
            <Link to={`/products/${21}?catId=${5}`}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pantry/SF/Tile/04_Shampoo_400x400.jpg"
                alt="shampoo"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default OfferCategory;
