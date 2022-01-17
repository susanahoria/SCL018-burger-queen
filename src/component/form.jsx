import { useState } from "react";
import email from "./email.png";
import password from "./password.png";
import "./form.css";

const UserForm = () => {
  return (
    <>
      <div className="login">
        <p>
          <input className="input" type="email" placeholder="Email" />
        </p>
        <p>
          <input className="input" type="password" placeholder="Password" />
        </p>
        <button className="button is-large" id="loginButton">
          LOGIN
        </button>
      </div>
    </>
  );
};

export default UserForm;
