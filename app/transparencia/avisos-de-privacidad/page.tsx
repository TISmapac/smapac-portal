import { FileText } from "lucide-react"
import TransparenciaPage from "@/components/transparencia-page"
import ContactoTransparencia from "@/components/contacto-transparencia"

const BASE = "https://www.smapac.gob.mx/transparencia-smapac/2024/TRANSPARENCIA-PORTALWEB/AVISOS%20DE%20PRIVACIDAD%202024-2027/"
const BASE2 = "https://www.smapac.gob.mx/transparencia-smapac/2024/TRANSPARENCIA-PORTALWEB/"

type Proceso = { nombre: string; simplificado: string; integral: string }
type Dependencia = { nombre: string; procesos: Proceso[] }

const dependencias: Dependencia[] = [
  {
    nombre: "Órgano Interno de Control",
    procesos: [
      { nombre: "Declaraciones Patrimoniales", simplificado: BASE + "APS_DP%2024.pdf", integral: BASE + "API_PW%2024.pdf" },
      {
        nombre: "Procedimientos de Investigación de la Autoridad Investigadora",
        simplificado: BASE + "APS_UI%2024.pdf",
        integral: BASE + "API_%20UI%2024.pdf",
      },
      {
        nombre: "Quejas, Denuncias y Sugerencias",
        simplificado: BASE + "APS_QDSVVENC%2024.pdf",
        integral: BASE + "API_QDSVVENC%2024.pdf",
      },
      { nombre: "Entrega de Recepción", simplificado: BASE + "APS_ER%2024.pdf", integral: BASE + "API_ER%2024.pdf" },
    ],
  },
  {
    nombre: "Departamento de Comercialización",
    procesos: [
      { nombre: "Atención a Usuarios", simplificado: BASE + "APS_AU%2024.pdf", integral: BASE + "API_AU%2024.pdf" },
      { nombre: "Contratos", simplificado: BASE2 + "APS_CONT.pdf", integral: BASE2 + "API_CONT.pdf" },
    ],
  },
  {
    nombre: "Departamento de Recursos Humanos",
    procesos: [
      { nombre: "Sistema de Nóminas", simplificado: BASE + "APS_RH%2024.pdf", integral: BASE + "API_RH%2024.pdf" },
    ],
  },
  {
    nombre: "Departamento Técnico",
    procesos: [
      { nombre: "Padrón de Contratistas", simplificado: BASE + "APS_PC%2024.pdf", integral: BASE + "API_PC%2024.pdf" },
    ],
  },
  {
    nombre: "Unidad de Recursos Materiales",
    procesos: [
      { nombre: "Padrón de Proveedores", simplificado: BASE + "APS_PP%2024.pdf", integral: BASE + "API_PP%2024.pdf" },
    ],
  },
]

function PdfPill({ href, label, tono }: { href: string; label: string; tono: "azul" | "guinda" }) {
  const cls =
    tono === "azul"
      ? "border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
      : "border-guinda-200 bg-guinda-50 text-guinda-700 hover:bg-guinda-100"
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${cls}`}
    >
      <FileText className="h-4 w-4" />
      {label}
    </a>
  )
}

export default function AvisosDePrivacidadTransparenciaPage() {
  return (
    <TransparenciaPage
      title="Avisos de Privacidad"
      subtitle="En cumplimiento de los Artículos 35, 36 y 37 de la Ley de Protección de Datos Personales del Estado de Campeche, se publican los Avisos de Privacidad del SMAPAC, en sus versiones Simplificada e Integral."
    >
      <div className="space-y-8">
        {dependencias.map((dep) => (
          <div key={dep.nombre} className="rounded-xl bg-white shadow-md overflow-hidden">
            <div className="bg-cyan-700 px-5 py-3">
              <h2 className="font-serif font-bold text-white text-lg">{dep.nombre}</h2>
            </div>
            <ul className="divide-y divide-gray-100">
              {dep.procesos.map((proc) => (
                <li
                  key={proc.nombre}
                  className="px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-gray-800">{proc.nombre}</span>
                  <div className="flex flex-wrap gap-2">
                    <PdfPill href={proc.simplificado} label="Simplificado" tono="azul" />
                    <PdfPill href={proc.integral} label="Integral" tono="guinda" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ContactoTransparencia />
    </TransparenciaPage>
  )
}
