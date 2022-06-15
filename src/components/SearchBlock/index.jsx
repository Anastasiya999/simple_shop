import styles from "./SearchBlock.module.scss";

function SeachBlock({ searchValue, onSearchChange, setSearchValue }) {
  return (
    <div className={[styles.searchBlock, "d-flex"].join(" ")}>
      <img src="img/search.svg" alt="Search" />
      {searchValue && (
        <i
          className={[styles.clear, "bx bx-message-square-add"].join(" ")}
          onClick={() => {
            setSearchValue("");
          }}
        ></i>
      )}
      <input
        onChange={onSearchChange}
        placeholder="Type to search..."
        value={searchValue}
      />
    </div>
  );
}
export default SeachBlock;
