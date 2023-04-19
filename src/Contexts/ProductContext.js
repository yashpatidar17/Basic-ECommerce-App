import { createContext } from "react";
import { useState, useEffect } from "react";
import { fakeFetch } from "../Data/ProductDb";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  console.log(cart);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await fakeFetch("https://example.com/api/products");
        setData(data.products);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const cartHandler = (item) => {
    setCart([...cart, item]);
  };

  const cartRemoveHandler = (item) => {
    setCart((prev) => prev.filter((prod) => prod.id !== item.id));
  };

  const wishlistHandler = (item) => {
    setWishlist([...wishlist, item]);
  };

  const wishlistRemoveHandler = (item) => {
    setWishlist((prev) => prev.filter((wish) => wish.id !== item.id));
  };

  return (
    <ProductContext.Provider
      value={{
        data,
        cart,
        wishlist,
        cartHandler,
        cartRemoveHandler,
        wishlistHandler,
        wishlistRemoveHandler
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
