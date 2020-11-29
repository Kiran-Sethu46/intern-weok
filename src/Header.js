import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="header-logo"
          src="https://img1.pnghut.com/14/16/13/u5faKrUaWz/united-kingdom-online-shopping-logo-sales-customer-service.jpg"
          alt=""
        />
      </div>
      <div className="header-right">
        <div className="header-info">
          <h4>Hello, Welcome Back to college Portal</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
