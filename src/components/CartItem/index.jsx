import React from "react";
import AppContext from "../../context";

import styles from "./CartItem.module.scss";

function CartItem({ item }) {
  const { onRemoveItem } = React.useContext(AppContext);
  return (
    <div
      className={[styles.cartItem, "d-flex align-center"].join(" ")}
      key={item.id}
    >
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className={styles.cartItemImg}
      ></div>

      <div className="d-flex flex-column">
        <p>{item.title}</p>
        <b>{item.price} pln</b>
      </div>
      <img
        src="/img/btn-remove.svg"
        alt="remove"
        className={styles.removeBtn}
        onClick={() => onRemoveItem(item.id)}
      />
    </div>
  );
}

export default CartItem;
