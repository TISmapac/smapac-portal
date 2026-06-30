import Link from "next/link"
import TransparenciaPage from "@/components/transparencia-page"
import ContactoTransparencia from "@/components/contacto-transparencia"

const anios = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]

export default function InformacionFinancieraPage() {
  return (
    <TransparenciaPage
      title="Información Financiera"
      subtitle="En cumplimiento de la Constitución Federal, la Ley General de Transparencia, la Ley de Transparencia del Estado de Campeche y la Ley General de Contabilidad Gubernamental, el SMAPAC pone a disposición la información financiera por ejercicio fiscal."
    >
      <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6">Ejercicios fiscales</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {anios.map((anio) => (
          <Link
            key={anio}
            href={`/transparencia/informacion-financiera/${anio}`}
            className="flex items-center justify-center rounded-xl bg-cyan-600 px-4 py-8 text-2xl font-serif font-black text-white shadow-md transition-all hover:bg-cyan-700 hover:shadow-lg"
          >
            {anio}
          </Link>
        ))}
      </div>

      <ContactoTransparencia email="contabilidad@smapac.gob.mx" />
    </TransparenciaPage>
  )
}
