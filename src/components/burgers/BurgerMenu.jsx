import "../../../src/pages/order/order.css";

const BurgerMenu = () => {
  return (
    <>
      <p>Burgers!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Beef burger</span>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Chicken burger</span>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>veggie burger</span>
      </label>
      <br />
      <label>
        Extra:
        <input type="checkbox" className="nes-checkbox" />
        <span>Egg</span>
      </label>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Cheese</span>
      </label>
      <p>Snacks!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>French fries</span>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Onion ring</span>
      </label>
      <p>Soda!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Lemon</span>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Water</span>
      </label>
    </>
  );
};

export default BurgerMenu;
