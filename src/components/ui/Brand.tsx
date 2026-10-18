import { ArrowUpRight } from "lucide-react";

export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand ${inverse ? "brand-inverse" : ""}`} href="#inicio" aria-label="IngaCraft Tecnologia, voltar ao início">
      <span className="brand-mark"><ArrowUpRight size={20} strokeWidth={2.8} /></span>
      <span className="brand-word">INGA<span>CRAFT</span><small> - TECNOLOGIA</small></span>
    </a>
  );
}
