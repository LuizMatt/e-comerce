import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";
import CartOverlay from "../cartOverlay/CartOverlay";
import Products from "../../pages/produtos/Produtos";

const Navbar = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="header">
      <Link to="/" className="header-logo">
        <span className="logo-highlight">Junior</span> ferragens
      </Link>

      <nav className="navbar" aria-label="Main navigation">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Início</Link>
          </li>
          <li className="navbar-item">
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="search-input"
        />

        <button onClick={() => setShowCart(true)} className="cart-button">
          <FaShoppingCart />
        </button>

        <Link to="/#" className="login-button">
          Login
        </Link>
      </div>
      {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
    </nav>
  );
};

export default Navbar;
