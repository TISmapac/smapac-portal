// Genera out/sitemap.xml a partir de las rutas exportadas en out/.
// Se ejecuta solo después de cada build (script "postbuild" de package.json),
// así el sitemap siempre refleja las páginas reales del sitio.
import { readdirSync, statSync, writeFileSync } from "node:fs"
import { join, relative } from "node:path"

const BASE = "https://www.smapac.gob.mx"
const OUT = new URL("../out", import.meta.url).pathname
const EXCLUIDAS = new Set(["404"]) // rutas que no deben indexarse

function rutas(dir) {
  const encontradas = []
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre)
    if (!statSync(ruta).isDirectory()) continue
    const rel = relative(OUT, ruta)
    if (EXCLUIDAS.has(rel.split("/")[0]) || rel.startsWith("_next")) continue
    try {
      statSync(join(ruta, "index.html"))
      encontradas.push(`/${rel}/`)
    } catch {}
    encontradas.push(...rutas(ruta))
  }
  return encontradas
}

const hoy = new Date().toISOString().slice(0, 10)
const urls = ["/", ...rutas(OUT).sort()]
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${BASE}${u}</loc><lastmod>${hoy}</lastmod></url>`).join("\n")}
</urlset>
`
writeFileSync(join(OUT, "sitemap.xml"), xml)
console.log(`sitemap.xml generado con ${urls.length} URLs`)
