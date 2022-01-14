import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase from "../../firebase";

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
      console.log(err.message);
    }
  };

  return (
    <>
      <h1>HEY ADMIN!</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input
            type="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Role:
          <select onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="Role" selected disabled>
              Role
            </option>
            <option value="Chef">Chef</option>
            <option value="Waiter">Waiter</option>
            <option value="Admin">Admin</option>
          </select>
        </label>
        <label>
          Email:
          <input
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
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="" id="buttonChef">
          Send
        </button>
      </form>
    </>
  );
};

export default Admin;
