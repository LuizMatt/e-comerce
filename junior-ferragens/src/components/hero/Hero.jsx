import "./Hero.css";
import produtosIcon from "../../assets/produtos.svg";
import supportIcon from "../../assets/support.svg";
import truckIcon from "../../assets/truck.svg";
import percentIcon from "../../assets/percent.svg";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import lupa from "../../assets/lupa.svg";
import carrinho from "../../assets/carrinho.svg";
import speedTruck from "../../assets/speedTruck.svg";

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
      <section className="como-funciona">
        <div className="como-funciona-content">
          <h2>Como funciona?</h2>
          <p>
            Navegue por nossa seleção de ferramentas, escolha as que mais
            combinam com suas necessidades e aproveite nossos preços
            competitivos. Compre online e receba no conforto da sua casa.
          </p>
        </div>

        <div className="cards-container">
          <div className="info-box">
            <img src={lupa} alt="Escolha o produto" />
            <h3>Escolha o produto</h3>
            <p>
              Navegue pelo nosso catálogo e selecione o produto ideal para sua
              necessidade
            </p>
          </div>

          <div className="info-box">
            <img src={carrinho} alt="Adicione ao carrinho" />
            <h3>Adicione ao carrinho</h3>
            <p>
              Adicione o produto ao carrinho e finalize sua compra de forma
              rápida e segura
            </p>
          </div>

          <div className="info-box">
            <img src={speedTruck} alt="Receba o pedido" />
            <h3>Receba o pedido</h3>
            <p>
              Receba seu pedido no conforto da sua casa com nossa entrega rápida
              e eficiente
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
