import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
    </section>
  );
}
export default Counter;
