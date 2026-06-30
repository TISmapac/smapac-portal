import { FileText, Download } from "lucide-react"

export default function DocCard({ title, href, meta }: { title: string; href: string; meta?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-md border-l-4 border-transparent transition-all hover:border-amber-500 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-guinda-100 text-guinda-600">
        <FileText className="h-6 w-6" />
      </span>
      <span className="flex-1">
        <span className="block font-semibold text-gray-900 leading-snug group-hover:text-cyan-700">{title}</span>
        {meta && <span className="mt-0.5 block text-sm text-gray-500">{meta}</span>}
      </span>
      <Download className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-amber-600" />
    </a>
  )
}
