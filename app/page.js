import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Testimonios from "@/components/Testimonios";
import Equipo from "@/components/Equipo";
import Contacto from "@/components/Contacto";
import Portafolio from "@/components/Portafolio";
// import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import Footer from "@/components/Footer";
import BotonWp from "@/components/BotonWp";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Testimonios />
      <Equipo />
      <Portafolio />
      <Contacto />
      {/* <PreguntasFrecuentes /> */}
      <Footer />
      <BotonWp />
     
    </>
  );
}
