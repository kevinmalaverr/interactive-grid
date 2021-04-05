import React, { useEffect } from "react"
import Prism from "prismjs"

export default function ReactPrismjs(props) {
  const codeRef = React.createRef()
  const { prefixCls, className, language, source, children, ...others } = props
  const langCls = language ? `language-${language}` : ""
  async function highlight() {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }
  useEffect(() => {
    highlight()
  }, [language, source])
  return (
    <pre
      className={`${prefixCls} ${className || ""} ${langCls}`}
      lang={language}
      {...others}
    >
      <code className={langCls} ref={codeRef}>
        {source || children}
      </code>
    </pre>
  )
}
