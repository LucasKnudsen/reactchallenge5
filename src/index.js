import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App() {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [result, setResult] = useState(0)

  const addHandler = () => {
    setResult((input1) + (input2))
  }
  const subtractHandler = () => {
    setResult(input1 - input2)
  }
  const multiplyHandler = () => {
    setResult(input1 * input2)
  }
  const divideHandler = () => {
    setResult((input1) / (input2))
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input key={1} type="number" placeholder="0" onChange={(event) => setInput1(+event.target.value)} />
        <input key={2} type="number" placeholder="0" onChange={(event) => setInput2(+event.target.value)} />
      </div>

      <button onClick={() => addHandler()}>Add Them!</button>
      <button onClick={() => subtractHandler()}>Subtract Them!</button>
      <button onClick={() => multiplyHandler()}>Multiply Them!</button>
      <button onClick={() => divideHandler()}>Divide Them!</button>

      <h2>{result}</h2>

    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
