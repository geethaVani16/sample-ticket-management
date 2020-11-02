const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    movieName: {
        type: String,
        required: [true, 'name is required']
    },
    language:{
        type:String,
        required:[true,'name is required']
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    }
})


const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie 