import { ArrowUpRight, Globe2, MousePointerClick, ShoppingBag } from "lucide-react";

const reasons = [
  { number: "01", icon: Globe2, title: "Ser encontrado", text: "Quando alguém busca sua empresa, uma presença própria ajuda a mostrar quem você é e como entrar em contato." },
  { number: "02", icon: MousePointerClick, title: "Mostrar o que importa", text: "Uma página bem organizada apresenta sua oferta sem depender de uma sequência de mensagens para explicar o básico." },
  { number: "03", icon: ShoppingBag, title: "Facilitar a próxima ação", text: "Pedir um orçamento, tirar uma dúvida ou conhecer seus produtos pode ficar a um clique de distância." },
];

export default function Reasons() {
  return (
    <section className="reasons section-padding" id="por-que">
      <div className="container">
        <div className="section-heading reasons-heading">
          <div><p className="section-kicker"><span>01</span> / O PRIMEIRO CONTATO CONTA</p><h2>Seu cliente pesquisa você <span className="orange-text">antes</span> de falar com você.</h2></div>
          <p>O que ele encontra nesse momento pode aproximar ou afastar. Dê ao seu negócio um espaço claro para se apresentar.</p>
        </div>
        <div className="reasons-grid">
          {reasons.map(({ number, icon: Icon, title, text }) => (
            <article className="reason-card" key={number}>
              <div className="reason-top"><span>{number} / 03</span><Icon size={25} strokeWidth={1.7} /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
              <ArrowUpRight className="reason-arrow" size={20} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
