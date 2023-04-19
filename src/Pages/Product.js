import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";

export const Product = () => {
  const { productId } = useParams();
  const { data } = useContext(ProductContext);

  const productFinder = data.find((item) => {
    return item.id.toString() === productId;
  });

  return (
    <div>
      <h3>About</h3>
      <p>Name : {productFinder?.name}</p>
      <p>Desciption : {productFinder?.description}</p>
      <p>Quantity : {productFinder?.quantity}</p>
      <p>Category : {productFinder?.category}</p>
      <p>Brand : {productFinder?.brand}</p>
    </div>
  );
};
