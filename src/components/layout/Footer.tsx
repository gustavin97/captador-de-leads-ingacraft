import { ArrowUpRight } from "lucide-react";
import Brand from "../ui/Brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Brand inverse />
          <p>Ideias bem construídas encontram espaço para crescer.</p>
        </div>
        <div className="footer-links">
          <a href="#ofertas">Ofertas</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Perguntas frequentes</a>
          <a href="https://ingacraft.com.br/" target="_blank" rel="noreferrer">Site IngaCraft <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} IngaCraft. Todos os direitos reservados.</span>
        <span>Black November · Maringá, PR</span>
      </div>
    </footer>
  );
}
