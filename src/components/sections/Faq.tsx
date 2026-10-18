import { Plus } from "lucide-react";
import { faq } from "../../data/faq";

export default function Faq() {
  return (
    <section className="faq section-padding" id="faq">
      <div className="container faq-grid"><div className="faq-intro"><p className="section-kicker"><span>05</span> / PERGUNTAS FREQUENTES</p><h2>Ficou alguma <span>dúvida?</span></h2><p>Aqui estão as respostas para começar. Se precisar, a gente conversa sobre o seu caso.</p></div><div className="faq-list">{faq.map((item, index) => <details key={item.question}><summary><span className="faq-number">0{index + 1}</span><span>{item.question}</span><Plus size={20} /></summary><p>{item.answer}</p></details>)}</div></div>
    </section>
  );
}
