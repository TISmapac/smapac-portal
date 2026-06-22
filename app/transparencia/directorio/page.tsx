import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

type Persona = { nombre: string; cargo: string; correo: string }
type Dependencia = { dependencia: string; personas: Persona[] }

const directorio: Dependencia[] = [
  {
    dependencia: "Dirección General",
    personas: [
      { nombre: "L.A.E. Ricardo Gómez Enriquez", cargo: "Director General", correo: "direccion@smapac.gob.mx" },
      {
        nombre: "Lic. Francisco Tomás Otero Alcocer",
        cargo: "Titular de la Unidad de Asuntos Jurídicos",
        correo: "juridico@smapac.gob.mx",
      },
      {
        nombre: "C.P.A. Beatriz Eugenia López López",
        cargo: "Titular del Órgano Interno de Control",
        correo: "organointernodecontrol@smapac.gob.mx",
      },
      {
        nombre: "Lic. Habib Razú Sosa",
        cargo: "Titular de la Unidad de Transparencia",
        correo: "transparencia@smapac.gob.mx",
      },
    ],
  },
  {
    dependencia: "Coordinación de Administración y Finanzas",
    personas: [
      {
        nombre: "L.I. Carlos Manuel de Atocha Ortíz Manzanilla",
        cargo: "Titular de la Coordinación de Administración y Finanzas",
        correo: "coord_af@smapac.gob.mx",
      },
    ],
  },
  {
    dependencia: "Coordinación de Comercialización",
    personas: [
      {
        nombre: "C.P. Julia María Zuluaga Santiago",
        cargo: "Titular de la Coordinación de Comercialización",
        correo: "comercializacion@smapac.gob.mx",
      },
    ],
  },
  {
    dependencia: "Coordinación Operativa",
    personas: [
      {
        nombre: "Lic. Miguel de la Cruz Hernández",
        cargo: "Titular de la Coordinación Operativa",
        correo: "operativa@smapac.gob.mx",
      },
      {
        nombre: "Ing. Alfredo Gerardo Zamora Ovando",
        cargo: "Titular del Departamento Técnico",
        correo: "tecnica@smapac.gob.mx",
      },
    ],
  },
]

export default function DirectorioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Transparencia"
        title="Directorio"
        subtitle="Directorio General de Servidores Públicos del Sistema Municipal de Agua Potable y Alcantarillado de Carmen."
      />

      <section className="py-14 bg-cyan-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/transparencia">
              <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Transparencia
              </Button>
            </Link>
          </div>

          <div className="space-y-8">
            {directorio.map((dep) => (
              <div key={dep.dependencia} className="rounded-xl bg-white shadow-md overflow-hidden">
                <div className="bg-cyan-700 px-5 py-3">
                  <h2 className="font-serif font-bold text-white text-lg">{dep.dependencia}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead>
                      <tr className="bg-cyan-50 text-cyan-900">
                        <th className="px-5 py-3 font-semibold uppercase tracking-wide text-xs">Nombre</th>
                        <th className="px-5 py-3 font-semibold uppercase tracking-wide text-xs">Cargo</th>
                        <th className="px-5 py-3 font-semibold uppercase tracking-wide text-xs">
                          Correo electrónico
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dep.personas.map((p) => (
                        <tr
                          key={p.correo}
                          className="border-t border-gray-100 even:bg-cyan-50/40 hover:bg-amber-50/60 transition-colors"
                        >
                          <td className="px-5 py-3 font-medium text-gray-900">{p.nombre}</td>
                          <td className="px-5 py-3 text-gray-600">{p.cargo}</td>
                          <td className="px-5 py-3">
                            <a
                              href={`mailto:${p.correo}`}
                              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
                            >
                              <Mail className="h-4 w-4 flex-shrink-0" />
                              {p.correo}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
