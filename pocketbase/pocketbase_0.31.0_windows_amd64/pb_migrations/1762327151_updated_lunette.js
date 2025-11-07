/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // remove field
  collection.fields.removeById("date2497440978")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date2497440978",
    "max": "",
    "min": "",
    "name": "date_creation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
