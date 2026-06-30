import { Fragment } from "react"
import { FileText, FileSpreadsheet, FileArchive } from "lucide-react"
import TransparenciaPage from "@/components/transparencia-page"
import ContactoTransparencia from "@/components/contacto-transparencia"

export type Trimestre = { pdf?: string; xls?: string; zip?: string }
export type Fila = { n: number; obligacion: string; t: Trimestre[] }
export type Categoria = { categoria: string; filas: Fila[] }

function CellLinks({ t }: { t: Trimestre }) {
  const items = []
  if (t.pdf)
    items.push(
      <a key="pdf" href={t.pdf} target="_blank" rel="noreferrer" title="Descargar PDF" className="text-guinda-600 hover:text-guinda-700">
        <FileText className="h-5 w-5" />
      </a>,
    )
  if (t.xls)
    items.push(
      <a key="xls" href={t.xls} target="_blank" rel="noreferrer" title="Descargar Excel" className="text-green-600 hover:text-green-700">
        <FileSpreadsheet className="h-5 w-5" />
      </a>,
    )
  if (t.zip)
    items.push(
      <a key="zip" href={t.zip} target="_blank" rel="noreferrer" title="Descargar ZIP" className="text-cyan-600 hover:text-cyan-700">
        <FileArchive className="h-5 w-5" />
      </a>,
    )
  if (items.length === 0) return <span className="text-gray-300">—</span>
  return <div className="flex items-center justify-center gap-2">{items}</div>
}

const trimestres = ["1er Trim.", "2do Trim.", "3er Trim.", "4to Trim."]

export default function MatrizFinanciera({ anio, categorias }: { anio: string; categorias: Categoria[] }) {
  return (
    <TransparenciaPage
      title={`Información Financiera · Ejercicio Fiscal ${anio}`}
      subtitle="Información contable, presupuestaria y programática publicada en cumplimiento de la Ley General de Contabilidad Gubernamental (LGCG) y la Ley de Disciplina Financiera (LDF)."
    >
      {/* Leyenda */}
      <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <span className="font-semibold text-gray-700">Formatos:</span>
        <span className="flex items-center gap-1.5">
          <FileText className="h-4 w-4 text-guinda-600" /> PDF
        </span>
        <span className="flex items-center gap-1.5">
          <FileSpreadsheet className="h-4 w-4 text-green-600" /> Excel
        </span>
        <span className="flex items-center gap-1.5">
          <FileArchive className="h-4 w-4 text-cyan-600" /> ZIP (descarga masiva)
        </span>
      </div>

      <div className="rounded-xl bg-white shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="bg-cyan-50 text-cyan-900">
                <th scope="col" className="px-3 py-3 font-semibold uppercase tracking-wide text-xs text-center w-12">
                  N.
                </th>
                <th scope="col" className="px-4 py-3 font-semibold uppercase tracking-wide text-xs">
                  Obligación
                </th>
                {trimestres.map((tr) => (
                  <th key={tr} scope="col" className="px-3 py-3 font-semibold uppercase tracking-wide text-xs text-center w-24">
                    {tr}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categorias.map((cat) => (
                <Fragment key={cat.categoria}>
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={6}
                      className="bg-cyan-700 px-4 py-2.5 text-left font-serif font-bold text-white"
                    >
                      {cat.categoria}
                    </th>
                  </tr>
                  {cat.filas.map((f) => (
                    <tr key={f.n} className="border-t border-gray-100 hover:bg-amber-50/60 transition-colors">
                      <td className="px-3 py-3 text-center font-bold text-gray-500">{f.n}</td>
                      <td className="px-4 py-3 text-gray-800">{f.obligacion}</td>
                      {f.t.map((tri, i) => (
                        <td key={i} className="px-3 py-3 text-center">
                          <CellLinks t={tri} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContactoTransparencia email="contabilidad@smapac.gob.mx" />
    </TransparenciaPage>
  )
}
