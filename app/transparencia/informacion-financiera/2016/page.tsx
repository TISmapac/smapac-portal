import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2016Page() {
  return <MatrizFinanciera anio="2016" categorias={categorias} />
}
