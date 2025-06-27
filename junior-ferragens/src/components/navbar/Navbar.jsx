import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
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

        <button className="cart-button">
          <FaShoppingCart />
        </button>

        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
