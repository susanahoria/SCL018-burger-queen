import { useState } from "react";
import "./home.css";
import home from "./home-burger.png";
import UserForm from "../../components/form/UserForm";

const HomePage = () => {
  const [form, setForm] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setForm(!form);
  };

  return (
    <>
      <div className="home">
        <img src={home} alt="burger" className="burger-img" />
        <h2 className="durrr">DURRR</h2>
        <h2 className="burger">BURGER</h2>
        <section className="login-user">
          <div className="nes-container with-title formUsers">
            <p className="title hey-there">HEY THERE!!</p>
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
