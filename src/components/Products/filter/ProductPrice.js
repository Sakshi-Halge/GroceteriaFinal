import React, { Component } from "react";

const url = "https://groceteriaapi.herokuapp.com/product?subId=";

class ProductPrice extends Component {
  setData = (lval, hval) => {
    fetch(`${url}${this.props.subId}&lprice=${lval}&hprice=${hval}`)
      .then((res) => res.json())
      .then((data) => {
        this.props.setdataByFilter(data);
            this.props.setFilterSearchBox();

      });
  };
  render() {
    return (
      <div className="cost-box">
        <div
          className="cost"
          onClick={() => {
            this.setData(1, 100);
          }}
        >
          <input
            type="radio"
            name="cost-for-item"
            value="less-than-100"
            id="less-than-100"
          />
          <label htmlFor="less-than-100">Less than ₹ 100</label>
        </div>

        <div
          className="cost"
          onClick={() => {
            this.setData(100, 200);
          }}
        >
          <input type="radio" name="cost-for-item" value="to-200" id="to-200" />
          <label htmlFor="to-200">₹ 100 to ₹ 200</label>
        </div>

        <div
          className="cost"
          onClick={() => {
            this.setData(200, 300);
          }}
        >
          <input type="radio" name="cost-for-item" value="to-300" id="to-300" />
          <label htmlFor="to-300">₹ 200 to ₹ 300</label>
        </div>

        <div
          className="cost"
          onClick={() => {
            this.setData(300, 400);
          }}
        >
          <input type="radio" name="cost-for-item" value="to-400" id="to-400" />
          <label htmlFor="to-400">₹ 300 to ₹ 400</label>
        </div>

        <div
          className="cost"
          onClick={() => {
            this.setData(400, 500);
          }}
        >
          <input type="radio" name="cost-for-item" value="to-500" id="to-500" />
          <label htmlFor="to-500">₹ 400 to ₹ 500</label>
        </div>

        <div
          className="cost"
          onClick={() => {
            this.setData(500, 10000000000);
          }}
        >
          <input
            type="radio"
            name="cost-for-item"
            value="above-500"
            id="above-500"
          />
          <label htmlFor="above-500">₹ 500+</label>
        </div>
      </div>
    );
  }
}

export default ProductPrice;
