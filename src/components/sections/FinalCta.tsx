import { ArrowUpRight, Asterisk } from "lucide-react";

export default function FinalCta({ onContact }: { onContact: () => void }) {
  return (
    <section className="final-cta"><div className="container final-cta-inner"><Asterisk className="final-star" size={61} strokeWidth={1.5} /><div><p>BLACK NOVEMBER · INGACRAFT</p><h2>Seu próximo passo <em>começa aqui.</em></h2><span>Novembro inteiro para dar uma nova presença ao seu negócio.</span></div><button onClick={onContact} className="button button-dark">Quero meu projeto <ArrowUpRight size={20} /></button></div></section>
  );
}
