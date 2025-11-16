import CartContainer from "./reduxFiles/components/CartContainer";
import NavBar from "./reduxFiles/components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./reduxFiles/features/cart/cartSlice";

// import Starter from "./tutorial/10-performance/01-react-18";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main className="container">
      {/* <Starter /> */}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
