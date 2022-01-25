import "./order.css";
import BurgerMenu from "../../component/burgers/BurgerMenu";
import BreakfastMenu from "../../component/breakfast/BreakfastMenu";
import { useState } from "react";

const Order = () => {
  const [currentMenu, setCurrentMenu] = useState("breakfast");

  const displayMenu = () => {
    if (currentMenu === "breakfast") {
      return <BreakfastMenu />;
    } else if (currentMenu === "burger") {
      return <BurgerMenu />;
    }
  };
  return (
    <>
      <section className="waiter-view">
        <div class="nes-container with-title is-centered menu">
          <p class="title">HEY WAITER!</p>
        </div>
        <button
          onClick={() => setCurrentMenu("breakfast")}
          className="nes-btn is-primary button-breakfast"
        >
          BREAKFAST!
        </button>
        <button
          onClick={() => setCurrentMenu("burger")}
          className="nes-btn is-primary button-burgers"
        >
          BURGERS!
        </button>
        <div className="nes-container with-title breakfast-menu">
          <p className="title">MENU!</p>
          {/* {currentMenu === "breakfast" ? <BreakfastMenu /> : <BurgerMenu />} */}
          {displayMenu()}
        </div>
        <div class="nes-container with-title final-order">
          <p class="title">ORDER!</p>
          <div className="order">
            <p className="total">TOTAL:$10.990</p>
            <button className="nes-btn is-success done-button">DONE!</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
