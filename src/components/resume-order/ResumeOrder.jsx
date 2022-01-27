import "./resumeOrder.css";
const ResumeOrder = () => {
  return (
    <>
      <div class="nes-container with-title final-order">
        <p class="title">ORDER!</p>
        <div className="order">
          <p className="total">TOTAL:$10.990</p>
          <button className="nes-btn is-success done-button">DONE!</button>
        </div>
      </div>
    </>
  );
};

export default ResumeOrder;
