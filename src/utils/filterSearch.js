export default function filterSearch(data, searchStr, maxItems = 5) {
  const templateRegex = `(^|\s|-)(${searchStr})`
  const filteredList = []
  let i = 0

  if (searchStr.length === 0) return []

  while (i < data.length && filteredList.length < maxItems) {
    const search = data[i]
    if (search.title.match(new RegExp(templateRegex))) filteredList.push(search)
    i++
  }
  return filteredList
}
