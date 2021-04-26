import React from "react"
import "./styles.css"
import Header from "../Header/index"
import SEO from "../SEO"
import FooterNav from "../FooterNav"
import Banner from "../Banner"
import { Provider } from "../../context"

const Layout = ({ children, data }) => {
  console.log(data)
  return (
    <Provider data={data}>
      <SEO
        title={data.page.frontmatter.title}
        description={data.page.frontmatter.description}
        lang={data.page.frontmatter.lang}
      />
      <Banner />
      <Header title={data.page.frontmatter.title} />
      <div className="main-container">
        <div>{children}</div>
        {data.page.frontmatter.navigation ? (
          <FooterNav
            prev={
              data.page.frontmatter.langPath +
              data.page.frontmatter.navigation.prev
            }
            next={
              data.page.frontmatter.langPath +
              data.page.frontmatter.navigation.next
            }
          />
        ) : null}
      </div>
    </Provider>
  )
}
export default Layout
