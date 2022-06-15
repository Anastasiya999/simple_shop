import React from "react";
import axios from "axios";

import Card from "../components/Card";
import SubHeader from "../components/SubHeader";
import CardWrapper from "../components/CardWrapper/indes";

function Orders() {
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
    <div className="p-40">
      <SubHeader title="My orders" />
      <CardWrapper>
        {(isLoading ? [...Array(8)] : orders).map((item) => {
          return <Card key={item?.id} loading={isLoading} {...item} />;
        })}
      </CardWrapper>
    </div>
  );
}

export default Orders;
