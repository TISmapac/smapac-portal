import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2015Page() {
  return <MatrizFinanciera anio="2015" categorias={categorias} />
}
