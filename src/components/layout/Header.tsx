import { ArrowUpRight } from "lucide-react";
import Brand from "../ui/Brand";

export default function Header({ onContact }: { onContact: () => void }) {
  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        <span>BLACK NOVEMBER INGA<span className="announcement-small">CRAFT</span></span>
        <span className="announcement-separator">✳</span>
        <span>OFERTAS DURANTE TODO O MÊS</span>
        <span className="announcement-dot" />
      </div>
      <header className="site-header" id="inicio">
        <div className="container header-inner">
          <Brand />
          <nav className="header-nav" aria-label="Navegação principal">
            <a href="#ofertas">Ofertas</a>
            <a href="#por-que">Por que ter um site?</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <button className="header-cta" onClick={onContact}>Quero meu projeto <ArrowUpRight size={16} /></button>
        </div>
      </header>
    </>
  );
}
