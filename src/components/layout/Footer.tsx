import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../../lib/lead";
import Brand from "../ui/Brand";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pela Black November da IngaCraft e quero conversar sobre meu projeto.")}`;

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <span className="footer-kicker"><i /> SEU PROJETO COMEÇA AQUI</span>
          <Brand inverse />
          <p>Ideias bem construídas <strong>encontram espaço para crescer.</strong></p>
          <a className="footer-contact" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a IngaCraft <ArrowUpRight size={20} /></a>
        </div>
        <div className="footer-navigation">
          <nav className="footer-links" aria-label="Links do rodapé">
            <h2>Explore</h2>
            <a href="#ofertas">Ofertas <ArrowUpRight size={16} /></a>
            <a href="#como-funciona">Como funciona <ArrowUpRight size={16} /></a>
            <a href="#faq">Perguntas frequentes <ArrowUpRight size={16} /></a>
          </nav>
          <div className="footer-info">
            <h2>Vamos conversar</h2>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> +55 (44) 9965-9801</a>
            <a href="https://ingacraft.com.br/" target="_blank" rel="noreferrer">Conheça a IngaCraft <ArrowUpRight size={16} /></a>
            <span>Maringá, Paraná</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} INGACRAFT - TECNOLOGIA. Todos os direitos reservados.</span>
        <span>Black November · Maringá, PR</span>
      </div>
    </footer>
  );
}
