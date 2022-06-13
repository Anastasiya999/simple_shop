import React from "react";
import AppContext from "../context";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

function Header({ onClickCart }) {
  // const { cartItems } = React.useContext(AppContext);
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"></img>
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Shop with the best sneakers</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li
          className="mr-30"
          onClick={onClickCart}
          style={{ cursor: "pointer" }}
        >
          <img width={18} height={18} src="/img/cart.svg" alt="cart"></img>
          <span>{totalPrice}</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="heart"></img>
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;
