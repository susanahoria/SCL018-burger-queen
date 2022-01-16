import firebase from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import "./home.css";
import chef from "./chef.png";
import waitress from "./waitress.png";
import admin from "./admin.png";

const HomePage = () => {
  // const [user, setUser] = useState(null);
  const handleClick = (e) => {};

  return (
    <>
      <div className="home">
        <section className="login-user">
          <h1 className="welcome">HEY THERE!</h1>
          <hr className="gap" />
          <form className="formUsers">
            <button
              onClick={handleClick}
              className="button is-large is-rounded"
              id="buttons"
            >
              <span className="icon is-large">
                <i>
                  <img src={chef} alt="chef" />
                </i>
              </span>
              <span>CHEF</span>
            </button>

            <button className="button is-large is-rounded" id="buttons">
              <span className="icon is-large">
                <i>
                  <img src={waitress} alt="waiter" />
                </i>
              </span>
              <span>WAITER</span>
            </button>
            <button className="button is-large is-rounded" id="buttons">
              <span className="icon is-large">
                <i>
                  <img src={admin} alt="admin" />
                </i>
              </span>
              <span className="fas fa-heading fa-lg">ADMIN</span>
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default HomePage;
