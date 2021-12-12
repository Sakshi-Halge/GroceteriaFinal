import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Listing.css";

const url = "https://groceteriaapi.herokuapp.com/sub_category/";

class Listing extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: "",
      catId: "",
    };
  }

  renderCategory = () => {
    if (this.state.categoryList) {
      return this.state.categoryList.map((item) => {
        return (
          <Link to={`/products/${item.sub_cat_id}?catId=${this.state.catId}`}>
            <div
              key={item.sub_cat_id}
              className="category-box"
              style={{ backgroundImage: "url(" + item.image + ")" }}
            >
              <div className="category-name-box">
                <h2 className="category-name">{item.category}</h2>
              </div>
            </div>
          </Link>
        );
      });
    }
  };

  render() {
    return (
      <>
      <Header />
        <div className="listing-box">
          <h1 className="listing-title">Shop by Category</h1>
          <div className="listing-items">{this.renderCategory()}</div>
        </div>
      <Footer />
      </>
    );
  }

  componentDidMount() {
    const categoryId = this.props.match.params.catId;
    this.setState({ catId: categoryId }, () => {
      fetch(`${url}${categoryId}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ categoryList: data });
          console.log(data)
        });
    });
  }
}

export default Listing;
