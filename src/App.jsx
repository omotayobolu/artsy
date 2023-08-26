import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { sendCartData } from "./store/cart-actions";

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <div className="font-Satoshi">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
