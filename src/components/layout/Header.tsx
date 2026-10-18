import { ArrowUpRight } from "lucide-react";
import Brand from "../ui/Brand";

export default function Header({ onContact }: { onContact: () => void }) {
  return (
    <>
      <div className="announcement" role="marquee" aria-label="Black November IngaCraft: 50% OFF, válido até 30 de novembro de 2026">
        <div className="announcement-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="announcement-group" key={copy}>
              {[0, 1, 2].map((item) => (
                <span className="announcement-item" key={item}>
                  <span className="announcement-dot" />
                  <span>BLACK NOVEMBER INGACRAFT</span>
                  <span className="announcement-separator">✳</span>
                  <strong className="announcement-off">50% OFF</strong>
                  <span className="announcement-separator">✳</span>
                  <span>VÁLIDO ATÉ 30/11/2026</span>
                </span>
              ))}
            </div>
          ))}
        </div>
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
