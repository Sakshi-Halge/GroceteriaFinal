import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ViewCartsDisplay from './ViewCartsDisplay'
import "./ViewCarts.css";

const filterurl = "https://groceteriaapi.herokuapp.com/viewcart/";
const deleteApi = "https://groceteriaapi.herokuapp.com/deletecart/";

const limit = 4;
let emailid ;

class ViewOrders extends Component {
  constructor(props) {
    super();

    this.state = {
      ordersList: "",
      skip: 0,
      pageCountNub: 0,
    };
  }

  removeCart = (id) => {
    let query = { id: id };
    fetch(`${deleteApi}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(query),
    }).then(() => {
      fetch(`${filterurl}${emailid}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState(
            { pageCountNub: Math.ceil(data.length / limit) },
            () => {
              fetch(
                `${filterurl}${emailid}?skip=${this.state.skip}&limit=${limit}`
              )
                .then((res) => res.json())
                .then((data) => {
                  this.setState({ ordersList: data });
                });
            }
          );
        });
    })
  };

  handlePageChange = ({ selected }) => {
    this.setState({ skip: selected * limit }, () => {
      fetch(`${filterurl}${emailid}?skip=${this.state.skip}&limit=${limit}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ ordersList: data });
        });
    });
  };

  renderContent = () => {
    if (sessionStorage.getItem("userData")) {
      emailid = sessionStorage.getItem("userData").split(",")[1];
      return (
        <>
          <h2 className="orders-text">Your Carts</h2>

          <div className="orders-box">
            <ViewCartsDisplay orders_list={this.state.ordersList}
            removeCart = {(id) => { this.removeCart(id)}} />
            <ReactPaginate
              previousLabel={<span>Prev</span>}
              nextLabel={<span>Next</span>}
              pageCount={this.state.pageCountNub}
              marginPagesDisplayed={2}
              onPageChange={this.handlePageChange}
              containerClassName={"pagination-sec-order"}
              previousLinkClassName={"prevBtn-order"}
              nextLinkClassName={"nextBtn-order"}
              pageClassName={"page-item-order"}
              pageLinkClassName={"page-link-order"}
              activeClassName={"active-order"}
              disabledLinkClassName={"disable-order"}
            />
          </div>
        </>
      );
    } else {
      return (
        <div>
          <h1 className="do-login">Login first to see Carts</h1>
        </div>
      );
    }
  };

  render() {
    return (<>
    <Header />
    {this.renderContent()}
    <Footer />
    </>
    )
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    fetch(`${filterurl}${emailid}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ pageCountNub: Math.ceil(data.length / limit) }, () => {
          fetch(`${filterurl}${emailid}?skip=${this.state.skip}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
              this.setState({ ordersList: data });
            });
        });
      });
  }
}

export default ViewOrders;
