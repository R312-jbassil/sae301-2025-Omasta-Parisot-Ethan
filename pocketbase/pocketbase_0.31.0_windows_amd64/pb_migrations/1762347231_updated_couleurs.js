/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2333903970")

  // update collection data
  unmarshal({
    "name": "couleur"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2333903970")

  // update collection data
  unmarshal({
    "name": "couleurs"
  }, collection)

  return app.save(collection)
})
