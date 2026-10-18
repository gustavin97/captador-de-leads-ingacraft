import { useState } from "react";
import type { ServiceId } from "../data/offers";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Reasons from "../components/sections/Reasons";
import Showcase from "../components/sections/Showcase";
import Offers from "../components/sections/Offers";
import Process from "../components/sections/Process";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";

export default function Index() {
  const [selectedService, setSelectedService] = useState<ServiceId | "">("");

  function goToForm() {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function chooseService(service: ServiceId) {
    setSelectedService(service);
    goToForm();
  }

  return (
    <>
      <Header onContact={goToForm} />
      <main>
        <Hero selectedService={selectedService} onServiceChange={setSelectedService} />
        <Reasons />
        <Showcase onContact={goToForm} />
        <Offers onChoose={chooseService} />
        <Process />
        <Faq />
        <FinalCta onContact={goToForm} />
      </main>
      <Footer />
    </>
  );
}
