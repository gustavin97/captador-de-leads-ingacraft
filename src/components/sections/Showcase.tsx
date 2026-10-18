import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const projects = [
  { name: "FPR Arquitetura", desktop: "/fpr.png", mobile: "/fprmobile.png" },
  { name: "Arbórea", desktop: "/arborea.png", mobile: "/ar.png" },
];

const stripPhrases = [
  "BLACK NOVEMBER",
  "50% OFF",
  "O MÊS INTEIRO",
  "SEU SITE PELA METADE DO PREÇO",
  "SÓ EM NOVEMBRO",
  "TIRE SEU PROJETO DO PAPEL",
];

export default function Showcase({ onContact }: { onContact: () => void }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % projects.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="showcase section-padding">
      <div className="container showcase-grid">
        <div className="showcase-copy">
          <p className="section-kicker section-kicker-light">BLACK NOVEMBER</p>
          <p className="showcase-off"><strong>50% OFF</strong><span>em todos os projetos durante novembro</span></p>
          <h2><span>Seu negócio na internet</span> <span>pela metade do preço.</span></h2>
          <p className="showcase-lede">Em novembro, site institucional, landing page e loja virtual saem com 50% OFF. Projetos como este, feitos para passar confiança e trazer clientes.</p>
          <ul className="showcase-list">
            <li><Check size={16} /> 50% OFF em todos os projetos</li>
            <li><Check size={16} /> Válido durante todo o mês de novembro</li>
            <li><Check size={16} /> Funciona no computador e no celular</li>
          </ul>
          <button onClick={onContact} className="button button-lime">Quero meu projeto com 50% OFF <ArrowUpRight size={19} /></button>
        </div>
        <div className="showcase-art">
          <div className="showcase-orbit orbit-one" /><div className="showcase-orbit orbit-two" />
          <div className="desktop-preview">
            <div className="desktop-chrome"><span /><span /><span /><div>seunegocio.com.br</div></div>
            <div className="desktop-screen">
              {projects.map((project, index) => (
                <img key={project.name} className={`desktop-content ${index === active ? "is-active" : ""}`} src={project.desktop} alt={`Site da ${project.name} exibido no computador`} aria-hidden={index !== active} loading="lazy" />
              ))}
            </div>
          </div>
          <div className="phone-preview">
            <div className="phone-notch" />
            <div className="phone-screen">
              {projects.map((project, index) => (
                <img key={project.name} className={`phone-content ${index === active ? "is-active" : ""}`} src={project.mobile} alt={`Site da ${project.name} exibido no celular`} aria-hidden={index !== active} loading="lazy" />
              ))}
            </div>
          </div>
          <span className="showcase-sticker" aria-hidden="true"><strong>50%</strong>OFF</span>
          <span className="preview-label">EXEMPLO DE PROJETO</span>
        </div>
      </div>
      <div className="showcase-strip" role="marquee" aria-label={stripPhrases.join(", ")}>
        <div className="showcase-strip-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="showcase-strip-group" key={copy}>
              {[...stripPhrases, ...stripPhrases].map((phrase, index) => (
                <span key={index}>{phrase}<i>✳</i></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
