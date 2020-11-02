const express = require('express')
const router = express.Router()

const {authenticateUser} = require('../app/middlewares/authenticate')

const moviesController =require('../app/controllers/moviesController')
const ticketsController = require('../app/controllers/ticketsController')




router.post('/movies/create', moviesController.create)
router.get('/movies/all', moviesController.list)




router.get('/:movieid/tickets/all', ticketsController.list)
router.post('/movies/:movieid/create', ticketsController.create)
router.get('/api/tickets/:id', ticketsController.show)
router.put('/api/tickets/:id', ticketsController.update)
router.delete('/api/tickets/:id', ticketsController.destroy)

module.exports = router