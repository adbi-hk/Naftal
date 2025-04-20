import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import Station from "./pages/Station/Station";
import Locaux from "./pages/Locaux/Locaux";
import Colaborator from "./pages/Colaborator/Colaborator";
import Contract from "./pages/Contract/Contract";
import Facture from "./pages/Facture/Facture";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="Station" element={<Station />} />
      <Route path="Locaux" element={<Locaux />} />
      <Route path="Station" element={<Station />} />
      <Route path="Colaborator" element={<Colaborator />} />
      <Route path="Station" element={<Station />} />
      <Route path="Contract" element={<Contract />} />
      <Route path="Facture" element={<Facture />} />

      {/* ... etc. */}
    </Route>
  )
);

// TypeScript requires us to ensure the element exists before using it
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
