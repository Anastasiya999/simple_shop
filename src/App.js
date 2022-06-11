import React from "react";
import "./styles/App.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const onAddToCart = (product) => {
    axios.post("https://62a42f2447e6e400638da88e.mockapi.io/cart", product);
    setCartItems((prev) => [...prev, product]);
  };

  const onRemoveItem = (productId) => {
    axios.delete(
      `https://62a42f2447e6e400638da88e.mockapi.io/cart/${productId}`
    );
    setCartItems((prev) => prev.filter((item) => item.id != productId));
  };

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get("https://62a42f2447e6e400638da88e.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://62a42f2447e6e400638da88e.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
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
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onPlus={onAddToCart}
                  onFavorite={() => console.log("adding to favorite")}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
