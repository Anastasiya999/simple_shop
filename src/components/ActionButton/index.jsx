import styles from "./ActionButton.module.scss";

function ActionButton({ title, onClick, disabled, className }) {
  return (
    <button
      className={[styles.actionBtn, className].join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
      <img src="/img/arrow.svg" alt="arrow" />
    </button>
  );
}

export default ActionButton;
