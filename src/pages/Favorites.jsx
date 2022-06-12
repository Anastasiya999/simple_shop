import Card from "../components/Card";
function Favorites({}) {
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
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => {
            return (
              <Card
                key={item.imageUrl}
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={onAddToCart}
                onFavorite={onAddToFavorite}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Favorites;
