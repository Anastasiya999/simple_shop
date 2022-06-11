import styles from "./Card.module.scss";
import { useState } from "react";
function Card({ title, price, imageUrl, onClickFavorite }) {
  const [isAdded, setAdded] = useState(false);

  const onClickPlus = () => {
    setAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <img
        src="/img/unliked.svg"
        alt="unliked"
        className={styles.favorite}
        onClick={onClickFavorite}
      />

      <img width={133} height={112} src={imageUrl} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price</span>
          <b>{price} pln</b>
        </div>

        <img
          style={{ cursor: "pointer" }}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;
