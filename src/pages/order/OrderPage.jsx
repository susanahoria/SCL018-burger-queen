import "./order.css";
import BurgerMenu from "../../components/burgers/BurgerMenu";
import BreakfastMenu from "../../components/breakfast/BreakfastMenu";
import ResumeOrder from "../../components/resume-order/ResumeOrder";
import { useState } from "react";

const OrderPage = () => {
  const [order, setOrder] = useState([]);
  const [currentMenu, setCurrentMenu] = useState("breakfast");
  return (
    <section className="waiter-view">
      <div className="nes-container with-title is-centered menu">
        <p className="title">HEY WAITER!</p>
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
        {currentMenu === "breakfast" ? (
          <BreakfastMenu order={order} setOrder={setOrder} />
        ) : (
          <BurgerMenu order={order} setOrder={setOrder} />
        )}
      </div>
      <ResumeOrder order={order} setOrder={setOrder} />
    </section>
  );
};

export default OrderPage;
