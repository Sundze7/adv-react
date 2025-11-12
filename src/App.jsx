import CartContainer from "./reduxFiles/components/CartContainer";
import NavBar from "./reduxFiles/components/NavBar";

// import Starter from "./tutorial/10-performance/01-react-18";
function App() {
  return (
    <main className="container">
      {/* <Starter /> */}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
