import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PoemCreationProvider } from "./contexts/PoemCreationContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PoemCreationProvider>
    <App />
  </PoemCreationProvider>
);
