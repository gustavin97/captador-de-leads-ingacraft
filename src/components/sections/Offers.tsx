import { ArrowUpRight, Check } from "lucide-react";
import { formatPrice, offers, type ServiceId } from "../../data/offers";

export default function Offers({ onChoose }: { onChoose: (service: ServiceId) => void }) {
  return (
    <section className="offers section-padding" id="ofertas">
      <div className="container">
        <div className="offers-heading"><p className="section-kicker">BLACK NOVEMBER</p><div className="offers-heading-main"><h2>O projeto certo.<br /><span>O preço certo.</span></h2><p>Três caminhos para colocar seu negócio online. Escolha o que combina com seu momento.</p></div></div>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className={`offer-card offer-${offer.id}`} key={offer.id}>
              <div className="offer-card-header"><span className="offer-tag">{offer.label}</span></div>
              <div className="offer-card-main"><h3>{offer.title}</h3><p>{offer.description}</p><div className="offer-ideal">{offer.idealFor}</div></div>
              <div className="offer-divider" />
              <ul>{offer.points.map((point) => <li key={point}><Check size={16} />{point}</li>)}</ul>
              <div className="offer-card-bottom"><div className="offer-price"><span>VALOR BLACK NOVEMBER</span><strong>{formatPrice(offer.price)}</strong></div><button type="button" onClick={() => onChoose(offer.id)} aria-label={`${offer.ctaLabel} por ${formatPrice(offer.price)}`}><span>{offer.ctaLabel}</span><span className="offer-button-icon" aria-hidden="true"><ArrowUpRight size={21} /></span></button></div>
            </article>
          ))}
        </div>
        <p className="offers-note"><span>✳</span> Valores fechados para as ofertas anunciadas. O escopo de cada projeto é alinhado antes da contratação; necessidades extras são combinadas à parte.</p>
      </div>
    </section>
  );
}
