import React, { Component } from "react";
import "./ViewOrdersDisplay.css";

class ViewOrdersDisplay extends Component {
  renderOrder = (productimag,quan) => {
      return (
        <div>
          <div
            className="item-img"
            style={{ backgroundImage: "url(" + productimag + ")" }}
          ></div>
          <span className="menu-name">
            <h4>X {quan}</h4>
          </span>
        </div>
      );
  };

  renderOrderItems = () => {
    if (this.props.orders_list) {
      return this.props.orders_list.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.productName}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>{this.renderOrder(item.productImg, item.quantity)}</td>
            <td>₹{item.amount}</td>
            <td>{item.status}</td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email Id</th>
            <th>Address</th>
            <th>Order Items</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
          {this.renderOrderItems()}
        </table>
      </>
    );
  }
}
export default ViewOrdersDisplay;
