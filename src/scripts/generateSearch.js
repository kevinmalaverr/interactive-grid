require("dotenv").config()

// db.js
const Path = require("path")
const glob = require("glob")
const fs = require("fs")

const apiFiles = glob.sync(
  `${Path.resolve(__dirname, "../pageData")}/**/*.js`,
  {
    nodir: true,
  }
)

const data = []

apiFiles.forEach((filePath) => {
  const api = require(filePath)
  const { title, links } = api
  let [, url] = filePath.split("pageData/")
  url = url.slice(0, url.length - 3)

  links.forEach((link) => {
    data.push({
      title: link.title,
      page: title,
      href: `/${url}#target-${link.id}`,
    })
  })
})

fs.writeFileSync("./static/searchIndexes.json", JSON.stringify(data))
console.log(`generated ${data.length} serches`)
