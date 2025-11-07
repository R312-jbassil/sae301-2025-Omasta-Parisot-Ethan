/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "file1934656231",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_svg",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // remove field
  collection.fields.removeById("file1934656231")

  return app.save(collection)
})
