import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import languagesConfig from "../config/languages.json"

const useLanguage = () => {
  const { pathname } = useLocation()
  const regex = new RegExp(`/(${languagesConfig.languages.join("|")})/`)

  const match = pathname.match(regex)

  const changeLang = (langCode) => {
    const langPath =
      langCode === languagesConfig.defaultLanguage ? "" : `/${langCode}`
    navigate(match ? langPath + pathname.slice(3) : langPath + pathname)
  }

  if (match) {
    return [match[1], pathname.slice(3), changeLang]
  }

  return [languagesConfig.defaultLanguage, pathname, changeLang]
}

export default useLanguage
