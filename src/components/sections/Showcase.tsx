import { ArrowUpRight, Check } from "lucide-react";

export default function Showcase({ onContact }: { onContact: () => void }) {
  return (
    <section className="showcase section-padding">
      <div className="container showcase-grid">
        <div className="showcase-copy">
          <p className="section-kicker section-kicker-light">BLACK NOVEMBER · 50% OFF</p>
          <h2>Novembro inteiro com 50% OFF <span>para colocar seu negócio na internet.</span></h2>
          <p className="showcase-lede">Durante todo o mês de novembro, seu site, landing page ou loja virtual sai pela metade do preço. Uma presença digital profissional para atrair clientes e vender mais.</p>
          <ul className="showcase-list">
            <li><Check size={16} /> 50% OFF em todos os projetos</li>
            <li><Check size={16} /> Promoção válida o mês inteiro</li>
            <li><Check size={16} /> Visual profissional para o seu negócio</li>
          </ul>
          <button onClick={onContact} className="button button-lime">Quero meu projeto com 50% OFF <ArrowUpRight size={19} /></button>
        </div>
        <div className="showcase-art">
          <div className="showcase-orbit orbit-one" /><div className="showcase-orbit orbit-two" />
          <div className="desktop-preview">
            <div className="desktop-chrome"><span /><span /><span /><div>seunegocio.com.br</div></div>
            <img className="desktop-content" src="/fpr.png" alt="Site da FPR Arquitetura exibido no computador" width="1902" height="940" loading="lazy" />
          </div>
          <div className="phone-preview"><div className="phone-notch" /><img className="phone-content" src="/fprmobile.png" alt="Site da FPR Arquitetura exibido no celular" width="358" height="597" loading="lazy" /></div>
          <span className="preview-label">EXEMPLO DE PROJETO</span>
        </div>
      </div>
    </section>
  );
}
