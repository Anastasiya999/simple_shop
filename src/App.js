import React from "react";
import "./styles/App.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const onAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  React.useEffect(() => {
    fetch("https://62a42f2447e6e400638da88e.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Type to search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, index) => {
            return (
              <Card
                key={index}
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
