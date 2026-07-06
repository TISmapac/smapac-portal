import type { ReactNode } from "react"
import { ShieldCheck, Mail, FileText, MapPin, ExternalLink } from "lucide-react"
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

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Protección de datos"
        title="Aviso de Privacidad"
        subtitle="El SMAPAC protege y trata tus datos personales conforme a la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Campeche."
      />

      <section className="py-14 bg-cyan-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10">
            {/* Encabezado del documento */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <span className="font-serif font-bold text-lg text-gray-900">
                  Aviso de Privacidad — Pago en línea
                </span>
              </div>
              <span className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Última modificación:</span> 29 de junio de 2026
              </span>
            </div>

            <Seccion n={1} title="Responsable del Tratamiento de Datos">
              <p>
                El <strong>Área de Ingresos del Sistema Municipal de Agua Potable y Alcantarillado de
                Carmen (SMAPAC)</strong>, con domicilio en <strong>Calle 33 núm. 140 int. 1, entre 50 y
                56, Col. Petrolera, C.P. 24180, Carmen, Campeche</strong>, es responsable del tratamiento
                y protección de los datos personales que nos proporcione, conforme a lo dispuesto por la{" "}
                <strong>Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado
                de Campeche</strong> y demás normatividad aplicable.
              </p>
            </Seccion>

            <Seccion n={2} title="Finalidades del Tratamiento">
              <p>Sus datos personales serán utilizados para:</p>
              <ul className={listCls}>
                <li>Generar su registro en nuestro <strong>portal oficial y aplicación móvil</strong>.</li>
                <li>Facilitar el <strong>pago en línea</strong> de los servicios de agua potable.</li>
                <li>
                  Enviar <strong>notificaciones push</strong> a su dispositivo relacionadas con el
                  servicio: recordatorios de fecha límite de pago, avisos sobre contratos con servicio
                  suspendido y comunicados sobre el estado del servicio.
                </li>
              </ul>
              <p>
                Las notificaciones push son <strong>opcionales</strong>: usted decide si autoriza su
                recepción y puede desactivarlas en cualquier momento desde la configuración de su
                dispositivo o cerrando sesión en la aplicación.
              </p>
              <p>
                Una vez ingresados sus datos, será redirigido a la plataforma de pagos del banco{" "}
                <strong>BBVA</strong>, el cual es responsable de los datos que usted ingrese en su
                sistema. Puede consultar el aviso de privacidad del banco{" "}
                <a
                  href="https://www.bbva.mx/personas/aviso-de-privacidad.html#bbva"
                  target="_blank"
                  rel="noreferrer"
                  className={linkCls}
                >
                  aquí
                </a>
                .
              </p>
            </Seccion>

            <Seccion n={3} title="Datos Personales Recopilados">
              <p>Podemos recopilar los siguientes datos:</p>
              <ul className={listCls}>
                <li>Nombre completo.</li>
                <li>Dirección.</li>
                <li>Número de cuenta o referencia del servicio.</li>
                <li>Datos de contacto (correo electrónico, teléfono).</li>
                <li>
                  Identificador (token) de notificaciones de su dispositivo y plataforma (Android o
                  iOS), únicamente cuando autoriza recibir notificaciones.
                </li>
              </ul>
            </Seccion>

            <Seccion n={4} title="Base Legal para el Tratamiento">
              <p>El tratamiento de sus datos se basa en:</p>
              <ul className={listCls}>
                <li>Su <strong>consentimiento</strong> (al registrarse y utilizar nuestros servicios).</li>
                <li>
                  El <strong>cumplimiento de obligaciones legales</strong> (facturación y cobro de
                  servicios).
                </li>
              </ul>
            </Seccion>

            <Seccion n={5} title="Transferencia de Datos">
              <p>No se realizarán transferencias de sus datos personales, excepto:</p>
              <ul className={listCls}>
                <li>Cuando sea necesario para procesar su pago a través del banco.</li>
                <li>
                  Para el envío de notificaciones push utilizamos el servicio{" "}
                  <strong>Firebase Cloud Messaging</strong> de Google, que recibe el identificador
                  (token) de su dispositivo con el único fin de entregar los avisos. Consulte la política
                  de privacidad de Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className={linkCls}>
                    aquí
                  </a>
                  .
                </li>
              </ul>
            </Seccion>

            <Seccion n={6} title="Seguridad y Conservación de Datos">
              <p>
                Sus datos serán protegidos mediante medidas administrativas, técnicas y físicas para
                evitar su pérdida, alteración o acceso no autorizado.
              </p>
              <p>
                Los datos personales serán conservados durante el tiempo necesario para cumplir con las
                finalidades establecidas y conforme a la normatividad aplicable.
              </p>
            </Seccion>

            <Seccion n={7} title="Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición)">
              <p>Usted puede:</p>
              <ul className={listCls}>
                <li><strong>Acceder</strong> a sus datos personales.</li>
                <li><strong>Rectificarlos</strong> si son incorrectos o incompletos.</li>
                <li><strong>Cancelar</strong> su tratamiento.</li>
                <li><strong>Oponerse</strong> a su uso para fines específicos.</li>
              </ul>
              <p>Para ejercer estos derechos, presente su solicitud:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Por correo electrónico:</strong>{" "}
                    <a href="mailto:transparencia@smapac.gob.mx" className={linkCls}>
                      transparencia@smapac.gob.mx
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Presencialmente:</strong> En la <strong>Unidad de Transparencia</strong>,
                    Calle 33 núm. 140 int. 1, Col. Petrolera, C.P. 24180.
                  </span>
                </li>
              </ul>
            </Seccion>

            <Seccion n={8} title="Cambios al Aviso de Privacidad">
              <p>Cualquier modificación será publicada en nuestro portal oficial:</p>
              <p>
                <a href="https://www.smapac.gob.mx/" target="_blank" rel="noreferrer" className={linkCls}>
                  https://www.smapac.gob.mx/
                </a>
              </p>
            </Seccion>

            <Seccion n={9} title="Aviso de Privacidad Integral">
              <p>Para mayor información, consulte el <strong>Aviso de Privacidad Integral</strong>:</p>
              <a
                href="https://www.smapac.gob.mx/transparencia/2020/UT/AP/API%20Ingresos.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-guinda-600 hover:bg-guinda-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <FileText className="h-4 w-4" />
                Aviso de Privacidad Integral (PDF)
                <ExternalLink className="h-4 w-4" />
              </a>
            </Seccion>

            {/* Dudas o aclaraciones */}
            <div className="mt-8 rounded-xl bg-cyan-50 border border-cyan-100 p-6">
              <h3 className="font-serif font-bold text-lg text-cyan-900 mb-2">¿Dudas o aclaraciones?</h3>
              <p className="text-gray-700">
                Contacte a la <strong>Unidad de Transparencia</strong>:
              </p>
              <a
                href="mailto:transparencia@smapac.gob.mx"
                className="mt-2 inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-semibold"
              >
                <Mail className="h-4 w-4" />
                transparencia@smapac.gob.mx
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500 italic">
              Este documento cumple con los lineamientos de la Ley de Protección de Datos Personales del
              Estado de Campeche y está sujeto a actualizaciones periódicas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
