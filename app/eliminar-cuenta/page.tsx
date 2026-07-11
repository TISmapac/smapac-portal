import type { ReactNode } from "react"
import { UserX, Mail, Smartphone, Clock, CheckCircle2, Archive } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

function Seccion({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="py-7 border-t border-gray-100 first:border-t-0">
      <h2 className="flex items-center gap-3 font-serif font-bold text-xl text-gray-900 mb-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white text-sm font-bold flex items-center justify-center">
          {n}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-gray-700 leading-relaxed pl-11">{children}</div>
    </section>
  )
}

const linkCls = "text-cyan-600 hover:text-cyan-700 font-medium underline underline-offset-2"
const listCls = "list-disc marker:text-cyan-600 pl-5 space-y-1.5"

export default function EliminarCuentaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Protección de datos"
        title="Eliminación de cuenta"
        subtitle="Cómo solicitar la eliminación de tu cuenta de la aplicación móvil y del portal de pago en línea del SMAPAC."
      />

      <section className="py-14 bg-cyan-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10">
            {/* Encabezado del documento */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                  <UserX className="h-6 w-6" />
                </span>
                <span className="font-serif font-bold text-lg text-gray-900">
                  Eliminación de cuenta — App SMAPAC Carmen y pago en línea
                </span>
              </div>
              <span className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Última modificación:</span> 11 de julio de 2026
              </span>
            </div>

            <Seccion n={1} title="¿A qué aplica esta solicitud?">
              <p>
                Esta solicitud elimina la <strong>cuenta de usuario</strong> que creaste para la{" "}
                <strong>aplicación móvil SMAPAC CARMEN</strong> y el <strong>portal de pago en
                línea</strong> (registrada con tu correo electrónico). No cancela tu contrato del
                servicio de agua potable ni afecta el suministro.
              </p>
            </Seccion>

            <Seccion n={2} title="Cómo solicitar la eliminación">
              <p>Puedes iniciar la solicitud por cualquiera de estos dos medios:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Desde la aplicación:</strong> inicia sesión y ve a{" "}
                    <strong>Mi perfil → Eliminar mi cuenta</strong>. Confirma con tu contraseña y la
                    solicitud quedará registrada al instante.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Por correo electrónico:</strong> escribe a{" "}
                    <a href="mailto:soporte@smapac.gob.mx?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta" className={linkCls}>
                      soporte@smapac.gob.mx
                    </a>{" "}
                    con el asunto <strong>“Solicitud de eliminación de cuenta”</strong>. Envía el
                    mensaje <strong>desde el correo con el que te registraste</strong>; es la forma de
                    verificar que la solicitud proviene del titular de la cuenta.
                  </span>
                </li>
              </ul>
            </Seccion>

            <Seccion n={3} title="Qué datos se eliminan">
              <p>Al procesar la solicitud se eliminan de forma definitiva:</p>
              <ul className={listCls}>
                <li>Tu cuenta de usuario (nombre, correo electrónico y contraseña).</li>
                <li>Los contratos vinculados a tu cuenta (solo el vínculo, no el contrato del servicio).</li>
                <li>Los identificadores (tokens) de notificaciones de tus dispositivos.</li>
              </ul>
            </Seccion>

            <Seccion n={4} title="Qué datos se conservan">
              <p className="flex items-start gap-3">
                <Archive className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>
                  Los <strong>registros de facturación y del padrón del servicio de agua potable</strong>{" "}
                  se conservan conforme a la normatividad aplicable, por tratarse de registros del
                  servicio público con obligaciones legales de conservación. Estos registros existen
                  independientemente de que tengas o no una cuenta en la aplicación.
                </span>
              </p>
            </Seccion>

            <Seccion n={5} title="Plazo y confirmación">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>
                    La solicitud se atiende en un plazo máximo de <strong>20 días hábiles</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Recibirás un <strong>acuse de recibo</strong> al registrar la solicitud y una{" "}
                    <strong>confirmación por correo</strong> cuando la eliminación se haya completado.
                  </span>
                </li>
              </ul>
              <p>
                Si deseas volver a usar la aplicación después de eliminar tu cuenta, bastará con
                registrarte de nuevo y vincular tus contratos.
              </p>
            </Seccion>

            {/* Dudas o aclaraciones */}
            <div className="mt-8 rounded-xl bg-cyan-50 border border-cyan-100 p-6">
              <h3 className="font-serif font-bold text-lg text-cyan-900 mb-2">¿Dudas o aclaraciones?</h3>
              <p className="text-gray-700">
                Escríbenos y con gusto te apoyamos:
              </p>
              <a
                href="mailto:soporte@smapac.gob.mx"
                className="mt-2 inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-semibold"
              >
                <Mail className="h-4 w-4" />
                soporte@smapac.gob.mx
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500 italic">
              Este procedimiento complementa al Aviso de Privacidad y a los derechos ARCO previstos en
              la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de
              Campeche.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
