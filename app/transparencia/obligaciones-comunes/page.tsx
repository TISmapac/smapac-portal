import TransparenciaPage from "@/components/transparencia-page"
import DocCard from "@/components/doc-card"
import ContactoTransparencia from "@/components/contacto-transparencia"

const documentos = [
  {
    title: "Tabla de aplicabilidad de obligaciones de transparencia comunes y específicas 2025",
    href: "https://www.smapac.gob.mx/transparencia/2025/TRANSPARENCIA%202025/TA%202025/TA-2025.pdf",
    meta: "PDF · 2025",
  },
  {
    title: "Tabla de aplicabilidad de obligaciones de transparencia comunes 2025",
    href: "https://www.smapac.gob.mx/transparencia/2025/TRANSPARENCIA%202025/TA%202025/TA-OC-2025.pdf",
    meta: "PDF · 2025",
  },
]

export default function ObligacionesComunesPage() {
  return (
    <TransparenciaPage
      title="Obligaciones de Transparencia Comunes y Específicas"
      subtitle="Información pública que todos los sujetos obligados deben poner a disposición a través de sus portales de internet, sin necesidad de que medie solicitud alguna, relativa a sus competencias, facultades, atribuciones, funciones y al ejercicio de los recursos públicos asignados."
    >
      <p className="text-gray-700 leading-relaxed mb-8">
        Como parte de nuestro compromiso con la transparencia y la rendición de cuentas, ponemos a
        disposición las <strong>tablas de aplicabilidad de obligaciones de transparencia</strong> del
        Sistema Municipal de Agua Potable y Alcantarillado de Carmen (SMAPAC). Estos documentos
        establecen las obligaciones de transparencia que deben cumplir los sujetos obligados, según las
        funciones y atribuciones de cada dependencia.
      </p>

      <div className="space-y-4">
        {documentos.map((d) => (
          <DocCard key={d.href} title={d.title} href={d.href} meta={d.meta} />
        ))}
      </div>

      <ContactoTransparencia />
    </TransparenciaPage>
  )
}
