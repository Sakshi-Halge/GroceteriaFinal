import React, { Component } from 'react';

const url =
  "https://groceteriaapi.herokuapp.com/product?subId=";

class Discount extends Component {

    setData = (lval,hval) => {
      console.log("subId: ", this.props.subId);
        fetch(`${url}${this.props.subId}&ldisc=${lval}&hdisc=${hval}`)
        .then(res => res.json())
        .then((data) => {
            this.props.setdataByFilter(data);
            this.props.setFilterSearchBox()
        })
    }
    render() { 
        return (
          <div className="discount">
            <h3 onClick={() => {this.setData(1,10)}}> 0% to 10% Off </h3>
            <h3 onClick={() => {this.setData(11,25)}}> 11% to 25% Off </h3>
            <h3 onClick={() => {this.setData(26,35)}}>25% to 35% Off </h3>
            <h3 onClick={() => {this.setData(36,50)}}>35% to 50% Off </h3>
            <h3 onClick={() => {this.setData(51,60)}}>50% to 60% Off </h3>
            <h3 onClick={() => {this.setData(61,70)}}>60% to 70% Off </h3>
          </div>
        );
    }

}
 
export default Discount;