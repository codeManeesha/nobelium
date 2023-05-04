import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleNumberClick(number) {
    setDisplay(display + number.toString());
  }

  function handleOperatorClick(nextOperator) {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setPreviousValue(result);
      setDisplay(result.toString());
    }

    setOperator(nextOperator);
    setDisplay('');
  }

  function handleEqualsClick() {
    const inputValue = parseFloat(display);
    const result = performCalculation(inputValue);
    setPreviousValue(null);
    setOperator(null);
    setDisplay(result.toString());
  }

  function performCalculation(inputValue = parseFloat(display)) {
    const previous = previousValue;

    switch (operator) {
      case '+':
        return previous + inputValue;
      case '-':
        return previous - inputValue;
      case '*':
        return previous * inputValue;
      case '/':
        return previous / inputValue;
      default:
        return inputValue;
    }
  }

  return (
    <div>
      <input type="text" value={display} readOnly />

      <div>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleEqualsClick()}>=</button>
      </div>
    </div>
  );
}

export default Calculator;


