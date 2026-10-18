import { Plus } from "lucide-react";
import { faq } from "../../data/faq";

export default function Faq() {
  return (
    <section className="faq section-padding" id="faq">
      <div className="container faq-grid"><div className="faq-intro"><p className="section-kicker">PERGUNTAS FREQUENTES</p><h2>Ficou alguma <span>dúvida?</span></h2><p>Aqui estão as respostas para começar. Se precisar, a gente conversa sobre o seu caso.</p></div><div className="faq-list">{faq.map((item) => <details key={item.question}><summary><span>{item.question}</span><Plus size={20} /></summary><p>{item.answer}</p></details>)}</div></div>
    </section>
  );
}
