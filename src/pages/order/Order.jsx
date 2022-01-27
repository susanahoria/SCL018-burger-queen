import "./order.css";
import BurgerMenu from "../../components/burgers/BurgerMenu";
import BreakfastMenu from "../../components/breakfast/BreakfastMenu";
import ResumeOrder from "../../components/resume-order/ResumeOrder";
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
          <p className="price-title">PRICE!</p>
          {/* {currentMenu === "breakfast" ? <BreakfastMenu /> : <BurgerMenu />} */}
          {displayMenu()}
        </div>
        <ResumeOrder />
      </section>
    </>
  );
};

export default Order;
