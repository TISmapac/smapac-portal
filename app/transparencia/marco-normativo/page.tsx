import TransparenciaPage from "@/components/transparencia-page"
import DocCard from "@/components/doc-card"
import ContactoTransparencia from "@/components/contacto-transparencia"

const documentos = [
  {
    title:
      "Reglamento Interno de Organismo Operador Municipal denominado Sistema Municipal de Agua Potable y Alcantarillado de Carmen",
    href: "https://www.smapac.gob.mx/transparencia-smapac/2026/JURIDICO%202026/REGLAMENTO%20INTERIOR%20%2019022026.pdf",
    meta: "PDF · 2026",
  },
  {
    title: "Manual de Organización y Procedimientos del SMAPAC",
    href: "https://www.smapac.gob.mx/transparencia-smapac/2025/JURIDICO%202025/MANUALDEORGANIZACIONYPROCEDIMIENTOS.pdf",
    meta: "PDF · 2025",
  },
  {
    title: "Manual de Contabilidad Gubernamental Específico 2024",
    href: "https://www.smapac.gob.mx/transparencia-smapac/2024/CONTABILIDAD/MANUAL%20DE%20CONTABILIDAD%20ESPECIFICO%202024_.pdf",
    meta: "PDF · 2024",
  },
  {
    title: "Manual de Contabilidad Gubernamental Específico 2025",
    href: "https://www.smapac.gob.mx/transparencia-smapac/2025/CONTABILIDAD%202025/Manual%20de%20Contabilidad%20Gubernamental%20Especifico%202025/MCGE2025.pdf",
    meta: "PDF · 2025",
  },
]

export default function MarcoNormativoPage() {
  return (
    <TransparenciaPage
      title="Marco Normativo y Reglamento Interno"
      subtitle="Normas, manuales y disposiciones que regulan la operación y los servicios del SMAPAC, conforme a la normatividad aplicable."
    >
      <p className="text-gray-700 leading-relaxed mb-8">
        Como parte de nuestro compromiso con la transparencia y la rendición de cuentas, ponemos a
        disposición de la ciudadanía el <strong>Reglamento Interno del Sistema Municipal de Agua Potable
        y Alcantarillado de Carmen (SMAPAC)</strong> y sus manuales. Estos documentos establecen las
        normas y procedimientos que rigen nuestras operaciones y servicios, garantizando un
        funcionamiento eficiente y responsable.
      </p>

      <div className="space-y-4">
        {documentos.map((d) => (
          <DocCard key={d.href} title={d.title} href={d.href} meta={d.meta} />
        ))}
      </div>

      <ContactoTransparencia email="contabilidad@smapac.gob.mx" />
    </TransparenciaPage>
  )
}
