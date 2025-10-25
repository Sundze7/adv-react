import { useState } from "react";

const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img src="/src/assets/img1.jpeg" alt="pics" />
    </div>
  );
});
function SlowComponent() {
  const [items, setItems] = useState(newItems);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginTop: "2rem",
      }}
    >
      {items}
    </div>
  );
}
export default SlowComponent;
