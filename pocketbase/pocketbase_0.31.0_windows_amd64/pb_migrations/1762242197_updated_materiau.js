/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1486587212")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_340737475",
    "hidden": false,
    "id": "relation2650544780",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lunette_materiau",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1486587212")

  // remove field
  collection.fields.removeById("relation2650544780")

  return app.save(collection)
})
