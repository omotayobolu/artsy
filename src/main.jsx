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
import Auctions from "./pages/Auctions";
import Drop from "./pages/Drop";
import Cart from "./pages/Cart/Cart";

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
        path: "auctions",
        element: <Auctions />,
      },
      {
        path: "drop",
        element: <Drop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
