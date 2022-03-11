import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const url = "https://apigroceteria.herokuapp.com/main_category";
const loginurl = "https://loginapidev.herokuapp.com/api/auth/userInfo";
const carturl = "https://apigroceteria.herokuapp.com/viewcart/";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      main_category_list: "",
      isSticky: false,
      userData: "",
      cartCount: 0,
    };
  }

  renderMainMenuList = (menu_list) => {
    if (menu_list) {
      return menu_list.map((item) => {
        return (
          <Link to={`/listing/${item.main_cat_id}`}>
            <h2 key={item.main_cat_id}>{item.category}</h2>
          </Link>
        );
      });
    }
  };

  handleLogout = () => {
    this.setState({ userData: "" });
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("userData");
  };

  conditionalLogin = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      let outputArray = [data.name, data.email, data.phone, data.role];
      sessionStorage.setItem("userData", outputArray);
      return (
        <>
          <h2 className="hello-signin">Hi {this.state.userData.name}</h2>
          <h2 className="account-list" onClick={this.handleLogout}>
            Logout
          </h2>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <h2 className="hello-signin">Login</h2>
          </Link>
          <Link to="/register">
            <h2 className="account-list">Register</h2>
          </Link>
        </>
      );
    }
  };

  render() {
    return (
      <div className="header">
        <div className="upper-header">
          <Link to="/">
            <div className="logo">
              <img
                src="https://i.ibb.co/vkpyH8M/shopping-cart.png"
                alt="shopping-cart"
              />
              <h1 className="logo-text">Groceteria</h1>
            </div>
          </Link>

          <div className="search-bar">
            <input type="text" />
            <button className="search-btn">
              <img src="https://i.ibb.co/GCYfxBP/loupe.png" alt="loupe" />
            </button>
          </div>
          <div className="upper-header-menu" ref="upperHeaderMenu">
            <div className="region-section">
              <img src="https://i.ibb.co/tJrgCfZ/flag.png" alt="flag" />
            </div>
            <div className="signin-section">{this.conditionalLogin()}</div>
            <div className="return-orders">
              <Link to="/viewOrder">
                <h2 className="return-text">Returns</h2>
                <h2 className="order-text">& Orders</h2>
              </Link>
            </div>

            <div className="cart-section">
              <Link to="/viewcart">
                <h2 className="number-of-cart">{this.state.cartCount}</h2>
                <h2 className="cart-text">Cart</h2>
              </Link>
            </div>
          </div>
          <div className="burger-menu" ref="burgermenu">
            <div className="line1" ref="line1"></div>
            <div className="line2" ref="line2"></div>
            <div className="line3" ref="line3"></div>
          </div>
        </div>
        <div
          className={`lower-header ${this.state.isSticky ? "sticky" : ""}`}
          ref="lowerHeader"
        >
          {this.renderMainMenuList(this.state.main_category_list)}
          <h2>Offers</h2>
          <h2>Past Purchase</h2>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const upper_header = this.refs.upperHeaderMenu;
    const lower_header = this.refs.lowerHeader;
    upper_header.classList.remove("header-menu-active");
    lower_header.classList.remove("header-menu-active");

    const show_header = () => {
      const burger_menu = this.refs.burgermenu;
      const upper_header = this.refs.upperHeaderMenu;
      const lower_header = this.refs.lowerHeader;

      const line1 = this.refs.line1;
      const line2 = this.refs.line2;
      const line3 = this.refs.line3;

      burger_menu.addEventListener("click", () => {
        upper_header.classList.toggle("header-menu-active");
        lower_header.classList.toggle("header-menu-active");

        line1.classList.toggle("line1-active");
        line2.classList.toggle("line2-active");
        line3.classList.toggle("line3-active");
      });
    };

    show_header();

    window.addEventListener("scroll", () => {
        const lower_header = document.querySelector('.lower-header');
        if (window.innerWidth < 1180) {
          this.setState({ isSticky: false });
        } else {
          const stickyPos = lower_header.offsetTop;
          if (window.scrollY > stickyPos) {
            this.setState({ isSticky: true });
          } else {
            this.setState({ isSticky: false });
          }
        }
      
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ main_category_list: data });
      });

    fetch(loginurl, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });

    if (sessionStorage.getItem("userData")) {
      const email = sessionStorage.getItem("userData").split(",")[1];
      fetch(`${carturl}${email}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ cartCount: data.length });
        });
    }
  }
}

export default Header;
