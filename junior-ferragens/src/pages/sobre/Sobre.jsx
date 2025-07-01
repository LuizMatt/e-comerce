import React from "react";
import "./Sobre.css"; 

const Sobre = () => {
  return (
    <div>
      <section className="sobre-container">
        <h2>Sobre JuniorFerragens</h2>
        <p>
          Há mais de 20 anos trabalhando com a venda de ferramentas e artigos de
          manutenção.
        </p>
      </section>
      <div className="sobre-content">
        <h3>Um jornada de dedicação e qualidade</h3>
        <p>
          A Junior Ferragens nasceu no ano 2000 com um propósito claro: oferecer
          ferramentas e produtos de qualidade que atendam às necessidades reais
          de profissionais e consumidores.
        </p>
        <p>
          Começamos como uma loja familiar, com atendimento próximo e dedicação
          total aos nossos clientes. Ao longo dos anos, nos tornamos referência
          no mercado de ferragens, atendendo desde pequenos empreendedores até
          grandes empresas em todo o Brasil.
        </p>
        <p>
          Nossa paixão por eficiência, inovação e um atendimento humanizado nos
          levou a construir um portfólio completo de produtos e soluções, sempre
          priorizando a confiança e a satisfação de quem compra com a gente.
        </p>
      </div>
      <div className="sobre-cards">
        <div className="card-sobre">
          <h2>20+</h2>
          <p>Anos de experiência</p>
        </div>
        <div className="card-sobre">
          <h2>500+</h2>
          <p>Clientes atendidos</p>
        </div>
        <div className="card-sobre">
          <h2>1000+</h2>
          <p>Produtos disponíveis</p>
        </div>
        <div className="card-sobre">
          <h2>93%</h2>
          <p>Satisfação dos clientes</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
