import React from "react";
import "./index.scss";
import CartIcon from "../CartIcon";

const items = ["item1", "item2", "item3"];

const NavBar = () => (
  <div className="nav-bar">
    <div className="item-container">
      {items.map((item, idx) => (
        <button key={idx}>{item}</button>
      ))}
    </div>
    <div>
      <CartIcon />
    </div>
  </div>
);

export default NavBar;
