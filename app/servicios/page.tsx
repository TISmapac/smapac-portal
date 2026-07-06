import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Truck, Wrench, Droplets, Building2, AlertCircle, MapPin, Phone } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

const pasosContratoBase = {
  titulo: "Número de contrato",
  texto:
    "En la ventanilla de atención a usuarios proporciona tu número de contrato para su verificación. Para acceder al servicio, tu contrato debe estar al corriente o no exceder un adeudo de más de quince días.",
}
const pasoReferenciasBase = {
  titulo: "Referencias",
  texto:
    "Indica una referencia de ubicación (como el color de la casa) y un número de teléfono. El servicio puede tener un tiempo de espera de al menos 48 horas.",
}

const servicios = [
  {
    nombre: "Apoyo de Pipas",
    icon: Truck,
    color: "cyan" as const,
    pasos: [pasosContratoBase, pasoReferenciasBase],
  },
  {
    nombre: "Tomas tapadas",
    icon: Wrench,
    color: "guinda" as const,
    pasos: [pasosContratoBase, pasoReferenciasBase],
  },
  {
    nombre: "Fugas de agua",
    icon: Droplets,
    color: "amber" as const,
    pasos: [
      {
        titulo: "Número de contrato o dirección",
        texto:
          "Proporciona tu número de contrato o una dirección para localizar el lugar. El personal te apoyará con un número de folio para dar seguimiento.",
      },
      {
        titulo: "Referencias",
        texto:
          "Indica referencias de la ubicación de la fuga (de ser posible con fotografía): color de la casa, cruces de calles, señales de tránsito, etc.",
      },
    ],
  },
]

const colorClasses = {
  cyan: "bg-cyan-100 text-cyan-600",
  guinda: "bg-guinda-100 text-guinda-600",
  amber: "bg-amber-100 text-amber-600",
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Lo que hacemos"
        title="Servicios"
        subtitle="Información sobre los servicios que ofrece SMAPAC, con los requisitos y el procedimiento para solicitar cada uno."
      />

      <section className="py-14 bg-cyan-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Módulos autorizados */}
          <div className="bg-white rounded-xl shadow-md border-l-4 border-guinda-600 p-6">
            <div className="flex items-start gap-4">
              <Building2 className="h-6 w-6 text-guinda-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif font-bold text-lg text-gray-900 mb-2">
                  Módulos autorizados para solicitar servicios
                </h2>
                <p className="text-gray-600 mb-4">
                  La solicitud de servicios solo puede realizarse de forma presencial en los siguientes
                  módulos:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/modulos"
                    className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 hover:bg-cyan-100 font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Oficina Central de SMAPAC
                  </Link>
                  <Link
                    href="/modulos"
                    className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 hover:bg-cyan-100 font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Módulo del Mercado del Chechén
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Aviso */}
          <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-5">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-900 text-sm">
              <span className="font-semibold">Importante:</span> los requisitos y procedimientos varían
              según las situaciones particulares de cada caso. Para más información, acude a los módulos
              de atención a usuarios del SMAPAC.
            </p>
          </div>

          {/* Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {servicios.map((s) => (
              <Card key={s.nombre} className="border-0 shadow-lg h-full">
                <CardContent className="pt-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${colorClasses[s.color]}`}
                  >
                    <s.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-5">{s.nombre}</h3>
                  <ol className="space-y-4">
                    {s.pasos.map((p, i) => (
                      <li key={p.titulo} className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-sm">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">{p.titulo}</p>
                          <p className="text-gray-600 text-sm mt-0.5">{p.texto}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reportes y ayuda */}
          <div className="rounded-xl bg-cyan-900 text-cyan-50 p-8 md:flex items-center justify-between gap-6">
            <div>
              <h2 className="font-serif font-bold text-xl text-white mb-2">Solicita un servicio o levanta un reporte</h2>
              <div className="space-y-1 text-cyan-100/90 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  Atención y reportes: (938) 382-3001 y (938) 382-3063
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  Tomas tapadas, apoyo de agua en pipa y días de bombeo: (938) 382-5936
                </p>
              </div>
            </div>
            <Link href="/modulos" className="inline-block mt-5 md:mt-0">
              <Button className="bg-white text-cyan-700 hover:bg-cyan-50 whitespace-nowrap">
                <MapPin className="mr-2 h-4 w-4" />
                Ver módulos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
