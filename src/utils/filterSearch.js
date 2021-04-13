export default function filterSearch(data, searchStr, maxItems = 8) {
  const templateRegex = `(^|\s|-)(${searchStr})(.*)`
  const filteredList = []
  let i = 0

  if (searchStr.length === 0) return []

  while (i < data.length && filteredList.length < maxItems) {
    const search = data[i]
    const match = search.title.match(new RegExp(templateRegex, "i"))
    if (match) {
      const matchedSearch = { ...search }
      matchedSearch.title = search.title.split(new RegExp(templateRegex, "i"))
      filteredList.push(matchedSearch)
    }
    i++
  }
  return filteredList
}
