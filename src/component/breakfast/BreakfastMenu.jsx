import "../../../src/pages/order/order.css";

const BreakfastMenu = () => {
  return (
    <>
      <p>Coffee!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Americano</span>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Cappuccino</span>
      </label>
      <p>Juice!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Apple</span>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Orange</span>
      </label>
      <p>Sandwiches!</p>
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Croissant</span>
      </label>
      <br />
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>Caprese panini</span>
      </label>
    </>
  );
};

export default BreakfastMenu;
