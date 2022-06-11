function Drawer({ onClose }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between">
          Cart
          <img src="img/btn-remove.svg" onClick={onClose} />
        </h2>
        <div className="items">
          <div className="cart-item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cart-item-img"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Nike Blaser Mid Suede</p>
              <b>100 pln</b>
            </div>
            <img
              src="/img/btn-remove.svg"
              alt="remove"
              className="remove-btn"
            />
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cart-item-img"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Nike Blaser Mid Suede</p>
              <b>100 pln</b>
            </div>
            <img
              src="/img/btn-remove.svg"
              alt="remove"
              className="remove-btn"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Summary</span>
              <div></div>
              <b>100 pln</b>
            </li>
            <li className="d-flex">
              <span>Cut 5%</span>
              <div></div>
              <b>5 pln</b>
            </li>
          </ul>
          <button className="greenButton">
            Check out
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
