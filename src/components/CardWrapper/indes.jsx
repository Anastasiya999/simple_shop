import styles from "./CardWrapper.module.scss";

function CardWrapper({ children }) {
  return (
    <div className={[styles.cards, "d-flex flex-wrap"].join(" ")}>
      {children}
    </div>
  );
}

export default CardWrapper;
