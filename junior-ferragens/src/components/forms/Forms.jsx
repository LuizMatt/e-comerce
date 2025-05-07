import React from "react";
import { useState } from "react";
import "./Forms.css";

const Forms = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleNameChange = (e) => {
    setNome(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");

    if (rawValue.length > 11) {
      alert("O número de telefone deve ter no máximo 11 dígitos.");
      return;
    }

    setTelefone(rawValue);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const allowedDomains = ["gmail.com", "hotmail.com", "outlook.com"];

    if (email.includes("@")) {
      const domain = email.split("@")[1];

      if (allowedDomains.includes(domain)) {
        setEmail(email);
      } else {
        alert(
          "Domínio de e-mail não permitido. Use Gmail, Hotmail ou Outlook."
        );
      }
    }
  };

  const handleCpfChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");

    if (rawValue.length <= 11) {
      setCpf(rawValue);
    }
  };

  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  const resetForm = () => {
    setNome("");
    setTelefone("");
    setEmail("");
    setCpf("");
    setSenha("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome" className="form-label">
            Nome:{" "}
          </label>
          <input
            type="text"
            name="nome"
            className="form-input"
            required
            placeholder="Digite seu nome completo: "
            onChange={handleNameChange}
            value={nome}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone" className="form-label">
            Telefone:{" "}
          </label>
          <input
            type="tel"
            name="telefone"
            className="form-input"
            required
            placeholder="(xx) xxxxx-xxxx"
            maxLength={11}
            onChange={handlePhoneChange}
            value={telefone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-mail:{" "}
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            required
            placeholder="Digite seu e-mail: "
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf" className="form-label">
            Informe seu CPF:{" "}
          </label>
          <input
            type="text"
            name="cpf"
            className="form-input"
            required
            placeholder="Digite seu CPF:"
            onChange={handleCpfChange}
            value={cpf}
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha" className="form-label">
            Senha:{" "}
          </label>
          <input
            type="password"
            name="senha"
            className="form-input"
            required
            placeholder="Digite sua senha: "
            onChange={handlePasswordChange}
            value={senha}
          />
        </div>

        <button type="submit" className="form-button">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default Forms;
