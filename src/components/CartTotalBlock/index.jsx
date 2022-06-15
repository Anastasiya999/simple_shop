import ActionButton from "../ActionButton";
import styles from "./CartTotalBlock.module.scss";

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
      <ActionButton
        title="Check out"
        className={styles.actionBtn}
        disabled={isLoading}
        onClick={onClickOrder}
      />
    </div>
  );
}

export default CartTotalBlock;
