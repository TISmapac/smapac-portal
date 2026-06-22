import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Landmark, Mail, AlertCircle, Download, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import CopyButton from "@/components/copy-button"

const BENEFICIARIO = "Sistema Municipal de Agua Potable y Alcantarillado de Carmen"

const bancos = [
  { nombre: "BBVA", logo: "/img/pago/bbva.webp", cuenta: "0149059733", clabe: "012050001490597335" },
  { nombre: "BANORTE", logo: "/img/pago/banorte.webp", cuenta: "0102938412", clabe: "072052001029384122" },
  { nombre: "SANTANDER", logo: "/img/pago/santander.webp", cuenta: "65500825349", clabe: "014052655008253497" },
]

function DatoCopiable({ label, value, copyLabel }: { label: string; value: string; copyLabel: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-gray-900">{value}</span>
        <CopyButton text={value} label={copyLabel} />
      </div>
    </div>
  )
}

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
                  <img src="/img/pago/app-recibo.webp" alt="Aplicación móvil SMAPAC" className="w-full" />
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

          {/* Transferencia electrónica */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <Landmark className="h-6 w-6" />
              </span>
              <h2 className="font-serif font-bold text-2xl text-gray-900">Transferencia electrónica</h2>
            </div>
            <p className="text-gray-600 mb-4 max-w-3xl">
              CLABE interbancarias para depósitos o transferencia electrónica (según sea el banco) del SMAPAC.
            </p>

            <div className="flex items-start gap-3 rounded-xl bg-cyan-50 border border-cyan-100 p-5 mb-8">
              <Mail className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">
                Por favor, <strong>anota tu número de contrato</strong> en la transferencia para evitar
                pagos no aplicados al corte. Después, envía tu comprobante al correo:{" "}
                <a
                  href="mailto:facturaelectronica@smapac.gob.mx"
                  className="text-cyan-600 hover:text-cyan-700 font-medium underline underline-offset-2"
                >
                  facturaelectronica@smapac.gob.mx
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bancos.map((b) => (
                <Card key={b.nombre} className="border-0 shadow-lg overflow-hidden">
                  <div className="h-20 flex items-center px-6 border-b border-gray-100">
                    <img src={b.logo} alt={`Banco ${b.nombre}`} className="h-7 w-auto" />
                  </div>
                  <CardContent className="pt-5 space-y-4">
                    <DatoCopiable label="Cuenta" value={b.cuenta} copyLabel={`cuenta ${b.nombre}`} />
                    <DatoCopiable label="CLABE interbancaria" value={b.clabe} copyLabel={`CLABE ${b.nombre}`} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">Beneficiario</p>
                      <p className="text-gray-700 text-sm">{BENEFICIARIO}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Aclaración */}
          <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-900 text-sm">
              <span className="font-semibold">Aclaración:</span> todos los pagos y transferencias
              realizados por estos medios <strong>pueden demorar hasta 48 horas</strong> en verse
              reflejados. Te sugerimos tomar precauciones en fechas previas al corte para no generar
              recargos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
