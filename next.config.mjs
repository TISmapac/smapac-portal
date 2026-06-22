/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: genera HTML/CSS/JS puro en /out para subir por FTP a Ferozo.
  // Para migrar a SSR (VPS/Node) en el futuro: basta con comentar la línea `output`.
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
