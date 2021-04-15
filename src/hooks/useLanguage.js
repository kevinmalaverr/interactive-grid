import { useLocation } from "@reach/router"
import languagesConfig from "../config/languages.json"

const useLanguage = () => {
  const { pathname } = useLocation()
  const regex = new RegExp(`/(${languagesConfig.languages.join("|")})/`)

  const match = pathname.match(regex)

  if (match) return match[1]

  return languagesConfig.defaultLanguage
}

export default useLanguage
