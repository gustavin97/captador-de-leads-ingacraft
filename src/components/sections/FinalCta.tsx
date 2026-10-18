import { ArrowUpRight, Asterisk } from "lucide-react";
import { CAMPAIGN_END } from "../../data/offers";

export default function FinalCta({ onContact }: { onContact: () => void }) {
  return (
    <section className="final-cta"><div className="container final-cta-inner"><Asterisk className="final-star" size={61} strokeWidth={1.5} /><div><p>BLACK NOVEMBER · INGACRAFT</p><h2>Seu próximo passo <em>começa aqui.</em></h2><span>Condição especial válida até {CAMPAIGN_END}. Solicite seu orçamento antes do encerramento da campanha.</span></div><button onClick={onContact} className="button button-dark">Quero meu projeto <ArrowUpRight size={20} /></button></div></section>
  );
}
