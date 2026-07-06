import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, AlertCircle, Download, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export default function PagoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Servicios en línea"
        title="Pago en línea"
        subtitle="Para facilitar el pago de tus recibos, el SMAPAC pone a tu disposición los siguientes medios de pago digital."
      />

      <section className="py-14 bg-cyan-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* App móvil y Sitio web */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* App móvil */}
            <Card className="border-0 shadow-lg overflow-hidden flex flex-col">
              <CardContent className="pt-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                    <Smartphone className="h-6 w-6" />
                  </span>
                  <h2 className="font-serif font-bold text-xl text-gray-900">Aplicación móvil</h2>
                </div>
                <p className="text-gray-600 mb-5">
                  La aplicación oficial para dispositivos móviles te permite realizar el pago de tu recibo
                  de manera rápida y sencilla.
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-100 mb-6 bg-gray-50">
                  <img src="/img/pago/banner_app.webp" alt="Aplicación móvil SMAPAC" className="w-full" />
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://play.google.com/store/search?q=smapac&c=apps"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Google Play
                    </Button>
                  </a>
                  <a
                    href="https://apps.apple.com/mx/app/smapac-carmen/id6677001296?platform=iphone"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      App Store
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Sitio web */}
            <Card className="border-0 shadow-lg overflow-hidden flex flex-col">
              <CardContent className="pt-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-full bg-guinda-100 text-guinda-600 flex items-center justify-center">
                    <Globe className="h-6 w-6" />
                  </span>
                  <h2 className="font-serif font-bold text-xl text-gray-900">Sitio web</h2>
                </div>
                <p className="text-gray-600 mb-5">
                  El portal oficial del SMAPAC te permite pagar tu recibo desde cualquier dispositivo con
                  acceso a internet.
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-100 mb-6 bg-gray-50">
                  <img src="/img/pago/portal-login.webp" alt="Portal de pago en línea SMAPAC" className="w-full" />
                </div>
                <a
                  href="https://smapac.gob.mx/pagaturecibo"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto"
                >
                  <Button className="w-full bg-guinda-600 hover:bg-guinda-700 text-white">
                    Pagar en el portal
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Aclaración */}
          <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-900 text-sm">
              <span className="font-semibold">Aclaración:</span> los pagos realizados por estos medios{" "}
              <strong>pueden demorar hasta 48 horas</strong> en verse reflejados. Te sugerimos tomar
              precauciones en fechas previas al corte para no generar recargos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
