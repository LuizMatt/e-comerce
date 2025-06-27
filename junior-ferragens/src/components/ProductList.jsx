import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);
  

  return (
    <div className="product-list">
      {products.map((product) => {
        console.log(product); 

        return (
          <Card
            key={product.id}
            title={product.name}
            description={product.description}
            imageUrl={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
