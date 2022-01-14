// import { app } from "../firebase";
import firebaseApp from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import "./home.css";

const HomePage = () => {
  // const [user, setUser] = useState(null);
  return (
    <>
      <div className="home">
        <h1 className="welcome">HEY THERE!!</h1>
        <h3>CHEF</h3>
        <form className="form-chef" action="">
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button
            type="submit"
            className="button-chef"
            id="buttonChef"
          ></button>
        </form>
        <h3>WAITER</h3>
        <form className="form-waiter" action="">
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button
            type="submit"
            className="button-waiter"
            id="buttonWaiter"
          ></button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
