import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  FileSignature,
  Users,
  CheckCircle,
  Download,
  AlertCircle,
  Building2,
  Phone,
  MapPin,
  Info,
  Wallet,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

const docsComunes = [
  "Original y copia de las escrituras",
  "Original y copia del pago predial del año en curso (2026)",
  "Original y copia de identificación oficial (INE)",
]

const reqCambioPropietario = [
  "Original y copia de las escrituras",
  "Original y copia del pago predial del año en curso (2026)",
  "Anexar cédula catastral (en caso de haber actualizado el nombre en el predial)",
  "Original y copia de identificación oficial (INE)",
  "Original y copia del recibo de agua actual pagado",
  "En caso de no ser propietario, traer poder notarial específico con vigencia menor a 6 meses",
  "Toda la documentación debe estar a nombre del propietario actual",
]

const reqBajaTemporal = [
  "Copia del último recibo pagado",
  "Copia del predial actualizado",
  "Copia de la credencial del INE",
  "Copia del acuse de recibo",
  "Todos los documentos deben ser del propietario",
  "Anexar fotografías del predio y fotografía de la toma (para realizar la verificación)",
]

// La constancia de no adeudo pide los mismos requisitos, pero sin las fotografías.
const reqConstancia = reqBajaTemporal.slice(0, -1)

const notaAcuse =
  "La «copia del acuse de recibo» corresponde al acuse de pago del trámite."

const reqRoboMedidor = [
  "Copia del recibo de agua",
  "Copia de la credencial del INE del propietario del contrato",
  "Copia de la credencial del INE de 2 testigos",
  "Copia del documento para acuse de recibo",
]

const areas = [
  {
    area: "Área de Contratos",
    icon: FileSignature,
    tramites: [
      {
        nombre: "Nuevos Contratos",
        pasos: [
          {
            titulo: "Llenado de formato",
            texto:
              "Llena el formato de factibilidad y anexa fotos del frente del predio para realizar la verificación de la ubicación del servicio.",
            pdf: {
              label: "Descargar Formato de factibilidad",
              url: "https://smapac.gob.mx/assets/Formatos/FORMATO_FACTIBILIDAD_2026.pdf",
            },
          },
          {
            titulo: "Establecimiento de condiciones del contrato",
            texto:
              "El costo del trámite depende de la factibildiad y presupuesto.",
          },
        ],
        documentos: docsComunes,
      },
      {
        nombre: "Cambio de propietario",
        pasos: [
          {
            titulo: "Fotografías del predio",
            texto:
              "Trae fotos impresas del frente del predio para generar una orden de verificación del lugar.",
          },
        ],
        documentos: reqCambioPropietario,
        nota: "Las copias de los documentos deben ser tamaño carta.",
        costos: [
          { concepto: "Doméstica", monto: "$232.00" },
          { concepto: "Residencial", monto: "$300.00" },
          { concepto: "Comercial", monto: "$600.00" },
          { concepto: "Industrial", monto: "$1,000.00" },
        ],
      },
    ],
  },
  {
    area: "Área de Atención a Usuarios",
    icon: Users,
    completa: true,
    tramites: [
      {
        nombre: "Baja Temporal",
        pasos: [
          {
            titulo: "Llenado de formato",
            texto:
              "Llena el formato de baja temporal y preséntalo junto con los documentos en los módulos de atención.",
            pdf: {
              label: "Descargar Formato de baja temporal",
              url: "https://smapac.gob.mx/assets/Formatos/FORMATO_BAJA_TEMPORAL_2026.pdf",
            },
          },
        ],
        documentos: reqBajaTemporal,
        nota: notaAcuse,
        costos: [
          { concepto: "Doméstica", monto: "$1,500.00" },
          { concepto: "Residencial", monto: "$1,500.00" },
          { concepto: "Comercial", monto: "$3,500.00" },
          { concepto: "Industrial", monto: "$3,500.00" },
        ],
      },
      {
        nombre: "Reconexión por baja temporal",
        pasos: [
          {
            titulo: "Llenado de formato",
            texto:
              "Llena el formato de reconexión por baja temporal y preséntalo junto con los documentos en los módulos de atención.",
            pdf: {
              label: "Descargar Formato de reconexión",
              url: "https://smapac.gob.mx/assets/Formatos/FORMATO_RECONEXION_BAJA_TEMPORAL_2026.pdf",
            },
          },
        ],
        documentos: reqBajaTemporal,
        nota: notaAcuse,
        costos: [
          { concepto: "Doméstica", monto: "$928.00" },
          { concepto: "Residencial", monto: "$928.00" },
          { concepto: "Comercial", monto: "$1,229.60" },
          { concepto: "Industrial", monto: "$1,693.60" },
        ],
      },
      {
        nombre: "Constancia de no adeudo",
        documentos: reqConstancia,
        nota: notaAcuse,
        costos: [
          { concepto: "Doméstica", monto: "$232.00" },
          { concepto: "Residencial", monto: "$300.00" },
          { concepto: "Comercial", monto: "$1,000.00" },
        ],
      },
      {
        nombre: "Robo de medidor",
        pasos: [
          {
            titulo: "Llenado de formato",
            texto:
              "Llena el formato de robo de medidor y preséntalo junto con los documentos en los módulos de atención.",
            pdf: {
              label: "Descargar Formato de robo de medidor",
              url: "https://smapac.gob.mx/assets/Formatos/ROBO_DE_MEDIDOR_2026.pdf",
            },
          },
        ],
        documentos: reqRoboMedidor,
      },
    ],
  },
]

export default function TramitesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Atención al usuario"
        title="Trámites"
        subtitle="A continuación se enlistan los requisitos de los trámites. Recuerda que son presenciales y personales (solo propietarios)."
      />

      <section className="py-14 bg-cyan-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Módulos autorizados */}
          <div className="bg-white rounded-xl shadow-md border-l-4 border-guinda-600 p-6">
            <div className="flex items-start gap-4">
              <Building2 className="h-6 w-6 text-guinda-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif font-bold text-lg text-gray-900 mb-2">
                  Módulos autorizados para realizar trámites
                </h2>
                <p className="text-gray-600 mb-4">
                  Los trámites solo pueden realizarse de forma presencial en los siguientes módulos:
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

          {/* Áreas y trámites */}
          <div className="space-y-8">
            {areas.map((a) => (
              <Card key={a.area} className="border-0 shadow-lg overflow-hidden">
                <div className="flex items-center gap-3 bg-cyan-600 px-6 py-4">
                  <a.icon className="h-6 w-6 text-white" />
                  <h2 className="font-serif font-bold text-xl text-white">{a.area}</h2>
                </div>
                <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 items-start">
                  {a.tramites.map((t) => (
                    <div key={t.nombre}>
                      <h3 className="font-serif font-bold text-lg text-cyan-700 mb-4 pb-2 border-b border-gray-100">
                        {t.nombre}
                      </h3>

                      {"pasos" in t && t.pasos && (
                        <ol className="space-y-4 mb-5">
                          {t.pasos.map((p, i) => (
                            <li key={p.titulo} className="flex gap-3">
                              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-sm">
                                {i + 1}
                              </span>
                              <div>
                                <p className="font-semibold text-gray-900">{p.titulo}</p>
                                <p className="text-gray-600 text-sm mt-0.5">{p.texto}</p>
                                {"pdf" in p && p.pdf && (
                                  <a href={p.pdf.url} target="_blank" rel="noreferrer">
                                    <Button
                                      size="sm"
                                      className="mt-3 bg-guinda-600 hover:bg-guinda-700 text-white"
                                    >
                                      <Download className="mr-2 h-4 w-4" />
                                      {p.pdf.label}
                                    </Button>
                                  </a>
                                )}
                              </div>
                            </li>
                          ))}
                        </ol>
                      )}

                      <p className="font-semibold text-gray-700 text-sm mb-2">Documentos:</p>
                      <ul className="space-y-2">
                        {t.documentos.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>

                      {"nota" in t && t.nota && (
                        <p className="mt-3 flex items-start gap-1.5 text-sm text-gray-500 italic">
                          <Info className="h-4 w-4 flex-shrink-0 mt-0.5 text-gray-400" />
                          <span>{t.nota}</span>
                        </p>
                      )}

                      {"costos" in t && t.costos && (
                        <div className="mt-4 rounded-lg border border-amber-100 bg-amber-50 p-4">
                          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                            <Wallet className="h-4 w-4 text-guinda-600" />
                            Costos del trámite
                          </p>
                          <ul className="space-y-1">
                            {t.costos.map((c) => (
                              <li
                                key={c.concepto}
                                className="flex items-center justify-between gap-4 text-sm"
                              >
                                <span className="text-gray-600">{c.concepto}</span>
                                <span className="font-semibold text-guinda-700">{c.monto}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* {!a.completa && (
                    <p className="text-sm text-gray-400 italic pt-2 border-t border-gray-100">
                      Próximamente se agregarán más trámites de esta área.
                    </p>
                  )} */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reportes y ayuda */}
          <div className="rounded-xl bg-cyan-900 text-cyan-50 p-8 md:flex items-center justify-between gap-6">
            <div>
              <h2 className="font-serif font-bold text-xl text-white mb-2">¿Necesitas ayuda o levantar un reporte?</h2>
              <div className="space-y-1 text-cyan-100/90 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  Levantamiento de reportes: (938) 382-3001 y (938) 382-3063
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
