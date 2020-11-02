
const Movie = require('../models/movie')


module.exports.create = (req, res) => {
    const body = req.body
    const movie = new Movie(body)
    movie.save()
        .then(movie => res.json(movie))
        .catch(err => res.json(err))
}


module.exports.list = (req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
}