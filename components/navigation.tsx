"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, CreditCard } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/modulos", label: "Módulos" },
  { href: "/tramites", label: "Trámites" },
  { href: "/servicios", label: "Servicios" },
  { href: "/cultura-del-agua", label: "Cultura del agua" },
  { href: "/transparencia", label: "Transparencia" },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")

  return (
    <header className="sticky top-0 z-50">
      {/* Navegación principal */}
      <nav className="bg-white border-b-2 border-amber-500/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logos */}
            <Link href="/" className="flex items-center gap-3">
              <img src="/brand/smapac.webp" alt="SMAPAC" className="h-11 w-auto" />
              <span className="hidden lg:block h-10 w-px bg-gray-200" />
              <img
                src="/brand/carmen.webp"
                alt="Ayuntamiento de Carmen"
                className="hidden lg:block h-11 w-auto"
              />
            </Link>

            {/* Enlaces (escritorio) — resaltado dorado */}
            <div className="hidden md:flex items-baseline gap-1">
              {navLinks.map((l) => {
                const active = isActive(l.href)
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-3 py-2 text-sm font-semibold transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-amber-500 after:transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 ${
                      active
                        ? "text-cyan-700 after:scale-x-100"
                        : "text-gray-700 hover:text-amber-600 after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {l.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA Pago en línea (guinda) */}
            <div className="hidden md:flex items-center">
              <Link href="/pago">
                <Button className="bg-guinda-600 hover:bg-guinda-700 text-white font-semibold">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pago en línea
                </Button>
              </Link>
            </div>

            {/* Botón móvil */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 pb-4">
              <div className="pt-2 space-y-1">
                {navLinks.map((l) => {
                  const active = isActive(l.href)
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        active ? "bg-amber-50 text-amber-700" : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      }`}
                    >
                      {l.label}
                    </Link>
                  )
                })}
                <Link href="/pago" onClick={() => setIsMenuOpen(false)} className="block px-3 pt-2">
                  <Button className="w-full bg-guinda-600 hover:bg-guinda-700 text-white">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pago en línea
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
