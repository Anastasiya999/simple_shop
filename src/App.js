import React from "react";
import "./styles/App.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const sneakers = [
  {
    title: "Nike Blaser Mid Suede",
    price: 100,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Nike Air Max 270",
    price: 120,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Nike Blazer Mid Suede",
    price: 400,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Aka Boku Future Rider",
    price: 500,
    imageUrl: "/img/sneakers/4.jpg",
  },
  {
    title: "Under Armour Curry 8",
    price: 320,
    imageUrl: "/img/sneakers/5.jpg",
  },
  {
    title: "Nike Kyrie 7",
    price: 240,
    imageUrl: "/img/sneakers/6.jpg",
  },
  {
    title: "Jordan Air Jordan 11",
    price: 150,
    imageUrl: "/img/sneakers/7.jpg",
  },
  {
    title: "Nike LeBron XVIII",
    price: 420,
    imageUrl: "/img/sneakers/8.jpg",
  },
  {
    title: "Nike Lebron XVIII Low",
    price: 510,
    imageUrl: "/img/sneakers/9.jpg",
  },
  {
    title: "Nike Kyrie Flytrap IV",
    price: 310,
    imageUrl: "/img/sneakers/10.jpg",
  },
];
function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);

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
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
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
                onClickPlus={() => console.log("adding to cart")}
                onClickFavorite={() => console.log("adding to favorite")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
