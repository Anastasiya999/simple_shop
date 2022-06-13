import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import axios from "axios";
import Orders from "./pages/Orders";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const onAddToCart = (product) => {
    try {
      if (
        cartItems.find((item) => {
          return Number(item.id) == Number(product.id);
        })
      ) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) != Number(product.id))
        );
        axios.delete(
          `https://62a42f2447e6e400638da88e.mockapi.io/cart/${product.id}`
        );
      } else {
        setCartItems((prev) => [...prev, product]);
        setIsOrderComplete(false);
      }
      axios.post("https://62a42f2447e6e400638da88e.mockapi.io/cart", product);
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

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
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
    return cartItems.some((obj) => Number(id) == Number(obj.id));
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
      <div className="wrapper">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

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
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
