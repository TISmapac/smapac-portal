import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import EnPreparacion from "@/components/en-preparacion"

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        eyebrow="Rendición de cuentas"
        title="Transparencia"
        subtitle="Accede a la información pública del SMAPAC conforme a las obligaciones de transparencia."
      />
      <EnPreparacion seccion="Transparencia" />
      <Footer />
    </div>
  )
}
