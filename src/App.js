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
];
function App() {
  return (
    <div className="wrapper">
      <Drawer />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Type to search..." />
          </div>
        </div>
        <div className="d-flex">
          {sneakers.map((item, index) => {
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
