const data = [
  {
    title: "justify-content",
    page: "Alignment",
    href: "/alignment#target-justify-content",
  },
  {
    title: "align-content",
    page: "Alignment",
    href: "/alignment#target-align-content",
  },
  {
    title: "justify-items",
    page: "Alignment",
    href: "/alignment#target-justify-items",
  },
  {
    title: "align-items",
    page: "Alignment",
    href: "/alignment#target-align-items",
  },
  {
    title: "justify-self",
    page: "Alignment",
    href: "/alignment#target-justify-self",
  },
  {
    title: "align-self",
    page: "Alignment",
    href: "/alignment#target-align-self",
  },
  {
    title: "Playground",
    page: "Alignment",
    href: "/alignment#target-playground",
  },
]

function filt(searchStr) {
  return data.filter((search) => search.title.match(new RegExp(searchStr)))
}

console.log(filt("a"))
