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
        "id": "_clone_iQzy",
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
        "id": "number701282247",
        "max": null,
        "min": null,
        "name": "nb_commandes",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_2746673163",
    "indexes": [],
    "listRule": null,
    "name": "popularite_lunette",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    l.id AS id,\n    l.nom_modele,\n    COUNT(c.id) AS nb_commandes\nFROM lunette AS l\nLEFT JOIN commande AS c\n    ON l.id IN (SELECT value FROM json_each(c.lunette))\nGROUP BY l.id;\n",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2746673163");

  return app.delete(collection);
})
