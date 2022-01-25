import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase from "../../firebase";
import "./admin.css";

const Admin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const signUp = (email, password) => {
    const auth = getAuth(firebase);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const insertToDB = (id) => {
    const db = getFirestore(firebase);
    return setDoc(doc(db, "users", id), { email, role, name });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await signUp(email, password);
      await insertToDB(data.user.uid);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("complete campos");
      console.log(err.message);
    }
  };

  return (
    <>
      <section className="admin-view">
        <div class="nes-container with-title is-centered form-admin">
          <p class="title hey-admin">HEY ADMIN!</p>
          <form onSubmit={submitHandler}>
            <div className="inputs-admin">
              <label htmlFor="name">
                Name:
                <input
                  className="nes-input"
                  type="name"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label htmlFor="role">
                Role:
                <div className="nes-select">
                  <select
                    className="nes-input"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                  >
                    <option value="" disabled selected hidden>
                      Role...
                    </option>
                    <option value="CHEF">Chef</option>
                    <option value="WAITER">Waiter</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
              </label>
              <label htmlFor="email">
                Email:
                <input
                  className="nes-input"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  className="nes-input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button
                type="submit"
                className="nes-btn is-success button-admin"
                id="buttonChef"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Admin;