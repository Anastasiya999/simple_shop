import React from "react";

import AppContext from "../context";

import Card from "../components/Card";
import SubHeader from "../components/SubHeader";
import CardWrapper from "../components/CardWrapper/indes";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="p-40">
      <SubHeader title="My favorites" />
      <CardWrapper>
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
      </CardWrapper>
    </div>
  );
}

export default Favorites;
