import {
  ClipboardCheck,
  Landmark,
  ShieldCheck,
  Lock,
  FileText,
  Users,
  Globe,
  Coins,
  Scale,
  Contact,
  ExternalLink,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

const ARCHIVO = "https://smapac.gob.mx/transparencia-web/"

type Item = { title: string; icon: LucideIcon; url: string; external?: boolean; internal?: boolean }

const items: Item[] = [
  { title: "Obligaciones comunes de transparencia", icon: ClipboardCheck, url: ARCHIVO + "comunes2025.html" },
  { title: "Información financiera (LGCG)", icon: Landmark, url: ARCHIVO + "inf_financiera.html" },
  { title: "Avisos de privacidad", icon: ShieldCheck, url: ARCHIVO + "avisos_de_privacidad.html" },
  {
    title: "Índice de expedientes clasificados como reservados",
    icon: Lock,
    url: ARCHIVO + "indice_expedientes_clasificados_reserv.html",
  },
  {
    title: "Informe semestral de solicitudes de información",
    icon: FileText,
    url: ARCHIVO + "inf_sem_sol_informacion.html",
  },
  { title: "Informe anual de datos personales", icon: Users, url: ARCHIVO + "inf_anual_datos_personales.html" },
  {
    title: "SIPOT — Plataforma Nacional de Transparencia",
    icon: Globe,
    url: "https://www.plataformadetransparencia.org.mx/",
    external: true,
  },
  { title: "Presupuesto de ingreso y egreso", icon: Coins, url: ARCHIVO + "presu_ing_e_egr_y_normas.html" },
  { title: "Marco normativo y reglamento interno", icon: Scale, url: ARCHIVO + "reglamento.html" },
  { title: "Directorio", icon: Contact, url: "/transparencia/directorio", internal: true },
]

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Rendición de cuentas"
        title="Portal de Transparencia de SMAPAC"
        subtitle="En cumplimiento del Artículo 70 de la Ley General de Transparencia y Acceso a la Información Pública y del Artículo 74 de la Ley de Transparencia del Estado de Campeche, aquí puedes consultar la información pública, proactiva y de interés que genera el SMAPAC."
      />

      <section className="py-16 bg-cyan-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => {
              const cls =
                "group flex items-center gap-4 rounded-xl bg-white p-5 shadow-md border-l-4 border-transparent transition-all hover:border-amber-500 hover:shadow-lg"
              const inner = (
                <>
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <span className="flex-1 font-semibold text-sm leading-snug text-gray-800 group-hover:text-cyan-700">
                    {item.title}
                  </span>
                  {item.external ? (
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-amber-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-300 group-hover:text-amber-600" />
                  )}
                </>
              )
              return item.internal ? (
                <Link key={item.title} href={item.url} className={cls}>
                  {inner}
                </Link>
              ) : (
                <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className={cls}>
                  {inner}
                </a>
              )
            })}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Los enlaces dirigen al archivo oficial de transparencia del SMAPAC y a la Plataforma Nacional de Transparencia.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
