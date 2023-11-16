import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Aura | Agencia de publicidad",
  description:
    "Nuestra agencia ofrece soluciones creativas y personalizadas para impulsar tu marca, desde campañas publicitarias hasta estrategias digitales. Descubre cómo podemos hacer brillar tu negocio con nuestra experiencia y pasión por la publicidad innovadora. ¡Con Aura, lleva tu marca al siguiente nivel y destaca en el competitivo mundo digital! ",
  keywords: ["instagram", "ads", "facebook", "iphone", "sitios web", "seo"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full ">
      <body className="h-full">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
