/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_340737475",
    "hidden": false,
    "id": "relation864396863",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "lunette_crees",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("relation864396863")

  // remove field
  collection.fields.removeById("relation903096364")

  return app.save(collection)
})
