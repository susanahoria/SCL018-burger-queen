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
        <span className="item">Americano</span>
        <span className="price">$5</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Americano", price: 5 })}
        >
          +
        </button>
      </label>
      <label>
        <span className="item">Cappuccino</span>
        <span className="price">$7</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Cappuccino", price: 7 })}
        >
          +
        </button>
      </label>
      <p>Juice!</p>
      <label>
        <span className="item">Apple</span>
        <span className="price">$7</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Apple", price: 7 })}
        >
          +
        </button>
      </label>
      <label>
        <span className="item">Orange</span>
        <span className="price">$7</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Orange", price: 7 })}
        >
          +
        </button>
      </label>
      <p>Sandwiches!</p>
      <label>
        <span className="item">Croissant</span>
        <span className="price">$10</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Croissant", price: 10 })}
        >
          +
        </button>
      </label>
      <label>
        <span className="item">Caprese</span>
        <span className="price">$15</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Caprese", price: 15 })}
        >
          +
        </button>
      </label>
    </div>
  );
};

export default BreakfastMenu;
