import { FileText } from "lucide-react"

export type Anio = { anio: string; s1: string | null; s2: string | null }

function SemestreCell({ href }: { href: string | null }) {
  if (!href) return <span className="text-sm italic text-gray-400">No disponible</span>
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg border border-guinda-200 bg-guinda-50 px-3 py-1.5 text-sm font-medium text-guinda-700 transition-colors hover:bg-guinda-100"
    >
      <FileText className="h-4 w-4" />
      Ver PDF
    </a>
  )
}

export default function ArchivoSemestral({ titulo, anios }: { titulo: string; anios: Anio[] }) {
  return (
    <div className="rounded-xl bg-white shadow-md overflow-hidden">
      <div className="bg-cyan-700 px-5 py-3">
        <h2 className="font-serif font-bold text-white text-lg">{titulo}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="bg-cyan-50 text-cyan-900">
              <th scope="col" className="px-5 py-3 font-semibold uppercase tracking-wide text-xs">Año</th>
              <th scope="col" className="px-5 py-3 font-semibold uppercase tracking-wide text-xs">1er Semestre</th>
              <th scope="col" className="px-5 py-3 font-semibold uppercase tracking-wide text-xs">2do Semestre</th>
            </tr>
          </thead>
          <tbody>
            {anios.map((a) => (
              <tr
                key={a.anio}
                className="border-t border-gray-100 even:bg-cyan-50/40 hover:bg-amber-50/60 transition-colors"
              >
                <td className="px-5 py-3 font-bold text-gray-900">{a.anio}</td>
                <td className="px-5 py-3">
                  <SemestreCell href={a.s1} />
                </td>
                <td className="px-5 py-3">
                  <SemestreCell href={a.s2} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
