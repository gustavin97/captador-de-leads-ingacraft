import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import LeadForm from "./LeadForm";
import type { ServiceId } from "../../data/offers";

type Props = {
  selectedService: ServiceId | "";
  onServiceChange: (service: ServiceId | "") => void;
};

export default function Hero({ selectedService, onServiceChange }: Props) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> CAMPANHA DE NOVEMBRO 2026</div>
          <h1>Seu negócio merece <span className="hero-underline">um site que</span> <em>faz acontecer<span className="orange-period">.</span></em></h1>
          <p className="hero-lede">Chegou a Black November da IngaCraft. Site profissional, landing page ou loja virtual com um preço para tirar seu projeto do papel.</p>
          <div className="hero-actions">
            <a className="button button-orange" href="#ofertas">Conhecer as ofertas <ArrowUpRight size={19} /></a>
            <a className="text-link" href="#por-que">Entenda melhor <ArrowDownRight size={18} /></a>
          </div>
          <div className="hero-proof" aria-label="Destaques da campanha">
            <span><Check size={16} /> Preços fechados</span>
            <span><Check size={16} /> Novembro inteiro</span>
            <span><Check size={16} /> Fale direto com a gente</span>
          </div>
          <div className="hero-bottom-mark">BLACK<br /><strong>NOVEMBER</strong><span>2026 ↗</span></div>
        </div>
        <div className="hero-form-wrap" id="formulario">
          <span className="hero-form-sticker">VAMOS CONVERSAR? <ArrowDownRight size={17} /></span>
          <LeadForm selectedService={selectedService} onServiceChange={onServiceChange} />
        </div>
      </div>
      <div className="hero-edge container"><span>01 / 05</span><span>Role para descobrir <ArrowDownRight size={17} /></span></div>
    </section>
  );
}
