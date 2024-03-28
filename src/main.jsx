import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import App from "./App";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import MarketPlaceProducts from "./pages/MarketPlace/MarketPlaceProducts";
import Cart from "./pages/Cart/Cart";
import ShoppingCart from "./pages/Cart/ShoppingCart";
import ShippingDetails from "./pages/Cart/ShippingDetails";
import PaymentDetails from "./pages/Cart/PaymentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "marketplace",
        element: <MarketPlace />,
      },
      {
        path: "marketplace/editorials/:id",
        element: <MarketPlaceProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
        children: [
          {
            index: true,
            element: <Navigate to="/cart/shopping-cart" />,
          },
          {
            path: "shopping-cart",
            element: <ShoppingCart />,
          },
          {
            path: "shipping-details",
            element: <ShippingDetails />,
          },
          {
            path: "payment-details",
            element: <PaymentDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
