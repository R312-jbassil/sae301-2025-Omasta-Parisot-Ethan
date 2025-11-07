/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // remove field
  collection.fields.removeById("number1535241049")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number1535241049",
    "max": null,
    "min": null,
    "name": "id_lunette",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
