import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CreditCard, Phone, Clock, Droplets, Waves, Sprout, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-800 to-cyan-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-amber-300 font-semibold tracking-wide uppercase text-sm mb-4">
              Sistema Municipal de Agua Potable y Alcantarillado de Carmen
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-tight mb-6">
              Trabajamos para que no te falte el agua
            </h1>
            <p className="text-lg md:text-xl text-cyan-50/90 mb-8 max-w-2xl">
              En el SMAPAC garantizamos el servicio de agua potable y alcantarillado en el municipio
              de Carmen, con compromiso y calidad para todas las familias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pago">
                <Button size="lg" className="bg-guinda-600 hover:bg-guinda-700 text-white px-8 py-4 text-lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Paga tu recibo en línea
                </Button>
              </Link>
              <Link href="/servicios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-700 px-8 py-4 text-lg bg-transparent"
                >
                  Conoce nuestros servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es SMAPAC? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-6">
                ¿Qué es <span className="text-cyan-600">SMAPAC</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                El Sistema Municipal de Agua Potable y Alcantarillado de Carmen (SMAPAC) es un
                organismo descentralizado del H. Ayuntamiento de Carmen, Campeche, que se encarga de
                la prestación del servicio público de agua potable y alcantarillado en el municipio.
              </p>
              <div className="mt-6 h-1 w-24 bg-amber-500 rounded-full" />
            </div>
            <div className="relative">
              <img
                src="/img/que-es-smapac.webp"
                alt="Servicios del SMAPAC"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section className="py-20 bg-cyan-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/img/que-hacemos.webp"
                alt="¿Qué hacemos en SMAPAC?"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-6">¿Qué hacemos?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                En SMAPAC trabajamos para garantizar el acceso al agua potable y el saneamiento
                adecuado en el municipio de Carmen, Campeche. Nuestro compromiso es brindar un
                servicio eficiente y de calidad a todos los ciudadanos.
              </p>
              <ul className="space-y-3">
                {[
                  "Suministro de agua potable",
                  "Drenaje y alcantarillado",
                  "Saneamiento del agua",
                  "Atención y cultura del agua",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-4">Nuestros servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Garantizamos el ciclo completo del agua para Ciudad del Carmen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                color: "cyan",
                title: "Agua potable",
                desc: "Suministro continuo y de calidad de agua potable para hogares, comercios e instituciones.",
              },
              {
                icon: Waves,
                color: "guinda",
                title: "Alcantarillado",
                desc: "Red de drenaje y alcantarillado para una adecuada conducción de aguas residuales.",
              },
              {
                icon: Sprout,
                color: "amber",
                title: "Cultura del agua",
                desc: "Programas y campañas para promover el uso responsable y el cuidado del agua.",
              },
            ].map((s) => (
              <Card key={s.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 ${
                      s.color === "cyan"
                        ? "bg-cyan-100 text-cyan-600"
                        : s.color === "guinda"
                          ? "bg-guinda-100 text-guinda-600"
                          : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    <s.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Tienes problemas en tu servicio? */}
      <section className="py-20 bg-cyan-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-guinda-100 text-guinda-700 font-semibold text-sm px-3 py-1 rounded-full mb-5">
                Atención ciudadana
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-4">
                ¿Tienes problemas en tu servicio?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Repórtalo y te atenderemos. Llámanos a nuestras líneas telefónicas y con gusto te
                ayudamos con dudas, aclaraciones o fallas en tu servicio.
              </p>
              <div className="bg-white rounded-xl shadow-md p-6 inline-flex flex-col gap-4">
                <a
                  href="tel:9383823001"
                  className="flex items-center gap-4 text-cyan-700 hover:text-cyan-800 transition-colors"
                >
                  <span className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </span>
                  <span className="text-2xl md:text-3xl font-serif font-black">
                    (938) 382-3001
                    <span className="block text-base font-sans font-medium text-gray-500">
                      y (938) 382-3063
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-2 text-gray-600 border-t border-gray-100 pt-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span>Lunes a viernes de 8:00 a 15:00 hrs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/atencion.webp"
                alt="Atención ciudadana SMAPAC"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Redes sociales / Facebook */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FSmapac-Carmen-100063503659430%2F%3Flocale%3Des_LA&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                className="rounded-xl shadow-lg border border-gray-200 bg-white"
                width={500}
                height={640}
                style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
                scrolling="no"
                frameBorder={0}
                allowFullScreen
                title="Página de Facebook de SMAPAC Carmen"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-6">
                Conócenos en redes sociales
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mantente informado sobre los últimos avances y noticias siguiendo la cuenta oficial
                del Sistema Municipal de Agua Potable y Alcantarillado de Carmen en Facebook.
                Publicamos avisos, cortes programados y novedades del día.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100063503659430"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Síguenos en Facebook
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
