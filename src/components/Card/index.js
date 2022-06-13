import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import { useEffect, useState, useContext } from "react";
function Card({
  id,
  parentId,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);

  const [isFavorite, setFavorite] = useState(favorited);
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
            <img
              src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
              alt="unliked"
              className={styles.favorite}
              onClick={onClickFavorite}
            />
          )}
          <img width={133} height={112} src={imageUrl} />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>{price} pln</b>
            </div>

            {onPlus && (
              <img
                style={{ cursor: "pointer" }}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"
                }
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Card;
