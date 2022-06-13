import AppContext from "../context";
import React from "react";

function Info({ title, description, imgSrc }) {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cart-empty d-flex flex-column align-center">
      <img src={imgSrc} alt="empty cart" />
      <h2>{title}</h2>
      <p className="mb-10">{description}</p>
      <button className="greenButton" onClick={() => setCartOpened(false)}>
        Return
        <img src="/img/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default Info;
