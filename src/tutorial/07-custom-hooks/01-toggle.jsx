import useToggle from "./useToggle";

function Toggle() {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4 style={{ margin: "16px" }}>some stuff</h4>}
    </div>
  );
}
export default Toggle;
