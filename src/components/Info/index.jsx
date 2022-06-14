import AppContext from "../../context";
import React from "react";

import styles from "./Info.module.scss";

function Info({ title, description, imgSrc }) {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div
      className={[styles.cartEmpty, "d-flex flex-column align-center"].join(
        " "
      )}
    >
      <img src={imgSrc} alt="empty cart" />
      <h2>{title}</h2>
      <p className="mb-10">{description}</p>

      <button
        className={[styles.greenButton, "greenButton"].join(" ")}
        onClick={() => setCartOpened(false)}
      >
        Return
        <img src="/img/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default Info;
