/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1486587212")

  // remove field
  collection.fields.removeById("number1208889792")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1486587212")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number1208889792",
    "max": null,
    "min": null,
    "name": "id_materiau",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
