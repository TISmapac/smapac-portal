import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Navigation as NavIcon } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

const modulos = [
  {
    nombre: "Oficinas Centrales Calle 56",
    detalle: "Atención a usuarios y cajas",
    direccion: "Calle 56 por 33 No. 140, Col. Petrolera, C.P. 24180, Ciudad del Carmen, Campeche",
    semana: "08:00 – 16:00 hrs",
    sabado: "09:00 – 14:00 hrs",
    foto: "/img/modulos/calle56.webp",
    mapa: "Calle 56 por 33 No. 140 Col. Petrolera Ciudad del Carmen Campeche",
  },
  {
    nombre: "Sucursal Soriana",
    detalle: "Módulo de atención y pagos",
    direccion: "Av. Aviación S/N por Av. Isla de Tris, C.P. 24190, Ciudad del Carmen, Campeche",
    semana: "08:00 – 15:00 hrs",
    sabado: "09:00 – 14:00 hrs",
    foto: "/img/modulos/soriana.webp",
    mapa: "Av. Aviacion por Av. Isla de Tris Ciudad del Carmen Campeche",
  },
  {
    nombre: "Sucursal Mercado Alonso Felipe de Andrade",
    detalle: "Módulo de atención y pagos",
    direccion: "Calle 20, Mercado principal Alonso Felipe de Andrade, Ciudad del Carmen, Campeche",
    semana: "08:00 – 15:00 hrs",
    sabado: "09:00 – 14:00 hrs",
    foto: "/img/modulos/mercado-afa.webp",
    mapa: "Calle 20, Mercado principal Alonso Felipe de Andrade, Ciudad del Carmen, Campeche",
  },
  {
    nombre: "Sucursal Mercado Del Chechén",
    detalle: "Módulo de atención y pagos",
    direccion: "Av. Isla de Tris S/N, Luis Donaldo Colosio, Ciudad del Carmen, Campeche",
    semana: "08:00 – 15:00 hrs",
    sabado: "09:00 – 14:00 hrs",
    foto: "/img/modulos/chechen.webp",
    mapa: "Av. Isla de Tris S/N, Luis Donaldo Colosio, Ciudad del Carmen, Campeche",
  },
  {
    nombre: "Sucursal Dirección de Desarrollo Social y Económico",
    detalle: "Módulo de atención y pagos",
    direccion: "Calle 20 #89, Centro, C.P. 24100, Ciudad del Carmen, Campeche",
    semana: "08:00 – 15:00 hrs",
    sabado: "09:00 – 14:00 hrs",
    foto: "/img/modulos/desarrollo.webp",
    mapa: "Calle 20 #89 Centro 24100 Ciudad del Carmen Campeche",
  },
]

export default function ModulosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Atención al usuario"
        title="Módulos de Atención al Usuario"
        subtitle="Encuentra el módulo de SMAPAC más cercano, donde podrás realizar trámites y pagos del servicio de agua potable y alcantarillado. Aquí tienes dirección, horario, foto de referencia y ubicación de cada uno."
      />

      <section className="py-16 bg-cyan-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modulos.map((m) => {
              const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(m.mapa)}&output=embed`
              const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.mapa)}`
              return (
                <Card key={m.nombre} className="overflow-hidden border-0 shadow-lg flex flex-col">
                  {/* Foto de referencia */}
                  <div className="relative h-52 w-full">
                    <img src={m.foto} alt={m.nombre} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-5">
                      <h3 className="text-white font-serif font-bold text-xl leading-tight">{m.nombre}</h3>
                      <p className="text-cyan-50/90 text-sm">{m.detalle}</p>
                    </div>
                  </div>

                  <CardContent className="flex flex-col gap-4 pt-6 flex-1">
                    {/* Dirección */}
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-guinda-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{m.direccion}</p>
                    </div>

                    {/* Horario */}
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700">
                        <p>
                          <span className="font-semibold">Lunes a Viernes:</span> {m.semana}
                        </p>
                        <p>
                          <span className="font-semibold">Sábado:</span> {m.sabado}
                        </p>
                      </div>
                    </div>

                    {/* Mapa de ubicación */}
                    <div className="rounded-lg overflow-hidden border border-gray-200 mt-1">
                      <iframe
                        src={mapEmbed}
                        className="w-full h-56"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Ubicación de ${m.nombre}`}
                      />
                    </div>

                    <a href={mapLink} target="_blank" rel="noreferrer" className="mt-auto">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                        <NavIcon className="mr-2 h-4 w-4" />
                        Cómo llegar
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
