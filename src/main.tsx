import { render } from "preact";

// App ->
import App from "./app";

// BrowserRouter ->
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")!
);
