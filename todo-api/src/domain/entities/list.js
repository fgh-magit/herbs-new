const { entity, id, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')

const List =
        entity('List', {
          id: id(Number),
          title: field(String),
          description: field(String)
        })

module.exports =
  herbarium.entities
    .add(List, 'List')
    .entity
