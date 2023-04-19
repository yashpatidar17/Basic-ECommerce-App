import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

export const Cart = () => {
  const { cart, cartRemoveHandler } = useContext(ProductContext);
  console.log(cart);
  return (
    <div>
      <h3>Cart </h3>
      <h3>Item in Cart :{cart.length}</h3>
      {cart.map((item) => {
        const { id, name, description, price } = item;
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{description}</p>
            <p>Price : {price}</p>
            <button onClick={() => cartRemoveHandler(item)}>
              Remove From Cart
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
