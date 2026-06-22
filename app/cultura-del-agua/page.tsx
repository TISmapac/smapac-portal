import { Card, CardContent } from "@/components/ui/card"
import { Droplets } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import YouTubeLite from "@/components/youtube-lite"

const videos = [
  {
    id: "MDCrZeQLh9E",
    titulo: "El Ciclo del Agua",
    descripcion:
      "Aprende sobre el proceso natural del ciclo del agua y su importancia para la vida en la Tierra.",
  },
  {
    id: "3AxYmfX9VVo",
    titulo: "Conservación del Agua",
    descripcion:
      "Descubre técnicas y consejos prácticos para conservar el agua en tu hogar y comunidad.",
  },
  {
    id: "dICsr7AAbWs",
    titulo: "Contaminación del Agua",
    descripcion:
      "Conoce las principales causas de la contaminación del agua y cómo podemos prevenirlas.",
  },
  {
    id: "VE7dJ-rxl4s",
    titulo: "Uso Responsable del Agua",
    descripcion:
      "Aprende sobre la importancia del uso responsable del agua y su impacto en el medio ambiente.",
  },
  {
    id: "UPaJ8IiSOLQ",
    titulo: "Tratamiento de Aguas Residuales",
    descripcion:
      "Entiende el proceso de tratamiento de aguas residuales y su importancia para la salud pública.",
  },
  {
    id: "kF71vqQka4Y",
    titulo: "Mantengamos limpio el arroyo de la caleta",
    descripcion:
      "Aprende cómo podemos colaborar para mantener limpio el arroyo de la caleta y proteger nuestro medio ambiente.",
  },
  {
    id: "tebzVzF6TYg",
    titulo: "Uso eficiente del Agua en el municipio de Carmen",
    descripcion:
      "Descubre estrategias para utilizar el agua de manera eficiente en el municipio de Carmen y contribuir a su conservación.",
  },
]

export default function CulturaDelAguaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        eyebrow="Cuidemos el agua"
        title="Cultura del agua"
        subtitle="La cultura del agua es un conjunto de valores, actitudes y comportamientos que fomentan el uso responsable y sostenible del agua. En SMAPAC promovemos la educación y la conciencia sobre la importancia del agua en nuestras vidas y en el medio ambiente."
      />

      <section className="py-16 bg-cyan-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-100 text-cyan-600 mb-4">
              <Droplets className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-serif font-black text-gray-900">Videos informativos</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Material educativo para conocer, valorar y cuidar el agua. Da clic en cada video para reproducirlo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((v) => (
              <Card key={v.id} className="overflow-hidden border-0 shadow-lg flex flex-col">
                <YouTubeLite id={v.id} title={v.titulo} />
                <CardContent className="pt-5 flex-1">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">{v.titulo}</h3>
                  <p className="text-gray-600 text-sm">{v.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
