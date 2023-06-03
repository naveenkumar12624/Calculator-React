import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">Calculator :<br></br>
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        <button className="operator" onClick={handleClick} name="+">+</button>
        <button className="operator" onClick={handleClick} name="-">-</button>
        <button className="operator" onClick={handleClick} name="*">*</button>
        <button className="operator" onClick={handleClick} name="/">/</button>
        <button onClick={handleClick} name="7">7</button>
        <button onClick={handleClick} name="8">8</button>
        <button onClick={handleClick} name="9">9</button>
        <button onClick={handleClick} name="4">4</button>
        <button onClick={handleClick} name="5">5</button>
        <button onClick={handleClick} name="6">6</button>
        <button onClick={handleClick} name="1">1</button>
        <button onClick={handleClick} name="2">2</button>
        <button onClick={handleClick} name="3">3</button>
        <button onClick={handleClick} name="0">0</button>
        <button className="clear" onClick={handleClear}>C</button>
        <button className="equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
