import React, { Component } from "react";

const url = "https://groceteriaapi.herokuapp.com/sortProducts/";

class SortProduct extends Component {
  setData = (val) => {
    fetch(`${url}${this.props.subId}?sortKey=${val}`)
      .then((res) => res.json())
      .then((data) => {
        this.props.setdataByFilter(data);
            this.props.setFilterSearchBox();

      });
  };
  render() {
    return (
      <div className="sort">
        <div className="sort-text">Sort</div>
        <div
          className="sort-radio"
          onClick={() => {
            this.setData(1);
          }}
        >
          <input
            type="radio"
            name="price"
            value="low-to-high"
            id="low-to-high"
          />
          <label htmlFor="low-to-high">Price low to high</label>
        </div>
        <div
          className="sort-radio"
          onClick={() => {
            this.setData(-1);
          }}
        >
          <input
            type="radio"
            name="price"
            value="high-to-low"
            id="high-to-low"
          />
          <label htmlFor="high-to-low">Price high to low</label>
        </div>
      </div>
    );
  }
}

export default SortProduct;
