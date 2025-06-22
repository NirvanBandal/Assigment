import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { BooksProvider } from "./context/BooksContext.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BooksProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BooksProvider>
);
