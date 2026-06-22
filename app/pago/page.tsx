import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import EnPreparacion from "@/components/en-preparacion"

export default function PagoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        eyebrow="Servicios en línea"
        title="Pago en línea"
        subtitle="Paga tu recibo de agua de forma rápida y segura desde cualquier lugar."
      />
      <EnPreparacion seccion="Pago en línea" />
      <Footer />
    </div>
  )
}
