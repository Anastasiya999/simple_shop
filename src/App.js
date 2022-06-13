import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import axios from "axios";

function App() {
  console.log(AppContext);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

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
        axios.post("https://62a42f2447e6e400638da88e.mockapi.io/cart", product);
        setCartItems((prev) => [...prev, product]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`);
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

  React.useEffect(() => {
    async function fetchData() {
      const itemsRes = await axios.get(
        "https://62a42f2447e6e400638da88e.mockapi.io/items"
      );
      const cartRes = await axios.get(
        "https://62a42f2447e6e400638da88e.mockapi.io/cart"
      );
      const favoritesRes = await axios.get(
        "https://62a42f2447e6e400638da88e.mockapi.io/favorites"
      );
      setIsLoading(false);
      setItems(itemsRes.data);
      setCartItems(cartRes.data);
      setFavorites(favoritesRes.data);
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ items, cartItems, favorites }}>
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
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites onFavorite={onAddToFavorite} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
