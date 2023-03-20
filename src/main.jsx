import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import MarketPlace from "./pages/MarketPlace";
import Auctions from "./pages/Auctions";
import Drop from "./pages/Drop";

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
        path: "auctions",
        element: <Auctions />,
      },
      {
        path: "drop",
        element: <Drop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
