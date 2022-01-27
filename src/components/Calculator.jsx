import { useState } from "react";

const Calculator2 = () => {
  const [firstNumber, currFirstNumber] = useState();
  const [secondNumber, currSecondNumber] = useState();
  const [symbol, currSymbol] = useState();

  const handleChange = (e) => {
    currSymbol(e.target.value);
  };

  //Icky about this
  const [total, currTotal] = useState(firstNumber + secondNumber);

  //Icky here as well

  function doMath() {
    if (symbol === "add") {
      return currTotal(firstNumber + secondNumber);
    } else if (symbol === "subtract") {
      return currTotal(firstNumber - secondNumber);
    } else if (symbol === "multiply") {
      return currTotal(firstNumber * secondNumber);
    } else if (symbol === "divide") {
      return currTotal(firstNumber / secondNumber);
    }
  }
  return (
    <div className="container">
      <h1>Add with React!</h1>

      <form className="add">
        <input
          type="number"
          name="value1"
          onChange={(events) => currFirstNumber(+events.target.value)}
          value={firstNumber}
        />
        {/* <span>+</span> */}
        <select name="arithmeticSymbols" onChange={handleChange} value={symbol}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">x</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          name="value2"
          onChange={(event) => currSecondNumber(+event.target.value)}
          value={secondNumber}
        />
        <span>=</span>
        <button type="button" onClick={doMath}>
          Get Answer!
        </button>
        <h3>Addition results go here!</h3>
        <h3>{total}</h3>
      </form>
    </div>
  );
};

export default Calculator2;
