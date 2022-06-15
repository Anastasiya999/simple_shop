import React from "react";
import Card from "../components/Card";
import CardWrapper from "../components/CardWrapper/indes";
import SubHeader from "../components/SubHeader";
import SeachBlock from "../components/SearchBlock";

function Home({ items, onAddToCart, onAddToFavorite, isLoading }) {
  const [searchValue, setSearchValue] = React.useState("");
  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

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
    <div className="p-40">
      <SubHeader title="All plants">
        <SeachBlock
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          setSearchValue={setSearchValue}
        />
      </SubHeader>
      <CardWrapper>{renderItems()}</CardWrapper>
    </div>
  );
}

export default Home;
