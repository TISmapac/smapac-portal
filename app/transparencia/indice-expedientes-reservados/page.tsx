import TransparenciaPage from "@/components/transparencia-page"
import ArchivoSemestral, { type Anio } from "@/components/archivo-semestral"
import ContactoTransparencia from "@/components/contacto-transparencia"

const IECR = "https://www.smapac.gob.mx/transparencia-smapac/2024/TRANSPARENCIA-PORTALWEB/IECR/"

const anios: Anio[] = [
  {
    anio: "2025",
    s1: "https://www.smapac.gob.mx/transparencia-smapac/2025/TRANSPARENCIA%202025/IECR%202025/IECR-1-2025.pdf",
    s2: null,
  },
  { anio: "2024", s1: IECR + "IECR-1-2024.pdf", s2: IECR + "IECR-2-2024.pdf" },
  { anio: "2023", s1: IECR + "IECR-2023-1.pdf", s2: IECR + "IECR-2023-2.pdf" },
  { anio: "2022", s1: IECR + "IECR-2022-1.pdf", s2: IECR + "IECR-2022-2.pdf" },
  { anio: "2021", s1: IECR + "IECR-2021-1.pdf", s2: IECR + "IECR-2021-2.pdf" },
]

export default function IndiceExpedientesReservadosPage() {
  return (
    <TransparenciaPage
      title="Índice de Expedientes Clasificados como Reservados"
      subtitle="En cumplimiento del artículo 46 y último párrafo del artículo 74 de la Ley de Transparencia y Acceso a la Información Pública del Estado de Campeche, se publican los informes semestrales del Índice de Expedientes Clasificados como Reservados del SMAPAC."
    >
      <ArchivoSemestral titulo="Informes semestrales por año" anios={anios} />
      <ContactoTransparencia />
    </TransparenciaPage>
  )
}
