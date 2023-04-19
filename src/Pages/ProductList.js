import { useContext } from "react";

import { Link } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";

export const ProductList = () => {
  const { cart, data, wishlist, cartHandler, wishlistHandler } = useContext(
    ProductContext
  );
  return (
    <div>
      {data.length > 0 && (
        <>
          <h3>This is Product Listing Page </h3>
          <h3>
            Cart : {cart.length} Wishlist : {wishlist.length}
          </h3>
        </>
      )}

      {data.map((item) => {
        const { id, name, description, price } = item;
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{description}</p>
            <p>Price : {price}</p>
            <Link to={`/product/${id}`}>View Item</Link>
            <button onClick={() => cartHandler(item)}>Add To Cart</button>

            <button onClick={() => wishlistHandler(item)}>
              Add to Wishlist
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
