"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard no disponible */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copiar ${label ?? text}`}
      title="Copiar"
      className="inline-flex items-center justify-center rounded-md p-1.5 text-cyan-600 transition-colors hover:bg-cyan-50"
    >
      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}
