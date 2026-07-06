import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2026Page() {
  return <MatrizFinanciera anio="2026" categorias={categorias} />
}
