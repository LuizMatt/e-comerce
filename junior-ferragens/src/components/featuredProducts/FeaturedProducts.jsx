import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data.slice(0, 6)))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div className="featured-products">
      <h2>Produtos em Destaque</h2>
      <div className="product-list">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            description={product.description}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
