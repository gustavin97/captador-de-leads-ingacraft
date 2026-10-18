import { ArrowDownRight } from "lucide-react";

const steps = [
  { number: "01", title: "Escolha o formato", text: "Site, landing page ou e-commerce: comece pela solução que você precisa agora." },
  { number: "02", title: "Conte sua ideia", text: "Preencha o formulário e envie a mensagem pronta para o WhatsApp da IngaCraft." },
  { number: "03", title: "Alinhe os detalhes", text: "Conversamos sobre conteúdo, escopo e prazo para definir os próximos passos." },
];

export default function Process() {
  return (
    <section className="process section-padding" id="como-funciona">
      <div className="container">
        <div className="process-top"><p className="section-kicker"><span>04</span> / SIMPLES ASSIM</p><h2>Três passos para <mark>tirar do papel.</mark></h2></div>
        <div className="process-grid">{steps.map((step, index) => <article className="process-step" key={step.number}><div className="process-step-top"><span>{step.number}</span>{index < 2 && <ArrowDownRight size={27} />}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div>
    </section>
  );
}
