import { ClipboardCheck, MessageCircle, MousePointerClick } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Escolha o formato", text: "Site, landing page ou e-commerce: comece pela solução que você precisa agora." },
  { icon: MessageCircle, title: "Conte sua ideia", text: "Preencha o formulário e envie a mensagem pronta para o WhatsApp da IngaCraft." },
  { icon: ClipboardCheck, title: "Alinhe os detalhes", text: "Conversamos sobre conteúdo, escopo e prazo para definir os próximos passos." },
];

export default function Process() {
  return (
    <section className="process section-padding" id="como-funciona">
      <div className="container">
        <div className="process-top"><p className="section-kicker">SIMPLES ASSIM</p><h2>Três passos para <mark>tirar do papel.</mark></h2></div>
        <div className="process-grid">{steps.map(({ icon: Icon, title, text }) => <article className="process-step" key={title}><div className="process-step-top"><Icon size={29} strokeWidth={1.8} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  );
}
