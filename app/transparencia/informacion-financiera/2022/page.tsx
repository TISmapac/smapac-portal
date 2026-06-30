import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2022Page() {
  return <MatrizFinanciera anio="2022" categorias={categorias} />
}
