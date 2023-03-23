import "./Amount.css";

function Amount() {
  return (
    <div className="AmountContainer">
      <span className="inr-symbol">₹</span>
      <span className="rupee">10</span>
      <span className="paise">20</span>
    </div>
  );
}

export default Amount;
