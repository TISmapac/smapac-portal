import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2018Page() {
  return <MatrizFinanciera anio="2018" categorias={categorias} />
}
