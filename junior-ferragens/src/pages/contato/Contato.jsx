import React from "react";
import "./Contato.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export const Contato = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contato-container">
      <div className="informacoes-contato">
        <h2>Informações de contato</h2>

        <div className="info">
          <FaPhoneAlt size={24} style={{ marginRight: "8px" }} />
          <div>
            <h3>Telefone</h3>
            <p>(83)99999-9999</p>
          </div>
        </div>

        <div className="info">
          <FaEnvelope size={24} style={{ marginRight: "8px" }} />
          <div>
            <h3>E-mail</h3>
            <p>contato@juniorferragens.com</p>
          </div>
        </div>

        <div className="info">
          <FaMapMarkerAlt size={24} style={{ marginRight: "8px" }} />
          <div>
            <h3>Endereço</h3>
            <p>Campina Grande - PB</p>
          </div>
        </div>

        <div className="info">
          <FaClock size={24} style={{ marginRight: "8px" }} />
          <div>
            <h3>Horário de atendimento</h3>
            <p>Segunda à Sexta: 8h às 18h</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Solicitar orçamento</h2>

        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Digite seu telefone"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="produto">Produto de interesse:</label>
          <input
            type="text"
            id="produto"
            name="produto"
            placeholder="Ex: Parafusos, dobradiças..."
            required
          />
        </div>

        <button type="submit">Enviar solicitação</button>
      </form>
    </section>
  );
};
