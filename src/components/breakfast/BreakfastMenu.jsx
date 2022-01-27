import "./breakfast.css";

const BreakfastMenu = ({ order, setOrder }) => {
  const handleClick = (item) => {
    order.push(item);
    setOrder([...order]);
  };

  return (
    <div className="menu-breakfast">
      <p>Coffee!</p>
      <label>
        <input
          type="checkbox"
          className="nes-checkbox"
          onClick={() => handleClick({ name: "Americano", price: 5 })}
        />
        <span className="item">Americano</span>
        <span className="price">$5</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className="nes-checkbox"
          onClick={() => handleClick({ name: "Cappuccino", price: 7 })}
        />
        <span className="item">Cappuccino</span>
        <span className="price">$7</span>
      </label>
      <p>Juice!</p>
      <label>
        <input
          type="checkbox"
          className="nes-checkbox"
          onClick={() => handleClick({ name: "Apple", price: 7 })}
        />
        <span className="item">Apple</span>
        <span className="price">$7</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className="nes-checkbox"
          onClick={() => handleClick({ name: "Orange", price: 7 })}
        />
        <span className="item">Orange</span>
        <span className="price">$7</span>
      </label>
      <p>Sandwiches!</p>
      <label>
        <input
          type="checkbox"
          className="nes-checkbox"
          onClick={() => handleClick({ name: "Americano", price: 10 })}
        />
        <span className="item">Croissant</span>
        <span className="price">$10</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className="nes-checkbox"
          onClick={() => handleClick({ name: "Caprese", price: 15 })}
        />
        <span className="item">Caprese</span>
        <span className="price">$15</span>
      </label>
    </div>
  );
};

export default BreakfastMenu;
