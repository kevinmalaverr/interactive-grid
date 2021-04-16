import React from "react"
import "./styles.css"
import { Provider } from "../../context"
import Header from "../Header/index"
import SEO from "../SEO"
import FooterNav from "../FooterNav"

const Layout = ({ children, pageContext, ...props }) => (
  <Provider>
    <SEO
      title={pageContext.title}
      description={pageContext.description}
      lang={pageContext.lang}
    />
    <Header title={pageContext.title} />
    <div className="main-container">
      <div>{children}</div>
      {pageContext.navigation ? (
        <FooterNav
          prev={pageContext.langPath + pageContext.navigation.prev}
          next={pageContext.langPath + pageContext.navigation.next}
        />
      ) : null}
    </div>
  </Provider>
)

export default Layout
