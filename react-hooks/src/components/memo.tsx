import { useMemo, useState } from "react";

function MemoComp() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incNumber = () => setNumber((num) => num + 1);
  const incCount = () => setCount((count) => count + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return number % 2 == 0;
  }, [number]);

  return (
    <div>
      <button onClick={incNumber}>number: {number}</button>
      <div>
        <h1>{isNumberEven ? "Even" : "Odd"}</h1>
      </div>
      <button onClick={incCount}>count: {count}</button>
    </div>
  );
}

export default MemoComp;
