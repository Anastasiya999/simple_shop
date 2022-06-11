function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between">
          Cart
          <img src="img/btn-remove.svg" onClick={onClose} />
        </h2>
        <div className="items">
          {items.map((item, index) => {
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
