import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom'
import "./ViewCartsDisplay.css";

class ViewOrdersDisplay extends Component {
  renderOrderItems = () => {
    if (this.props.orders_list) {
      return this.props.orders_list.map((item, index) => {
        return (
          <div key={index} className="outer-cart">
            <div className="cart-img">
              <img src={item.item_img} alt="productimg" />
            </div>
            <div className="item-desc">
              <h3>{item.name}</h3>
              <h2>₹{item.amount}</h2>
              <Link to={`/details/${item.id}`}>
                <button className="buy-now-cart">Buy Now</button>
              </Link>

              <button
                className="buy-now-cart"
                onClick={() => {
                  this.props.removeCart(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <>
        <div className="cart-box">{this.renderOrderItems()}</div>
      </>
    );
  }
}
export default withRouter(ViewOrdersDisplay);
