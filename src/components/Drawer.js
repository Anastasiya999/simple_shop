import React from "react";
import useCart from "../hooks/useCart";
import Info from "./Info";
import axios from "axios";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState();
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
      cartItems.forEach((element) => {});
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
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between">
          Cart
          <img src="img/btn-remove.svg" onClick={onClose} />
        </h2>
        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item) => {
                return (
                  <div
                    className="cart-item d-flex align-center mb-20"
                    key={item.id}
                  >
                    <div
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                      className="cart-item-img"
                    ></div>

                    <div className="mr-20">
                      <p className="mb-5">{item.title}</p>
                      <b>{item.price} pln</b>
                    </div>
                    <img
                      src="/img/btn-remove.svg"
                      alt="remove"
                      className="remove-btn"
                      onClick={() => onRemove(item.id)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Summary</span>
                  <div></div>
                  <b>{totalPrice} pln</b>
                </li>
                <li className="d-flex">
                  <span>Cut 5%</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} pln</b>
                </li>
              </ul>
              <button
                className="greenButton"
                disabled={isLoading}
                onClick={onClickOrder}
              >
                Check out
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
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
