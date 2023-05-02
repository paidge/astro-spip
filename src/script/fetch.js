export async function getArticles() {
  const data = await fetch(
    "http://dev.plugin/http.api/spipheadless/articles"
  ).then(response => response.json())

  const articles = data.collection.items.map(item => {
    let obj = {}
    item.data.forEach(el => {
      obj[el.name] = el.value
    })

    return obj
  })

  return articles
}
