import { useState } from "react";
import "../../../src/pages/order/order.css";

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
    console.log(order);
  };
  return (
    <>
      <p>Burgers!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Beef burger</span>
        <span>$10</span>
        <button onClick={() => handleClick({ name: "Beef burger", price: 10 })}>
          +
        </button>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Chicken burger</span>
        <span>$10</span>
        <button
          onClick={() => handleClick({ name: "Chicken burger", price: 10 })}
        >
          +
        </button>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>veggie burger</span>
        <span>$10</span>
        <button
          onClick={() => handleClick({ name: "Veggie burger", price: 10 })}
        >
          +
        </button>
      </label>
      <br />
      <label>
        Extra:
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
        <input type="checkbox" className="nes-checkbox" />
        <span>French fries</span>
        <span>$5</span>
        <button onClick={() => handleClick({ name: "French fries", price: 5 })}>
          +
        </button>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Onion ring</span>
        <span>$5</span>
        <button onClick={() => handleClick({ name: "Onion ring", price: 5 })}>
          +
        </button>
      </label>
      <p>Soda!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Lemon</span>
        <span>$10</span>
        <button onClick={() => handleClick({ name: "Lemon", price: 10 })}>
          +
        </button>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Water</span>
        <span>$7</span>
        <button onClick={() => handleClick({ name: "Water", price: 7 })}>
          +
        </button>
      </label>
    </>
  );
};

export default BurgerMenu;
