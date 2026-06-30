import MatrizFinanciera from "@/components/matriz-financiera"
import { categorias } from "./datos"

export default function InformacionFinanciera2023Page() {
  return <MatrizFinanciera anio="2023" categorias={categorias} />
}
