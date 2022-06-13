import React from "react";
import useCart from "../../hooks/useCart";
import Info from "../Info";
import axios from "axios";

import styles from "./Drawer.module.scss";
import CartItem from "./CartItem";
import CartTotalBlock from "./CartTotalBlock";
import AppContext from "../../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, items = [], opened }) {
  const { setIsOrderComplete, isOrderComplete } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const { cartItems, setCartItems, totalPrice } = useCart();

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `https://62a42f2447e6e400638da88e.mockapi.io/orders/`,
        {
          items: cartItems,
        }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const itemId = cartItems[i].id;
        await axios.delete(
          "https://62a42f2447e6e400638da88e.mockapi.io/cart/" + itemId
        );
        await delay(1000);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <div
      className={[styles.overlay, opened && styles.overlayVisible].join(" ")}
    >
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className="d-flex justify-between">
          Cart
          <img src="img/btn-remove.svg" onClick={onClose} />
        </h2>
        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((item) => {
                return <CartItem item={item} />;
              })}
            </div>
            <CartTotalBlock
              isLoading={isLoading}
              totalPrice={totalPrice}
              onClickOrder={onClickOrder}
            />
          </>
        ) : isOrderComplete ? (
          <Info
            title="The order is complete"
            description={`You can check your order #${orderId} in user's panel`}
            imgSrc="/img/complete-order.jpg"
          />
        ) : (
          <Info
            title="The cart is empty"
            descrption="Add at least one item to order"
            imgSrc="/img/empty-cart.jpg"
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
