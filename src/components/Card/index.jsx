import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isFavorite, setFavorite] = React.useState(favorited);
  const item = { id, parentId: id, title, price, imageUrl };

  const onClickPlus = () => {
    onPlus(item);
  };

  const onClickFavorite = () => {
    onFavorite(item);
    setFavorite((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={210}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {" "}
          {onFavorite && (
            <i
              className={[
                styles.favorite,
                isFavorite ? "bxs-bookmark" : "bx-bookmark",
                "bx",
              ].join(" ")}
              onClick={onClickFavorite}
            ></i>
          )}
          <img height={203} src={imageUrl} alt="plant" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>{price} pln</b>
            </div>

            {onPlus && (
              <i
                className={[
                  isItemAdded(id)
                    ? "bxs-message-square-add"
                    : "bx-message-square-add",
                  "bx",
                ].join(" ")}
                onClick={onClickPlus}
              ></i>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Card;
