import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2024Page() {
  return <MatrizFinanciera anio="2024" categorias={categorias} />
}
