import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { App } from "./App";
import { DogProvider } from "./Components/DogProvider";
import { ToggleProvider } from "./Components/TogglerProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DogProvider>
      <ToggleProvider>
        <Toaster />
        <App />
      </ToggleProvider>
    </DogProvider>
  </React.StrictMode>
);
