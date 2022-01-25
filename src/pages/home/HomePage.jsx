import { useState } from "react";
import "./home.css";
import chef from "./chef.png";
import waitress from "./waitress.png";
import home from "./home-burger.png";
import admin from "./admin.png";
import UserForm from "../../component/UserForm";

const HomePage = () => {
  const [form, setForm] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setForm(!form);
  };

  return (
    <>
      <div className="home">
        <h2 className="durrr">DURRR</h2>
        <img src={home} alt="burger-image" className="burger-img" />
        <h2 className="burger">BURGER</h2>
        <section className="login-user">
          <div className="nes-container with-title formUsers">
            <p className="title">HEY THERE!!</p>
            {form ? (
              <UserForm />
            ) : (
              <>
                <div className="button-home">
                  <button onClick={onClick} className="nes-btn is-error">
                    <span>CHEF</span>
                  </button>
                  <button onClick={onClick} className="nes-btn is-error">
                    <span>WAITER</span>
                  </button>
                  <button onClick={onClick} className="nes-btn is-error">
                    <span>ADMIN</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
