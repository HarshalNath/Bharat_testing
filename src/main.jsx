import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Auth from "./auth/Auth.jsx";
import Service from "./components/Service/Service.jsx";
import Service_Environment from "./components/Services_Pages/Service_Environment.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route
          path="/service-environment"
          element={<Service_Environment />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
