import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import EnPreparacion from "@/components/en-preparacion"

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Aviso de Privacidad"
        subtitle="Conoce cómo el SMAPAC protege y trata tus datos personales."
      />
      <EnPreparacion seccion="Aviso de Privacidad" />
      <Footer />
    </div>
  )
}
