import AppContext from "../../context";
import React from "react";

import styles from "./Info.module.scss";
import ActionButton from "../ActionButton";

function Info({ title, description, imgSrc }) {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={[styles.info, "d-flex flex-column align-center"].join(" ")}>
      <img src={imgSrc} alt="empty cart" />
      <h2 className={styles.title}>{title}</h2>
      <p className="mb-10">{description}</p>

      <ActionButton
        title="Return"
        className={styles.actionBtn}
        onClick={() => setCartOpened(false)}
      />
    </div>
  );
}

export default Info;
