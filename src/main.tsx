import React from "react";
import { createRoot } from "react-dom/client";

// App ->
import App from "./app";

// BrowserRouter ->
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
