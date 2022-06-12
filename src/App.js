import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const onAddToCart = (product) => {
    axios
      .post("https://62a42f2447e6e400638da88e.mockapi.io/cart", product)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  };

  const onRemoveItem = (productId) => {
    axios.delete(
      `https://62a42f2447e6e400638da88e.mockapi.io/cart/${productId}`
    );

    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (product) => {
    axios
      .post("https://62a42f2447e6e400638da88e.mockapi.io/favorites", product)
      .then((res) => setFavorites((prev) => [...prev, res.data]));
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
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              onSearchChange={onSearchChange}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
