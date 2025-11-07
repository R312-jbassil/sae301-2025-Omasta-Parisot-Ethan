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
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_vlit",
        "max": 0,
        "min": 0,
        "name": "nom_modele",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "json832574908",
        "maxSize": 1,
        "name": "materiaux_monture",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1842508067",
        "maxSize": 1,
        "name": "materiaux_branche",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_3349876951",
    "indexes": [],
    "listRule": null,
    "name": "lunette_materiau",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    l.id AS id,\n    l.nom_modele,\n    GROUP_CONCAT(DISTINCT mm.libelle) AS materiaux_monture,\n    GROUP_CONCAT(DISTINCT mb.libelle) AS materiaux_branche\nFROM lunette AS l\nLEFT JOIN materiau AS mm ON mm.id IN (\n    SELECT value FROM json_each(l.materiau_monture)\n)\nLEFT JOIN materiau AS mb ON mb.id IN (\n    SELECT value FROM json_each(l.materiau_branche)\n)\nGROUP BY l.id;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3349876951");

  return app.delete(collection);
})
