import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import AppContext from "./context";

import "./styles/App.scss";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const onAddToCart = async (product) => {
    try {
      const findItem = cartItems.find((item) => {
        return Number(item.parentId) == Number(product.parentId);
      });
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) != Number(product.id))
        );

        axios.delete(
          `https://62a42f2447e6e400638da88e.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://62a42f2447e6e400638da88e.mockapi.io/cart",
          product
        );
        setCartItems((prev) => [...prev, data]);
        setIsOrderComplete(false);
      }
    } catch (error) {
      console.log(error.message);
      alert("Failure to add item to cart");
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://62a42f2447e6e400638da88e.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Error while deleting from cart");
      console.error(error);
    }
  };

  const onAddToFavorite = async (product) => {
    try {
      if (favorites.find((item) => item.id == product.id)) {
        axios.delete(
          `https://62a42f2447e6e400638da88e.mockapi.io/favorites/${product.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== product.id));
      } else {
        const { data } = await axios.post(
          "https://62a42f2447e6e400638da88e.mockapi.io/favorites",
          product
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(id) == Number(obj.parentId));
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsRes, cartRes, favoritesRes] = await Promise.all([
          axios.get("https://62a42f2447e6e400638da88e.mockapi.io/items"),
          axios.get("https://62a42f2447e6e400638da88e.mockapi.io/cart"),
          axios.get("https://62a42f2447e6e400638da88e.mockapi.io/favorites"),
        ]);

        setIsLoading(false);
        setItems(itemsRes.data);
        setCartItems(cartRes.data);
        setFavorites(favoritesRes.data);
      } catch (error) {
        alert("Failure to load data");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isOrderComplete,
        setIsOrderComplete,
        onRemoveItem,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
      <>
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />
        <div className="wrapper">
          <Routes>
            <Route
              path="/simple-shop"
              exact
              element={
                <Home
                  items={items}
                  onAddToCart={onAddToCart}
                  onAddToFavorite={onAddToFavorite}
                  cartItems={cartItems}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="simple-shop/favorites" element={<Favorites />} />
            <Route path="simple-shop/orders" element={<Orders />} />
          </Routes>
        </div>
      </>
    </AppContext.Provider>
  );
}

export default App;
