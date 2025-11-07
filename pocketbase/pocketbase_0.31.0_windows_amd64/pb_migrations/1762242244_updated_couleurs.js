/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2333903970")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_340737475",
    "hidden": false,
    "id": "relation1928107129",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lunette_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_340737475",
    "hidden": false,
    "id": "relation782168294",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lunette_branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1007519717",
    "max": 0,
    "min": 0,
    "name": "libelle",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2333903970")

  // remove field
  collection.fields.removeById("relation1928107129")

  // remove field
  collection.fields.removeById("relation782168294")

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1007519717",
    "max": 0,
    "min": 0,
    "name": "couleur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
