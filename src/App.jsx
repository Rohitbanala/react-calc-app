import { useState } from "react";
import "./App.css";
import NumDisplay from "./Components/NumDisplay";
import Display from "./Components/Display";
import OperatorsDisplay from "./Components/OperatorsDisplay";

function App() {
  const [sum, setSum] = useState(0);
  const [currNum, setCurrNum] = useState(0);
  const [operator, setOperator] = useState("");

  function handleNum(num) {
    setCurrNum((prev) => prev * 10 + num);
  }

  function handleOperator(op) {
    if (operator === "") {
      setSum(currNum);
    } else if (operator === "+") {
      setSum((prev) => prev + currNum);
    } else if (operator === "-") {
      setSum((prev) => prev - currNum);
    } else if (operator === "*") {
      setSum((prev) => prev * currNum);
    } else if (operator === "/") {
      setSum((prev) => prev / currNum);
    }

    setCurrNum(0);
    setOperator(op);
  }
  return (
    <>
      <Display sum={sum} currNum={currNum}></Display>
      <NumDisplay onNumberClick={handleNum}></NumDisplay>
      <OperatorsDisplay onOperatorClick={handleOperator}></OperatorsDisplay>
    </>
  );
}

export default App;
