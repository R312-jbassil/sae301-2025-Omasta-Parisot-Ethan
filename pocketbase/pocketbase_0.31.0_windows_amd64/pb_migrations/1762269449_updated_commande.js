/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_782564964")

  // remove field
  collection.fields.removeById("number1043417832")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_782564964")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number1043417832",
    "max": null,
    "min": null,
    "name": "id_commande",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
