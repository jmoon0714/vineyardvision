import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Apply the theme on initial load
if (localStorage.getItem("theme") === "dark-theme") {
  document.documentElement.classList.add("dark-theme");
}
