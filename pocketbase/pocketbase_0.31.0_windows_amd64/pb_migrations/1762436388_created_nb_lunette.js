/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation2375276105",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "user",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "number3634210957",
        "max": null,
        "min": null,
        "name": "count_lunettes",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_72739894",
    "indexes": [],
    "listRule": null,
    "name": "nb_lunette",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    u.id AS id,\n    u.id AS user,\n    COUNT(l.id) AS count_lunettes\nFROM users AS u\nLEFT JOIN lunette AS l ON l.createur = u.id\nGROUP BY u.id;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_72739894");

  return app.delete(collection);
})
