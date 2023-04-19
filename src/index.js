import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ProductContext, ProductProvider } from "./Contexts/ProductContext";
//import { Product } from "./Pages/Product";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { ProductContext };

root.render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
