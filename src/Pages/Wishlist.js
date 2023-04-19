import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

export const Wishlist = () => {
  const { wishlist, wishlistRemoveHandler } = useContext(ProductContext);
  return (
    <div>
      <h3>Wishlist</h3>
      <h3>Item in Wishlist : {wishlist.length}</h3>
      {wishlist.map((item) => (
        <>
          <p key={item.id}>{item.name}</p>
          <button onClick={() => wishlistRemoveHandler(item)}>
            Remove from Wishlist
          </button>
          <hr />
        </>
      ))}
    </div>
  );
};
