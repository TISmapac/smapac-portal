import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Construction, ArrowLeft } from "lucide-react"

export default function EnPreparacion({ seccion }: { seccion: string }) {
  return (
    <section className="py-24 bg-cyan-50/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6">
          <Construction className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">
          Sección en preparación
        </h2>
        <p className="text-gray-600 mb-8">
          Estamos trabajando en el contenido de <span className="font-semibold">{seccion}</span> para
          ofrecerte la mejor experiencia. Muy pronto estará disponible.
        </p>
        <Link href="/">
          <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </section>
  )
}
