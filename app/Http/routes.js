'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/cand/list', 'CandidateController.list');

Route.get('/cand/create', 'CandidateController.create');

Route.get('/cand/:id', 'CandidateController.show');

Route.get('/cand/:id/edit', 'CandidateController.edit');

Route.post('/cand/store', 'CandidateController.store');

Route.post('/cand/:id/update', 'CandidateController.update');

//Route.on('/cand/create').render('cand_create')
