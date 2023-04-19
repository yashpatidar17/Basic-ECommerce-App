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
    const currProduct = cart.find((prod) => prod.id === item.id);
    if (currProduct) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, cartQuantity: prod.cartQuantity + 1 }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, cartQuantity: 1 }]);
    }

    console.log(item.cartQuantity);
    //setCart([...cart, item]);
  };

  const cartRemoveHandler = (item) => {
    const currProduct = cart.find((prod) => prod.id === item.id);
    if (currProduct && currProduct.cartQuantity > 1) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, cartQuantity: prod.cartQuantity - 1 }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart((prev) => prev.filter((prod) => prod.id !== item.id));
    }
    // if(item.cartQuantity >1){
    //   setCart({...item, item[cartQuantity]: item[cartQuantity]-1})
    // }
    //setCart((prev) => prev.filter((prod) => prod.id !== item.id));
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
        wishlistRemoveHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
