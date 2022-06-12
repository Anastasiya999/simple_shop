import styles from "./Card.module.scss";
import { useState } from "react";
function Card({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
}) {
  const [isAdded, setAdded] = useState(added);
  const [isFavorite, setFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setAdded((prev) => !prev);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setFavorite((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <img
        src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
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
