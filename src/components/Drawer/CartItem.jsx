import React from "react";
import AppContext from "../../context";

import styles from "./Drawer.module.scss";

function CartItem({ item }) {
  const { onRemoveItem } = React.useContext(AppContext);
  return (
    <div
      className={[styles.cartItem, "d-flex align-center mb-20"].join(" ")}
      key={item.id}
    >
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className={styles.cartItemImg}
      ></div>

      <div className="mr-20">
        <p className="mb-5">{item.title}</p>
        <b>{item.price} pln</b>
      </div>
      <img
        src="/img/btn-remove.svg"
        alt="remove"
        className="remove-btn"
        onClick={() => onRemoveItem(item.id)}
      />
    </div>
  );
}

export default CartItem;
