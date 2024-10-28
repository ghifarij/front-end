import { useState } from "react";

function StateComp() {
  const [count, setCount] = useState<number>(0);
  const decrement = () => {
    setCount(count - 1);
  };

  const [name, setName] = useState<string>("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default StateComp;
