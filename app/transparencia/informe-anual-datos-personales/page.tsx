import TransparenciaPage from "@/components/transparencia-page"
import DocCard from "@/components/doc-card"
import ContactoTransparencia from "@/components/contacto-transparencia"

const DP = "https://www.smapac.gob.mx/transparencia/2024/TRANSPARENCIA-PORTALWEB/DP/"

const documentos = [
  { anio: "2024", href: DP + "DP-2024..pdf" },
  { anio: "2023", href: DP + "DP-2023.pdf" },
  { anio: "2022", href: DP + "DP-2022.pdf" },
  { anio: "2021", href: DP + "DP-2021.pdf" },
]

export default function InformeAnualDatosPersonalesPage() {
  return (
    <TransparenciaPage
      title="Informe Anual de Datos Personales"
      subtitle="En cumplimiento del artículo 46 y último párrafo del artículo 74 de la Ley de Transparencia y Acceso a la Información Pública del Estado de Campeche, se publican los informes anuales de datos personales del SMAPAC."
    >
      <div className="space-y-4">
        {documentos.map((d) => (
          <DocCard
            key={d.anio}
            title={`Informe anual ${d.anio}`}
            href={d.href}
            meta="Datos personales · PDF"
          />
        ))}
      </div>

      <ContactoTransparencia />
    </TransparenciaPage>
  )
}
