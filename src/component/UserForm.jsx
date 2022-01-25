import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(firebase);
      const response = await signInWithEmailAndPassword(auth, email, password);
      const db = getFirestore(firebase);
      const reference = doc(db, "users", response.user.uid);
      const document = await getDoc(reference);

      if (document.exists()) {
        const user = document.data();
        navigate("/" + user.role.toLowerCase());
      } else {
        alert("no existe usuario");
      }
    } catch (err) {
      console.log("error firebase");
      console.log(err);
    }
  };

  return (
    <>
      <form className="login" onSubmit={submitHandler}>
        <p className="nes-field">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="nes-input"
            type="email"
            placeholder="example@hey.cl"
            id="email"
          />
        </p>
        <p className="nes-field">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="nes-input"
            type="password"
            placeholder="******"
            id="password"
          />
        </p>
        <button type="submit" className="nes-btn is-primary">
          LOGIN
        </button>
      </form>
    </>
  );
};

export default UserForm;
