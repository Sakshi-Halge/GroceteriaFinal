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
        <div className="offer-on-specific-item">
          <Link to={`/products/${8}?catId=${2}`}>
            <img
              src="https://i.ibb.co/YyMt7g7/Tata-Premium.jpg"
              alt="Tata Premium"
            />
          </Link>
          <Link to={`/products/${24}?catId=${5}`}>
            <img
              src="https://i.ibb.co/DtFd9Wh/Colgate-Pantry-Storefront-750x375.png"
              alt="Colate offer"
            />
          </Link>
          <Link to={`/products/${26}?catId=${6}`}>
            <img src="https://i.ibb.co/mT0ZQYW/nivea.jpg" alt="Nivea offer" />
          </Link>
          <Link to={`/products/${1}?catId=${1}`}>
            <img src="https://i.ibb.co/BcSfgTX/Tata-Sampann.jpg" alt="Tata" />
          </Link>
        </div>
      </>
    );
  }
}

export default OfferCategory;
