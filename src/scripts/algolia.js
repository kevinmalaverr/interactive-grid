require("dotenv").config()

// db.js
const Path = require("path")
const glob = require("glob")

const algoliasearch = require("algoliasearch")

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
)
const index = client.initIndex("id")

const apiFiles = glob.sync(
  `${Path.resolve(__dirname, "../pageData")}/**/*.js`,
  {
    nodir: true,
  }
)

const data = []

apiFiles.forEach((filePath) => {
  const api = require(filePath)
  const { links } = api
  let [, url] = filePath.split("pageData/")
  url = url.slice(0, url.length - 3)

  links.forEach((link) => {
    data.push({
      objectID: `${url}-${link.id}`,
      title: link.title,
      href: `/${url}#target-${link.id}`,
    })
  })
})

index
  .saveObjects(data, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => {
    console.log(objectIDs)
  })
