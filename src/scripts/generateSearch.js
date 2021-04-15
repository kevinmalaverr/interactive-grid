const fs = require("fs")

module.exports = function generateSearch(edges) {
  const regex = new RegExp(`<a href="(.*)">(.*)</a`, "g")
  const data = {}

  edges.forEach(({ node }) => {
    const content = [...node.tableOfContents.matchAll(regex)]
    if (data[node.frontmatter.lang] === undefined) {
      data[node.frontmatter.lang] = []
    }
    content.forEach((search) => {
      data[node.frontmatter.lang].push({
        title: search[2],
        page: node.frontmatter.title,
        href: `${
          node.frontmatter.lang === "en" ? "" : `/${node.frontmatter.lang}`
        }${node.frontmatter.slug}${search[1]}`,
      })
    })
  })

  Object.keys(data).forEach((lang) => {
    fs.writeFileSync(
      `./static/searches/searchIndexes.${lang}.json`,
      JSON.stringify(data[lang])
    )
    console.log(`${lang}: generated ${data[lang].length} searches`)
  })
}
