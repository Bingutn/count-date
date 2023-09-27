import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function Reset() {
    setStep(1);
    setCount(0);
  }

  function AddCount() {
    setCount((s) => s + step);
  }

  function DeleteCount() {
    setCount((s) => s - step);
  }

  return (
    <div>
      <h1>COUNT DATE</h1>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
        />
        Step: {step}
      </div>
      <div>
        <span>
          <button onClick={DeleteCount}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={AddCount}>+</button>
        </span>
      </div>
      <div>
        {count > 0 && (
          <p>
            {count} days from today is {date.toDateString()}
          </p>
        )}
        {count === 0 && <p>Today is {date.toDateString()}</p>}
        {count < 0 && (
          <p>
            {Math.abs(count)} days ago was {date.toDateString()}
          </p>
        )}
      </div>
      {(count !== 0 || step !== 1) && <button onClick={Reset}>Reset</button>}
    </div>
  );
}
