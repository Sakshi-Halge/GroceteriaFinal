import React from "react";
import './Footer.css'

const Footer = () => {

  const toTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className="footer">
      <div className="back-to-top" onClick={toTop}>
        <h3>Back to top</h3>
      </div>
      <div className="footer-content">
        <div className="get-to-know-us">
          <h3 style={{marginBottom : '15',fontWeight : '600',fonstSize: '22'}}>Get to Know Us</h3>
          <h3>About Us</h3>
          <h3>Careers</h3>
          <h3>Press Release</h3>
          <h3>Groceteria Cares</h3>
          <h3>Gift a Smile</h3>
        </div>
        <div className="connect-with-us">
          <h3 style={{marginBottom : '15',fontWeight : '600',fonstSize: '22'}}>Connect With Us</h3>
          <h3>Facebook</h3>
          <h3>Twitter</h3>
          <h3>Instagram</h3>
        </div>
        <div className="make-money-with-us">
          <h3 style={{marginBottom : '15',fontWeight : '600',fonstSize: '22'}}>Make Money With Us</h3>
          <h3>Sell on Groceteria</h3>
          <h3>Sell Under Groceteria Accelerator</h3>
          <h3>Groceteria Global Sedlling</h3>
          <h3>Become a Affiliate</h3>
          <h3>Fullfillment by Groceteria</h3>
          <h3>Advertise Your Product</h3>
        </div>
        <div className="let-us-help-you">
          <h3 style={{marginBottom : '15',fontWeight : '600',fonstSize: '22'}}>Let Us Help You</h3>
          <h3>Covid-19 and Groceteria</h3>
          <h3>Your Account</h3>
          <h3>Return & Centre</h3>
          <h3>100% Purchase Protection</h3>
          <h3>Help</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
