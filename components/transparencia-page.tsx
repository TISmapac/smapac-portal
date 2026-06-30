import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export default function TransparenciaPage({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero eyebrow="Transparencia" title={title} subtitle={subtitle} />
      <section className="py-14 bg-cyan-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/transparencia">
              <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Transparencia
              </Button>
            </Link>
          </div>
          {children}
        </div>
      </section>
      <Footer />
    </div>
  )
}
