import React from "react";

import AppContext from "../context";

import Card from "../components/Card";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="subheader d-flex align-center justify-between mb-40 pb-10">
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
