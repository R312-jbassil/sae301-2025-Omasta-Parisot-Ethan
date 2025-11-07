/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation4208515716",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "createur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1486587212",
    "hidden": false,
    "id": "relation2414000814",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "materiau_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1486587212",
    "hidden": false,
    "id": "relation3549486641",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "materiau_branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // remove field
  collection.fields.removeById("relation4208515716")

  // remove field
  collection.fields.removeById("relation2414000814")

  // remove field
  collection.fields.removeById("relation3549486641")

  return app.save(collection)
})
