import { serviceName, type ServiceId } from "../data/offers";

export const WHATSAPP_NUMBER = "5544999830226";

export type Lead = {
  name: string;
  phone: string;
  company: string;
  service: ServiceId;
  details: string;
};

export function isValidBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  const national = digits.startsWith("55") && digits.length > 11 ? digits.slice(2) : digits;
  return /^\d{2}9?\d{8}$/.test(national);
}

export function buildWhatsAppUrl(lead: Lead) {
  const lines = [
    "Olá! Vim pela campanha Black November da IngaCraft e quero conversar sobre um projeto.",
    "",
    `Nome: ${lead.name.trim()}`,
    `WhatsApp: ${lead.phone.trim()}`,
    `Negócio: ${lead.company.trim()}`,
    `Interesse: ${serviceName(lead.service)}`,
    ...(lead.details.trim() ? [`Sobre o projeto: ${lead.details.trim()}`] : []),
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
