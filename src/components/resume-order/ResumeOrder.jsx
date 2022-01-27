import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import "./resumeOrder.css";
import { useNavigate } from "react-router-dom";
const ResumeOrder = ({ order, setOrder }) => {
  const navigate = useNavigate();
  const removeItem = (index) => {
    order.splice(index, 1);
    setOrder([...order]);
  };

  const getTotal = () => {
    let total = 0;
    for (const item of order) {
      total += item.price;
    }
    return total;
  };
  const handleClick = async () => {
    try {
      const db = getFirestore(firebase);
      await setDoc(doc(db, "orders", uuidv4()), { order, status: "received" });
      navigate("/chef");
    } catch (error) {
      alert("error al guardar orden");
    }
  };
  const displayExtras = (item) => {
    if (item.extras) {
      return item.extras.map((extra) => <p key={extra}>{extra}</p>);
    }
  };

  return (
    <>
      <div className="nes-container with-title final-order">
        <p className="title">ORDER!- TOTAL: {getTotal()}</p>
        <button onClick={() => handleClick()} disabled={order.length === 0}>
          guardar
        </button>
        <div className="lists">
          <ul className="nes-list is-disc">
            {order.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item.name}</p>
                  {displayExtras(item)}
                  <p>{item.price}</p>
                  <button
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResumeOrder;
