import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import DobPage from "./Pages/DobPage";
import EmailPage from "./Pages/EmailPage";
import OtpPage from "./Pages/OtpPage";

import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<App />}>
      <Route path="/" element={<DobPage />} />
      <Route path="email" element={<EmailPage />} />
      <Route path="otp" element={<OtpPage n={6} />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
