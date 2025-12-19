import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/CartContext.tsx";

createRoot(document.getElementById("root")! as HTMLElement).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
