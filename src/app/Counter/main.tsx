import { createRoot } from "react-dom/client";
import React from "react";
import "../../index.css";
import CounterApps from "./CounterApps";

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterApps />
  </React.StrictMode>
);