import React from "react";
import { createRoot } from "react-dom/client";

// App ->
import App from "./app";

// BrowserRouter ->
import { BrowserRouter } from "react-router-dom";

// SWR & fetcher ->
import { SWRConfig } from "swr";
import { fetcher } from "@/services/fetcher";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>
);
