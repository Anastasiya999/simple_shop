import React from "react";

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png"></img>
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Shop with the best sneakers</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg"></img>
          <span>100</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;
