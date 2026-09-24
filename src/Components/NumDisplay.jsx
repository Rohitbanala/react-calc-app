import "./NumDisplay.css";
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function NumDisplay({ onNumberClick }) {
  return (
    <div class="numbpad">
      {arr.map((num) => (
        <button
          key={num}
          onClick={function () {
            onNumberClick(num);
          }}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default NumDisplay;
