import React from "react";
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onSearchChange,
  cartItems,
  isLoading,
}) {
  function renderItems() {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => {
      return (
        <Card
          key={index}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite={onAddToFavorite}
          loading={isLoading}
          {...item}
        />
      );
    });
  }
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              src="img/btn-remove.svg"
              className="clear"
              alt="clear"
              onClick={() => {
                setSearchValue("");
              }}
            />
          )}
          <input
            onChange={onSearchChange}
            placeholder="Type to search..."
            value={searchValue}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
