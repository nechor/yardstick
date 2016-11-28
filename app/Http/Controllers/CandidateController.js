'use strict'

const Candidate = use('App/Model/Candidate')
const Database = use('Database')

class CandidateController {
  * list (request, response) {
      const candidates = yield Candidate.all()
      yield response.sendView('cand_list', { candidates: candidates.toJSON() })
    }


  * show (request, response) {
      const candidate = yield Database
        .from('candidates')
        .where('id', request.param('id'))
        .first()
      console.log("kandydat", candidate)
      yield response.sendView('cand_show', { candidate })
    }

  * edit (request, response) {
      const candidate = yield Database
        .from('candidates')
        .where('id', 1)
      yield response.sendView('cand_edit', { x: "aaaa" })
    }

}

module.exports = CandidateController
