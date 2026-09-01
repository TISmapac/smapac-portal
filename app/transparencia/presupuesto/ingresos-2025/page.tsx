import TransparenciaPage from "@/components/transparencia-page"
import ContactoTransparencia from "@/components/contacto-transparencia"
import DocCard from "@/components/doc-card"

const T = "https://www.smapac.gob.mx/transparencia-smapac/2025/CONTABILIDAD%202025/"

const documentos = [
  {
    title: "Acta 2025",
    meta: "Acta de la segunda sesión extraordinaria del Presupuesto de Ingresos del Ejercicio Fiscal 2025",
    href: T + "1ACTA2SEPIEF2025.pdf",
  },
  {
    title: "PI 2025",
    meta: "Presupuesto de Ingresos del Ejercicio Fiscal 2025",
    href: T + "2PIEF2025.pdf",
  },
  {
    title: "PUB. PI 2025",
    meta: "Publicación del Presupuesto de Ingresos 2025",
    href: T + "3PPI2025.pdf",
  },
  {
    title: "Fe de Erratas PUB. PI 2025",
    meta: "Fe de erratas de la publicación del Presupuesto de Ingresos 2025",
    href: T + "4PFEEPI2025.pdf",
  },
]

export default function PresupuestoIngresos2025Page() {
  return (
    <TransparenciaPage
      title="Presupuesto de Ingresos 2025"
      subtitle="Documentos que integran el Presupuesto de Ingresos del Ejercicio Fiscal 2025 del SMAPAC."
      backHref="/transparencia/presupuesto"
      backLabel="Volver a Presupuesto"
    >
      <div className="space-y-4">
        {documentos.map((d, i) => (
          <DocCard key={d.href} title={`${i + 1}. ${d.title}`} meta={d.meta} href={d.href} />
        ))}
      </div>

      <ContactoTransparencia />
    </TransparenciaPage>
  )
}
