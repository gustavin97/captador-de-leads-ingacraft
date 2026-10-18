import { ArrowUpRight, Check } from "lucide-react";

export default function Showcase({ onContact }: { onContact: () => void }) {
  return (
    <section className="showcase section-padding">
      <div className="container showcase-grid">
        <div className="showcase-copy">
          <p className="section-kicker section-kicker-light">IDEIA BOA PRECISA APARECER</p>
          <h2>Uma página bonita é só o começo. <span>Ela precisa fazer sentido para quem chega.</span></h2>
          <p className="showcase-lede">Organizamos sua presença digital para que a mensagem fique clara, a navegação seja simples e o próximo passo apareça no momento certo.</p>
          <ul className="showcase-list">
            <li><Check size={16} /> Sua oferta em destaque</li>
            <li><Check size={16} /> Visual alinhado ao seu negócio</li>
            <li><Check size={16} /> Contato fácil de encontrar</li>
          </ul>
          <button onClick={onContact} className="button button-lime">Quero conversar sobre meu site <ArrowUpRight size={19} /></button>
        </div>
        <div className="showcase-art" aria-label="Exemplo ilustrativo de um site exibido em computador e celular">
          <div className="showcase-orbit orbit-one" /><div className="showcase-orbit orbit-two" />
          <div className="desktop-preview">
            <div className="desktop-chrome"><span /><span /><span /><div>seunegocio.com.br</div></div>
            <div className="desktop-content">
              <div className="mock-nav"><b>SUA MARCA<span>✳</span></b><i>Sobre &nbsp;&nbsp; Serviços &nbsp;&nbsp; Contato</i><span>Fale com a gente ↗</span></div>
              <div className="mock-hero"><div className="mock-hero-copy"><small>IDEIAS QUE MOVEM</small><strong>Uma presença<br />que faz <em>diferença.</em></strong><p>Seu negócio apresentado com clareza, personalidade e um próximo passo.</p><span>Conheça mais ↗</span></div><div className="mock-visual"><div className="mock-visual-circle" /><div className="mock-visual-line" /><span>SEU<br />MUNDO<br />AQUI.</span></div></div>
              <div className="mock-bottom"><span>ESTRATÉGIA</span><span>DESIGN</span><span>CONEXÃO</span></div>
            </div>
          </div>
          <div className="phone-preview"><div className="phone-notch" /><div className="phone-content"><b>SUA MARCA<span>✳</span></b><div className="phone-image"><i /></div><small>UM NOVO JEITO DE APARECER</small><strong>Sua marca,<br /><em>seu espaço.</em></strong><span>Começar agora ↗</span></div></div>
          <span className="preview-label">EXEMPLO VISUAL ILUSTRATIVO</span>
        </div>
      </div>
    </section>
  );
}
