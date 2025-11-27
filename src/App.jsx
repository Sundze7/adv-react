import CartContainer from "./reduxFiles/components/CartContainer";
import NavBar from "./reduxFiles/components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  calculateTotals,
  getCartItems,
} from "./reduxFiles/features/cart/cartSlice";
import Modal from "./reduxFiles/components/Modal";

// import Starter from "./tutorial/10-performance/01-react-18";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="container">
      {/* <Starter /> */}
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
