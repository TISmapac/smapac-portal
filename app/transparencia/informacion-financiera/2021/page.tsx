import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2021Page() {
  return <MatrizFinanciera anio="2021" categorias={categorias} />
}
