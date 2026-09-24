import "./OperatorsDisplay.css";
var arr = ["+", "-", "/", "*"];
function OperatorsDisplay({ onOperatorClick }) {
  return (
    <div class="operators">
      {arr.map((op) => (
        <button
          key={op}
          onClick={function () {
            onOperatorClick(op);
          }}
        >
          {op}
        </button>
      ))}
    </div>
  );
}

export default OperatorsDisplay;
