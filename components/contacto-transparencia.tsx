import { Mail } from "lucide-react"

export default function ContactoTransparencia({ email = "transparencia@smapac.gob.mx" }: { email?: string }) {
  return (
    <div className="mt-10 rounded-xl bg-cyan-50 border border-cyan-100 p-6">
      <h2 className="font-serif font-bold text-lg text-cyan-900 mb-2">¿Dudas o aclaraciones?</h2>
      <p className="text-gray-700">Puedes solicitar información adicional en el siguiente correo:</p>
      <a
        href={`mailto:${email}`}
        className="mt-2 inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-semibold"
      >
        <Mail className="h-4 w-4" />
        {email}
      </a>
    </div>
  )
}
