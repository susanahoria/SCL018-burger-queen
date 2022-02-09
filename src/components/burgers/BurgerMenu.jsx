import { useState } from "react";
import "../../../src/pages/order/order.css";
import "./burgerMenu.css";

const BurgerMenu = ({ order, setOrder }) => {
  const [egg, setEgg] = useState(false);
  const [cheese, setCheese] = useState(false);
  const handleClick = (item) => {
    item.extras = [];
    if (egg) {
      item.price += 1;
      item.extras.push("egg");
    }
    if (cheese) {
      item.price += 1;
      item.extras.push("cheese");
    }
    order.push(item);
    setOrder([...order]);
    setEgg(false);
    setCheese(false);
  };
  return (
    <div className="container-list">
      <p>Burgers!</p>
      <label>
        <span className="item">Beef burger</span>
        <span>$10</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Beef burger", price: 10 })}
        >
          +
        </button>
      </label>
      <label>
        <span>Chicken burger</span>
        <span>$10</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Chicken burger", price: 10 })}
        >
          +
        </button>
      </label>
      <label>
        <span>veggie burger</span>
        <span>$10</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Veggie burger", price: 10 })}
        >
          +
        </button>
      </label>
      <label>
        ExtraEgg:
        <input
          type="checkbox"
          className="nes-checkbox"
          checked={egg}
          onChange={() => {
            setEgg(!egg);
          }}
        />
        <span>Egg</span>
        <span>$1</span>
      </label>
      <label>
        ExtraCheese:
        <input
          type="checkbox"
          className="nes-checkbox"
          checked={cheese}
          onChange={() => {
            setCheese(!cheese);
          }}
        />
        <span>Cheese</span>
        <span>$1</span>
      </label>
      <p>Snacks!</p>
      <label>
        <span>French fries</span>
        <span>$5</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "French fries", price: 5 })}
        >
          +
        </button>
      </label>
      <label>
        <span>Onion ring</span>
        <span>$5</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Onion ring", price: 5 })}
        >
          +
        </button>
      </label>
      <p>Soda!</p>
      <label>
        <span>Lemon</span>
        <span>$10</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Lemon", price: 10 })}
        >
          +
        </button>
      </label>
      <label>
        <span>Water</span>
        <span>$7</span>
        <button
          className="add-button"
          onClick={() => handleClick({ name: "Water", price: 7 })}
        >
          +
        </button>
      </label>
    </div>
  );
};

export default BurgerMenu;
