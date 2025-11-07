/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // remove field
  collection.fields.removeById("text345886070")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_782564964",
    "hidden": false,
    "id": "relation903096364",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "commandes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2333903970",
    "hidden": false,
    "id": "relation345886070",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "couleur_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2333903970",
    "hidden": false,
    "id": "relation1223666153",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "couleur_branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text345886070",
    "max": 0,
    "min": 0,
    "name": "couleur_monture",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation903096364")

  // remove field
  collection.fields.removeById("relation345886070")

  // remove field
  collection.fields.removeById("relation1223666153")

  return app.save(collection)
})
