"use client"

import type { ReactNode } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  "/img/hero/header-1.webp",
  "/img/hero/header-2.webp",
  "/img/hero/header-3.webp",
  "/img/hero/carousel-4.webp",
  "/img/hero/carousel-5.webp",
]

const AUTOPLAY_MS = 6000

export default function HeroCarousel({ children }: { children: ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selected, setSelected] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  // Autoplay con pausa en hover/foco/pestaña oculta y respeto a prefers-reduced-motion
  useEffect(() => {
    if (!emblaApi) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const node = emblaApi.rootNode()
    const stop = () => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
    }
    const start = () => {
      stop()
      timer.current = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS)
    }
    const onVisibility = () => (document.hidden ? stop() : start())

    start()
    node.addEventListener("mouseenter", stop)
    node.addEventListener("mouseleave", start)
    node.addEventListener("focusin", stop)
    node.addEventListener("focusout", start)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      stop()
      node.removeEventListener("mouseenter", stop)
      node.removeEventListener("mouseleave", start)
      node.removeEventListener("focusin", stop)
      node.removeEventListener("focusout", start)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [emblaApi])

  return (
    <section
      className="relative text-white"
      aria-roledescription="carrusel"
      aria-label="Imágenes del SMAPAC"
    >
      {/* Viewport / imágenes */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, i) => (
            <div
              key={src}
              className="relative min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${slides.length}`}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                loading={i === 0 ? "eager" : "lazy"}
                className="h-[460px] md:h-[560px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scrim para contraste del texto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-900/90 via-cyan-900/60 to-cyan-900/20" />

      {/* Texto superpuesto (estable, no se mueve con las diapositivas) */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </div>

      {/* Flechas */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Puntos */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            aria-current={selected === i}
            className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
              selected === i ? "w-7 bg-amber-400" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
