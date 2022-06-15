import styles from "./SubHeader.module.scss";

function SubHeader({ title, children }) {
  return (
    <div
      className={[
        styles.subheader,
        "d-flex align-center flex-wrap justify-between mb-40 pb-10",
      ].join(" ")}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default SubHeader;
