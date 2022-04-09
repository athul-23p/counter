import { useState } from "react";
import "./counter.css";
function Counter(props) {
  const [count, setValue] = useState(+props.val);

  const handleChange = (value) => setValue(count + value);
  return (
    <div>
      <h1>
        value :{" "}
        <span className={count % 2 === 0 ? "green" : "red"}>{count}</span>
      </h1>
      <div id="controls">
        <button id="decrement" onClick={() => handleChange(-1)}>
          Decrement
        </button>
        <button id="double" onClick={() => handleChange(count)}>
          Double
        </button>
        <button id="increment" onClick={() => handleChange(1)}>
          Incremnet
        </button>
      </div>
    </div>
  );
}

export default Counter;
