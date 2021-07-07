const db = require('../data/db-config')

module.exports = {
  find,
  save,
  findById,
  update,
  findByEmail,
  remove
}

function find () {
  return db('nannies')
}

function update (id, parent) {
  return db('nannies').where('nanny_id', Number(id)).update(parent)
}

function save (nanny) {
  return db('nannies').insert(nanny).then(ids => findById(ids[0]))
}

function findById (id) {
  return db('nannies').where({ nanny_id: Number(id) }).first()
}

function remove (id) {
  return db('nannies').where({ nanny_id: Number(id) }).del()
}

function findByEmail (email) {
  return db('nannies').where({ email }).first()
}
