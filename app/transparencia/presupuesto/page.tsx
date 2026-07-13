import { FileText } from "lucide-react"
import TransparenciaPage from "@/components/transparencia-page"
import ContactoTransparencia from "@/components/contacto-transparencia"

const T = "https://www.smapac.gob.mx/transparencia-smapac/"

type Grupo = { titulo: string; anios: { anio: string; href: string }[] }

const grupos: Grupo[] = [
  {
    titulo: "Presupuesto de Egresos",
    anios: [
      { anio: "2019", href: T + "2021/CAF/PE2019.pdf" },
      { anio: "2020", href: T + "2020/CONTABILIDAD/PE2020/PE2020_SMAPAC.pdf" },
      { anio: "2021", href: T + "2021/CAF/PE2021.pdf" },
      { anio: "2022", href: T + "2022/CAF/PE/PE2022.pdf" },
      { anio: "2023", href: T + "2023/CAF/PE2023.pdf" },
      { anio: "2024", href: T + "2024/CAF/PE2024.pdf" },
    ],
  },
  {
    titulo: "Presupuesto de Ingresos",
    anios: [
      { anio: "2022", href: T + "2022/CAF/PI/PI%202022.pdf" },
      { anio: "2024", href: T + "2024/CAF/PI2024.pdf" },
    ],
  },
]

export default function PresupuestoPage() {
  return (
    <TransparenciaPage
      title="Presupuesto de Ingresos y Egresos"
      subtitle="Toda persona tiene derecho al acceso a la información pública. El SMAPAC pone a disposición el presupuesto de ingresos y egresos en cumplimiento de la Constitución Federal, la Ley General de Transparencia y Acceso a la Información Pública, la Ley de Transparencia del Estado de Campeche y demás ordenamientos jurídicos aplicables."
    >
      <div className="space-y-8">
        {grupos.map((g) => (
          <div key={g.titulo} className="rounded-xl bg-white shadow-md overflow-hidden">
            <div className="bg-cyan-700 px-5 py-3">
              <h2 className="font-serif font-bold text-white text-lg">{g.titulo}</h2>
            </div>
            <div className="flex flex-wrap gap-3 p-5">
              {g.anios.map((a) => (
                <a
                  key={a.anio}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-guinda-200 bg-guinda-50 px-4 py-2.5 font-semibold text-guinda-700 transition-colors hover:bg-guinda-100"
                >
                  <FileText className="h-4 w-4" />
                  {a.anio}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ContactoTransparencia />
    </TransparenciaPage>
  )
}
