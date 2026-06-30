import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2025Page() {
  return <MatrizFinanciera anio="2025" categorias={categorias} />
}
