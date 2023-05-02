export async function getArticles() {
  const data = await fetch(
    "http://dev.plugin/http.api/spipheadless/articles"
  ).then(response => response.json())

  return data.collection.items
}
