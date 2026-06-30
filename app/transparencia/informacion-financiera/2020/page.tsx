import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2020Page() {
  return <MatrizFinanciera anio="2020" categorias={categorias} />
}
