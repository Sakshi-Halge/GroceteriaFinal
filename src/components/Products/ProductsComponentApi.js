import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductsComponentDisplay from "./ProductsComponentDisplay";
import Discount from "./filter/Discount";
import ProductPrice from "./filter/ProductPrice";
import SortProduct from "./filter/SortProduct";
import "./ProductsComponent.css";

const url = "https://apigroceteria.herokuapp.com/product?subId=";
const menu_url = "https://apigroceteria.herokuapp.com/sub_category/";

class ProductsComponentApi extends Component {
  constructor(props) {
    super();

    this.state = {
      productList: "",
      main_category_list: "",
      productId: "",
      catId: "",
      main_cat_name: "",
      hasData: true,
    };
  }

  hasDatainList = (val) => {
    this.setState({ hasData: val });
  };

  setFilterSearchBox = () => {
    const filter_search = this.refs.filterSearch;
    const subArrow = this.refs.subArrow;

    filter_search.classList.remove("filter-active");
    subArrow.classList.remove("sub-arrow-active");
  };

  setProductsByFilter = (data) => {
    this.setState({ productList: data });
  };

  getProducts = (id) => {
    fetch(`${url}${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ productList: data }, () => {
          this.setState({ productId: id });
        });
      });
  };

  renderMainMenuList = (menu_list) => {
    if (menu_list) {
      return menu_list.map((item, index) => {
        return (
          <Link
            to={`/products/${item.sub_cat_id}?catId=${item.main_category_id}`}
            key={index}
          >
            <li>
              <h3 key={item.main_category_id}>{item.category}</h3>
            </li>
          </Link>
        );
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="products-section">
          <div className="sub-category" ref="subCategory">
            <h2>Sub Category</h2>
            <i className="fas fa-chevron-down sub-arrow" ref="subArrow"></i>
          </div>
          <div className="filter-search" ref="filterSearch">
            <div className="filter-of">
              <h3 style={{ marginBottom: "20" }}>{this.state.main_cat_name}</h3>
              <ul className="sub-categories">
                {this.renderMainMenuList(this.state.main_category_list)}
              </ul>
            </div>

            <Discount
              subId={this.state.productId}
              setdataByFilter={(data) => {
                this.setProductsByFilter(data);
              }}
              setFilterSearchBox={() => {
                this.setFilterSearchBox();
              }}
              checkData={(value) => {
                this.hasDatainList(value);
              }}
            />

            <ProductPrice
              subId={this.state.productId}
              setdataByFilter={(data) => {
                this.setProductsByFilter(data);
              }}
              setFilterSearchBox={() => {
                this.setFilterSearchBox();
              }}
              checkData={(value) => {
                this.hasDatainList(value);
              }}
            />

            <SortProduct
              subId={this.state.productId}
              setdataByFilter={(data) => {
                this.setProductsByFilter(data);
              }}
              setFilterSearchBox={() => {
                this.setFilterSearchBox();
              }}
              checkData={(value) => {
                this.hasDatainList(value);
              }}
            />
          </div>
          <div className="filter-result">
            <ProductsComponentDisplay
              productList={this.state.productList}
              hasdata={this.state.hasData}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  componentWillReceiveProps(nextProps) {
    const productId = nextProps.match.params.productId;
    this.setState(
      {
        productId: nextProps.match.params.productId,
        catId: nextProps.location.search.split("=")[1],
      },
      () => {
        fetch(`${menu_url}${this.state.catId}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ main_cat_name: data[0].main_category });
            this.setState({ main_category_list: data });
          });
        fetch(`${url}${productId}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ productList: data });
          });
      }
    );
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.setState(
      {
        productId: this.props.match.params.productId,
        catId: this.props.location.search.split("=")[1],
      },
      () => {
        fetch(`${menu_url}${this.state.catId}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ main_cat_name: data[0].main_category });
            this.setState({ main_category_list: data });
          });
        fetch(`${url}${productId}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ productList: data });
          });
      }
    );

    const subCategory = this.refs.subCategory;
    const filter_search = this.refs.filterSearch;
    const subArrow = this.refs.subArrow;

    filter_search.classList.remove("filter-active");
    subArrow.classList.remove("sub-arrow-active");

    subCategory.addEventListener("click", () => {
      filter_search.classList.toggle("filter-active");
      subArrow.classList.toggle("sub-arrow-active");
    });
  }
}

export default ProductsComponentApi;
