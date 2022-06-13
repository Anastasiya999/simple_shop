import Card from "../components/Card";
import AppContext from "../context";
import React from "react";
function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => {
          return (
            <Card
              key={item.imageUrl}
              onFavorite={onAddToFavorite}
              favorited={true}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
