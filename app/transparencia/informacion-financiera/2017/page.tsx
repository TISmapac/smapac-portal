import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2017Page() {
  return <MatrizFinanciera anio="2017" categorias={categorias} />
}
