import "./Hero.css";
import produtosIcon from "../../assets/produtos.svg";
import supportIcon from "../../assets/support.svg";
import truckIcon from "../../assets/truck.svg";
import percentIcon from "../../assets/percent.svg";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Ferramentas para qualquer ocasião!</h1>
          <p>
            Soluções em ferramentas para o dia a dia, profissionais e
            indústrias. Chaves, furadeiras, kits completos e acessórios de
            qualidade para todos os níveis de uso. Atendimento rápido e produtos
            que facilitam sua rotina.
          </p>
        </div>

        <div className="hero-benefits">
          <div className="benefit">
            <img src={produtosIcon} alt="Produtos selecionados" />
            <span>Produtos selecionados</span>
          </div>
          <div className="benefit">
            <img src={supportIcon} alt="Atendimento humanizado" />
            <span>Atendimento humanizado</span>
          </div>
          <div className="benefit">
            <img src={truckIcon} alt="Entrega rápida" />
            <span>Entrega rápida</span>
          </div>
          <div className="benefit">
            <img src={percentIcon} alt="Descontos progressivos" />
            <span>Descontos progressivos</span>
          </div>
        </div>
      </section>

      <section className="featured-container">
        <FeaturedProducts />
      </section>
    </>
  );
};

export default Hero;
