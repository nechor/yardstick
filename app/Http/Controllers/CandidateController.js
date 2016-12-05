'use strict'

const Candidate = use('App/Model/Candidate')
const Database = use('Database')

class CandidateController {

  * list (request, response) {
      const candidates = yield Database.select('*').from('candidates').orderBy('lastname', 'asc')
      yield response.sendView('cand/list', { candidates: candidates})
    }

  * show (request, response) {
      const candidate = yield Candidate.query()
        .where('id', request.param('id'))
        .first()
      //console.log("kandydat", candidate)
      yield response.sendView('cand/show', { candidate })
    }

  * edit (request, response) {
    const candidate = yield Candidate.query()
      .where('id', request.param('id'))
      .first()
    //console.log("kandydat", candidate)
    //console.log("QQQQQQQQQQQQ", candidate)
    yield response.sendView('cand/edit', { candidate })
    }

  * create (request, response) {
      const candidate = yield Database
        .from('candidates')
        .where('id', 1)
      yield response.sendView('cand/create')
    }

  * delete (request, response) {
    const candidate = yield Candidate.findBy('id', request.param('id'))
    yield candidate.delete()
    response.redirect('/cand/list')
    }

  //zapisanie nowego kolesia
  * store (request, response) {
      const candidateData = request.only('name', 'lastname')
      yield Candidate.create(candidateData)
      response.redirect('/cand/list')
    }

  //zapisanie po edycji
  * update (request, response) {
    const candidate = yield Candidate.query()
      .where('id', request.param('id'))
      .first()
    const candidateData = request.only('name', 'lastname')
    candidate.name = candidateData.name
    candidate.lastname = candidateData.lastname
    const plik = request.file('cvFile', {
        maxSize: '2mb',
        allowedExtensions: ['txt']
    })
    console.log("*** Plik: " + plik)
    yield candidate.save()
    response.redirect('/cand/list')
    }
}

module.exports = CandidateController
