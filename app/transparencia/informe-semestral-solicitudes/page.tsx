import TransparenciaPage from "@/components/transparencia-page"
import ArchivoSemestral, { type Anio } from "@/components/archivo-semestral"
import ContactoTransparencia from "@/components/contacto-transparencia"

const SI = "https://www.smapac.gob.mx/transparencia/2024/TRANSPARENCIA-PORTALWEB/SI/"

const anios: Anio[] = [
  {
    anio: "2025",
    s1: "https://www.smapac.gob.mx/transparencia/2025/TRANSPARENCIA%202025/SI%202025/SI-2025-1.pdf",
    s2: null,
  },
  { anio: "2024", s1: SI + "SI-2024-1.pdf", s2: SI + "SI-2024-2.pdf" },
  { anio: "2023", s1: SI + "SI-2023-1.pdf", s2: SI + "SI-2023-2.pdf" },
  { anio: "2022", s1: SI + "SI-2022-1.pdf", s2: SI + "SI-2022-2.pdf" },
  { anio: "2021", s1: SI + "SI-2021-1.pdf", s2: SI + "SI-2021-2.pdf" },
]

export default function InformeSemestralSolicitudesPage() {
  return (
    <TransparenciaPage
      title="Informe Semestral de Solicitudes de Información"
      subtitle="En cumplimiento del artículo 46 y último párrafo del artículo 74 de la Ley de Transparencia y Acceso a la Información Pública del Estado de Campeche, se publican los informes semestrales de solicitudes de información del SMAPAC."
    >
      <ArchivoSemestral titulo="Informes semestrales por año" anios={anios} />
      <ContactoTransparencia />
    </TransparenciaPage>
  )
}
