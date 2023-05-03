const API_URL = "http://dev.plugin/http.api/spipheadless"

export async function getCollection(collection, params = "") {
  const data = await fetch(API_URL + "/" + collection + params).then(response =>
    response.json()
  )

  return data.collection.items
}

export async function getMeta() {
  const data = await fetch(API_URL + "/meta").then(response => response.json())

  return data
}
