import Link from "next/link"
import { Phone, Clock, Facebook, MapPin } from "lucide-react"

const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/modulos", label: "Módulos" },
  { href: "/tramites", label: "Trámites" },
  { href: "/servicios", label: "Servicios" },
  { href: "/cultura-del-agua", label: "Cultura del agua" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/aviso-de-privacidad", label: "Aviso de privacidad" },
]

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="lg:col-span-1">
            <div className="inline-flex bg-white rounded-lg p-3 mb-4">
              <img src="/brand/smapac.webp" alt="SMAPAC" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-cyan-100/80 leading-relaxed">
              Sistema Municipal de Agua Potable y Alcantarillado de Carmen. Organismo
              descentralizado del H. Ayuntamiento de Carmen, Campeche.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100063503659430"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Facebook className="h-4 w-4" />
              SMAPAC Carmen
            </a>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-cyan-100/80 hover:text-amber-400 transition-colors">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-cyan-100/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <span>(938) 382-3001<br />(938) 382-3063</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <span>Lunes a viernes<br />8:00 a 15:00 hrs</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <span>Ciudad del Carmen, Campeche</span>
              </li>
            </ul>
          </div>

          {/* Pago */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4">Servicios en línea</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pago" className="text-cyan-100/80 hover:text-amber-400 transition-colors">
                  Pago en línea
                </Link>
              </li>
              <li>
                <Link href="/tramites" className="text-cyan-100/80 hover:text-amber-400 transition-colors">
                  Trámites y requisitos
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="text-cyan-100/80 hover:text-amber-400 transition-colors">
                  Portal de transparencia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior con logos oficiales */}
      <div className="border-t border-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-cyan-100/70">&copy; SMAPAC 2024-2027</span>
          </div>
          <a
            href="http://www.carmen.gob.mx/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 group"
            title="Visitar el sitio del Ayuntamiento de Carmen"
          >
            <img src="/brand/carmen-blanco.webp" alt="Ayuntamiento de Carmen" className="h-10 w-auto" />
            <span className="text-xs text-cyan-100/70 group-hover:text-amber-400 transition-colors">
              Nos mueve el amor por Carmen
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
