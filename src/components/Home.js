import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import Listing from "./Listing/Listing";
import ProductsComponentApi from "./Products/ProductsComponentApi";
import RegisterComp from "./loginRegister/RegisterComp";
import LoginComp from "./loginRegister/LoginComp";
import Details from './Details/Details'
import ViewOrdersApi from "./veiworders/ViewOrdersApi";
import ViewCartsApi from './veiwcarts/ViewCartsApi'

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/listing/:catId" component={Listing} />
        <Route path="/products/:productId" component={ProductsComponentApi} />
        <Route path="/register" component={RegisterComp} />
        <Route path="/viewOrder" component={ViewOrdersApi} />
        <Route path="/viewcart" component={ViewCartsApi} />
        <Route path="/login" component={LoginComp} />
        <Route path="/details/:productId" component={Details} />
      </BrowserRouter>
    </>
  );
};

export default Home;
