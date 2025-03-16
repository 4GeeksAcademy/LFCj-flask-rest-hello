import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import { App } from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import { FavouritesProvider } from "./pages/FavsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Hacemos una constante que incluya todos los paths de nuestros componentes para despues hacerle un map y que sea más dinámico

root.render(
  <StrictMode>
    <BrowserRouter>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </BrowserRouter>
  </StrictMode>,
);
