import styles from "./Drawer.module.scss";

function CartTotalBlock({ totalPrice, isLoading, onClickOrder }) {
  return (
    <div className={styles.cartTotalBlock}>
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
        className={[styles.greenButton, "greenButton"].join(" ")}
        disabled={isLoading}
        onClick={onClickOrder}
      >
        Check out
        <img src="/img/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default CartTotalBlock;
