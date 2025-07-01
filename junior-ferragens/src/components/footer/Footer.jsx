import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Sobre Nós</h3>
          <p>
            Oferecemos ferramentas de qualidade para profissionais e
            entusiastas. Atendimento dedicado e entrega em todo o Brasil.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} JuniorFerragens. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
