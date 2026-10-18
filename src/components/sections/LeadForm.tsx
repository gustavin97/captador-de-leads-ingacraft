import { useState, type FormEvent } from "react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { formatPrice, offers, type ServiceId } from "../../data/offers";
import { buildWhatsAppUrl, isValidBrazilianPhone } from "../../lib/lead";

type Props = {
  selectedService: ServiceId | "";
  onServiceChange: (service: ServiceId | "") => void;
};

export default function LeadForm({ selectedService, onServiceChange }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedService) {
      setError("Escolha o tipo de projeto que você procura.");
      return;
    }
    if (!isValidBrazilianPhone(phone)) {
      setError("Confira seu WhatsApp com DDD para continuarmos.");
      return;
    }
    setError("");
    window.location.assign(buildWhatsAppUrl({ name, phone, company, service: selectedService, details }));
  }

  return (
    <div className="lead-card">
      <div className="lead-card-top"><span className="live-indicator"><i /> AGENDA DE NOVEMBRO</span><span className="card-corner">↗</span></div>
      <h2>Seu próximo projeto começa <span>aqui.</span></h2>
      <p className="lead-card-intro">Conte o básico. A conversa continua no WhatsApp, sem compromisso.</p>
      <form onSubmit={submit} className="lead-form">
        <div className="field-row">
          <label>Seu nome<input type="text" name="name" autoComplete="name" placeholder="Como podemos te chamar?" value={name} onChange={(event) => setName(event.target.value)} required minLength={2} maxLength={80} /></label>
          <label>WhatsApp<input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="(44) 99999-9999" value={phone} onChange={(event) => setPhone(event.target.value)} required aria-invalid={!!error && error.includes("WhatsApp")} /></label>
        </div>
        <label>Nome da empresa ou negócio<input type="text" name="company" autoComplete="organization" placeholder="Qual é a sua marca?" value={company} onChange={(event) => setCompany(event.target.value)} required maxLength={100} /></label>
        <label>O que você precisa?<select name="service" required value={selectedService} onChange={(event) => onServiceChange(event.target.value as ServiceId | "")}><option value="">Selecione uma opção</option>{offers.map((offer) => <option value={offer.id} key={offer.id}>{offer.title} — {formatPrice(offer.price)}</option>)}</select></label>
        <label><span className="field-label">Conte um pouco mais <span className="optional">(opcional)</span></span><textarea name="details" rows={2} placeholder="Sua ideia, prazo ou alguma dúvida..." value={details} onChange={(event) => setDetails(event.target.value)} maxLength={600} /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="form-submit" type="submit">Conversar pelo WhatsApp <ArrowUpRight size={20} /></button>
        <p className="form-note"><LockKeyhole size={13} /> O WhatsApp abrirá com sua mensagem pronta. Envie-a para concluir o contato.</p>
      </form>
    </div>
  );
}
