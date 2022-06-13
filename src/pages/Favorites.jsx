import Card from "../components/Card";
import AppContext from "../context";
import React from "react";
function Favorites({ onFavorite }) {
  const state = React.useContext(AppContext);
  console.log(state);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {state.favorites.map((item, index) => {
          return (
            <Card
              key={item.imageUrl}
              onFavorite={onFavorite}
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
