import Card from "../components/Card";
import AppContext from "../context";
import React from "react";
import axios from "axios";
function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchOrders() {
      const { data } = await axios.get(
        "https://62a42f2447e6e400638da88e.mockapi.io/orders"
      );
      setIsLoading(false);
      setOrders(data.reduce((prev, item) => [...prev, ...item.items], []));
    }
    fetchOrders();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => {
          return <Card key={item?.id} loading={isLoading} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Orders;