import React from "react";
import { Link } from "react-router-dom";

import useCart from "../../hooks/useCart";

import styles from "./Header.module.scss";

function Header({ onClickCart }) {
  const { totalPrice } = useCart();

  return (
    <header
      className={[styles.header, "d-flex justify-between align-center"].join(
        " "
      )}
    >
      <Link to="/">
        <div className="d-flex align-center">
          <div>
            <h3>Plant shop</h3>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li>
          <Link to="/orders">
            <i class="bx bxs-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <i class="bx bxs-bookmark"></i>
          </Link>
        </li>

        <li onClick={onClickCart}>
          <i class="bx bxs-shopping-bag mr-2"></i>
          <span>{totalPrice}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
