// import { app } from "../firebase";
import chef from "./chef.png";
import waiter from "./waiter.png";
import "./home.css";

function HomePage() {
  return (
    <>
      <div className="home">
        <h1 className="welcome">HEY THERE!!</h1>
        <button className="button-chef">
          <img src={chef}></img>
        </button>
        <button className="button-waiter">
          <img src={waiter}></img>
        </button>
      </div>
    </>
  );
}

export default HomePage;
