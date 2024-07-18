import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const clearDisplay = () => {
    setDisplay('0');
  };

  const calculate = (process) => {
    if (display === '0' && process !== '.') {
      setDisplay('');
    }
    setDisplay((prev) => prev + process);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display));
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="btn" onClick={clearDisplay}>MC</button>
        <button className="btn"></button>
        <button className="btn"></button>
        <button className="btn operator" onClick={() => calculate('/')}>/</button>

        <button className="btn" onClick={() => calculate('7')}>7</button>
        <button className="btn" onClick={() => calculate('8')}>8</button>
        <button className="btn" onClick={() => calculate('9')}>9</button>
        <button className="btn operator" onClick={() => calculate('*')}>*</button>

        <button className="btn" onClick={() => calculate('4')}>4</button>
        <button className="btn" onClick={() => calculate('5')}>5</button>
        <button className="btn" onClick={() => calculate('6')}>6</button>
        <button className="btn operator" onClick={() => calculate('-')}>-</button>

        <button className="btn" onClick={() => calculate('1')}>1</button>
        <button className="btn" onClick={() => calculate('2')}>2</button>
        <button className="btn" onClick={() => calculate('3')}>3</button>
        <button className="btn operator" onClick={() => calculate('+')}>+</button>

        <button className="btn wide" onClick={() => calculate('0')}>0</button>
        <button className="btn" onClick={() => calculate('.')}>.</button>
        <button className="btn operator" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
