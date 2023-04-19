import "./styles.css";
// import { useState, useEffect } from "react";
// import { fakeFetch } from "./Data/ProductDb";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Wishlist } from "./Pages/Wishlist";
import { ProductList } from "./Pages/ProductList";
import { Product } from "./Pages/Product";
import { ErrorPage } from "./Pages/ErrorPage";
import { useContext } from "react";
import { ProductContext } from "./Contexts/ProductContext";

export default function App() {
  const { data } = useContext(ProductContext);
  return (
    <div className="App">
      {data.length > 0 && (
        <>
          <h2>Flupkurt</h2>
          <nav>
            <Link to="/"> Product List</Link> ||
            <Link to="/cart"> My Cart</Link> ||
            <Link to="/wishlist"> My Wishlist</Link>
          </nav>
        </>
      )}
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
