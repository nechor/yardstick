'use strict'

const Schema = use('Schema')

class CandidatesTableSchema extends Schema {

  up () {
    this.create('candidates', (table) => {
      table.increments()
      table.string('name')
      table.string('lastname')
      table.string('cvfile')
      table.timestamps()
    })
  }

  down () {
    this.drop('candidates')
  }

}

module.exports = CandidatesTableSchema
