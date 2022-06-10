import "./styles/App.scss";
function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"></img>
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Shop with the best sneakers</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg"></img>
            <span>100</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg"></img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" />
          <h5>Nike Blaser Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>120 pln</b>
            </div>
            <button>
              <img src="/img/plus.svg" height={11} width={11} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
