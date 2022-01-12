// import { app } from "../firebase";
import chef from "./chef.png";
import waiter from "./waiter.png";
import "./home.css";

function HomePage() {
  return (
    <>
      <div className="home">
        <h1 className="welcome">HEY THERE!!</h1>
        <form className="form-chef" action="">
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="button-chef" id="buttonChef">
            {/* <img src={chef} alt="chef" /> */}
          </button>
        </form>
        <form className="form-waiter" action="">
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="button-waiter" id="buttonWaiter">
            {/* <img src={waiter} alt="waiter"></img> */}
          </button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
