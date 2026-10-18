export type ServiceId = "site" | "landing" | "ecommerce";

export type Offer = {
  id: ServiceId;
  number: string;
  title: string;
  price: number;
  description: string;
  idealFor: string;
  points: string[];
  label: string;
};

export const offers: Offer[] = [
  {
    id: "site",
    number: "01",
    title: "Site profissional",
    price: 500,
    description: "Um lugar para apresentar sua empresa com clareza e facilitar o primeiro contato.",
    idealFor: "Para quem quer ser encontrado e passar confiança.",
    points: ["Sua marca em um endereço próprio", "Informações essenciais em um só lugar", "Caminho claro para o contato"],
    label: "Mais procurado",
  },
  {
    id: "landing",
    number: "02",
    title: "Landing page",
    price: 600,
    description: "Uma página focada em apresentar uma oferta e conduzir o visitante à próxima ação.",
    idealFor: "Para campanhas, lançamentos e captação de contatos.",
    points: ["Mensagem centrada na sua oferta", "Jornada direta até a ação", "Boa base para campanhas"],
    label: "Foco em conversão",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce",
    price: 800,
    description: "Uma loja virtual para organizar seus produtos e começar a receber pedidos online.",
    idealFor: "Para quem quer vender produtos pela internet.",
    points: ["Vitrine para seus produtos", "Organização por categorias", "Experiência de compra mais simples"],
    label: "Sua loja online",
  },
];

export const serviceName = (id: ServiceId) => offers.find((offer) => offer.id === id)?.title ?? id;

export const formatPrice = (value: number) => new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
}).format(value);
