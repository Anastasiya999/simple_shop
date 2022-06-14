import React from "react";
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onSearchChange,
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
      <div className="subheader d-flex align-center flex-wrap justify-between mb-40 pb-10">
        <h1>All plants</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <i
              className="clear bx bx-message-square-add"
              onClick={() => {
                setSearchValue("");
              }}
            ></i>
          )}
          <input
            onChange={onSearchChange}
            placeholder="Type to search..."
            value={searchValue}
          />
        </div>
      </div>
      <div className="plants d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
