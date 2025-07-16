import React, { useEffect, useState } from "react";
import "./CartOverlay.css";
import { incrementItem, decrementItem } from "../../utils/cart";

const CartOverlay = ({ onClose }) => {
  const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  const loadCart = () => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  };

  useEffect(() => {
    loadCart();
    window.addEventListener("storage", loadCart);
    setVisible(true);
    return () => window.removeEventListener("storage", loadCart);
  }, []);

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleIncrement = (id) => {
    incrementItem(id);
    loadCart();
  };

  const handleDecrement = (id) => {
    decrementItem(id);
    loadCart();
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    localStorage.removeItem("cart");
    alert("Pedido finalizado com sucesso!");
    onClose();
  };

  return (
    <div
      className={`cart-overlay ${visible ? "visible" : ""} ${
        exiting ? "exiting" : ""
      }`}
    >
      <div className="cart-container">
        <div className="cart-header">
          <h2>Carrinho</h2>
          <button className="cart-close" onClick={handleClose}>
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="cart-empty">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img
                      src={`http://localhost:3000${item.imageUrl}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="cart-item-details">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">
                      {parseFloat(item.price).toFixed(2)} pts
                    </p>
                    <div className="item-quantity">
                      <button onClick={() => handleDecrement(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                Total: <strong>{total.toFixed(2)} pts</strong>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>
                Finalizar pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;
