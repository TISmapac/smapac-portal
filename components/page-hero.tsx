interface PageHeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-800 to-cyan-600 text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {eyebrow && (
          <p className="text-amber-300 font-semibold tracking-wide uppercase text-sm mb-3">{eyebrow}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-cyan-50/90 max-w-3xl">{subtitle}</p>}
        <div className="mt-6 h-1 w-24 bg-amber-500 rounded-full" />
      </div>
    </section>
  )
}
