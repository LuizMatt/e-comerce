import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import "./Produtos.css";
import { addToCart } from "../../utils/cart";

const Products = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-header">
          <div className="products-title">Produtos disponíveis</div>
          <div className="products-count">
            {produtos.length} produtos encontrados
          </div>
        </div>

        <div className="products-grid">
          {produtos.map((produto) => (
            <Card
              id={produto.id}
              key={produto.id}
              title={produto.name}
              description={produto.description}
              imageUrl={produto.image}
              price={produto.price}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
