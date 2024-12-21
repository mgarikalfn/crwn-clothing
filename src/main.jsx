import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context.jsx";
import { ProductsProvider } from "./contexts/products.context.jsx";
import { CartProvider } from "./contexts/cart.context.jsx";
import "./index.scss";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </StrictMode>
  </BrowserRouter>
);
