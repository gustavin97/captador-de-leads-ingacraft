export type ServiceId = "site" | "landing" | "ecommerce";

export type Offer = {
  id: ServiceId;
  title: string;
  price: number;
  deadline: string;
  description: string;
  idealFor: string;
  points: string[];
  label: string;
  ctaLabel: string;
};

export const offers: Offer[] = [
  {
    id: "site",
    title: "Site institucional",
    price: 998.9,
    deadline: "3 dias",
    description: "Um site completo para apresentar sua empresa com clareza e facilitar o primeiro contato.",
    idealFor: "Para quem quer ser encontrado e passar confiança.",
    points: [
      "Mais de 3 páginas",
      "Automação de formulário de leads direto no WhatsApp",
      "Botões de contato",
      "Domínio profissional",
      "Design empresarial moderno",
    ],
    label: "Mais procurado",
    ctaLabel: "Quero meu site",
  },
  {
    id: "landing",
    title: "Landing page",
    price: 598.9,
    deadline: "1 dia",
    description: "Um site de conversão focado em apresentar sua oferta e levar o visitante à próxima ação.",
    idealFor: "Para campanhas, lançamentos e captação de contatos.",
    points: ["Site de conversão", "Página única", "Identidade visual do seu negócio", "Botões do WhatsApp"],
    label: "Foco em conversão",
    ctaLabel: "Quero minha landing page",
  },
  {
    id: "ecommerce",
    title: "E-commerce, loja virtual",
    price: 798.9,
    deadline: "7 dias",
    description: "Uma loja virtual completa para expor seus produtos e vender online todos os dias.",
    idealFor: "Para quem quer vender produtos pela internet.",
    points: [
      "Venda 24 horas por dia, 7 dias por semana",
      "Catálogo de produtos organizado por categorias",
      "Carrinho de compras e checkout simples",
      "Pagamento online integrado",
      "Alcance clientes além da sua região",
    ],
    label: "Sua loja online",
    ctaLabel: "Quero meu e-commerce",
  },
];

export const serviceName = (id: ServiceId) => offers.find((offer) => offer.id === id)?.title ?? id;

export const formatPrice = (value: number) => new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
}).format(value);
