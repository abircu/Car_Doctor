import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto  bg-base-200">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
