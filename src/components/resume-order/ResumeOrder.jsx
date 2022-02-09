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
        <p className="title total-title">ORDER!- TOTAL:${getTotal()}</p>
        <div className="products">
          <div className="lists">
            <ul className="nes-list">
              {order.map((item, index) => {
                return (
                  <li key={index}>
                    <p>*</p>
                    <p className="item-name">{item.name}</p>
                    {displayExtras(item)}
                    <p className="item-price">${item.price}</p>
                    <button
                      className="button-remove"
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
          <button
            className="nes-btn is-primary send-order"
            onClick={() => handleClick()}
            disabled={order.length === 0}
          >
            DONE!
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeOrder;
