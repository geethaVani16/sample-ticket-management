const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ticketSchema = new Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true, 
    },
    numberOfTickets:{
        type: String, 
        required: true
    },
    showTime: {
        type: String,
        required: true,
    },
    showPlace:{
        type: String,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket 