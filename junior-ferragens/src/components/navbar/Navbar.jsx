import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <a href="#" className="header-logo">
        JuniorFerragens
      </a>

      <nav className="navbar">
        <a href="#" className="nav-link">
          Meus pedidos
        </a>
        <a href="#" className="nav-link">
          Fale conosco
        </a>
        <a href="#" className="nav-link">
          Carrinho
        </a>
        <a href="#" className="nav-link">
          Criar conta
        </a>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;

