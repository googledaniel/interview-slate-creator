
const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
	scoreType: String,
	percentile: Number
}, {
	timestamps: true
})

const Score = model('Score', scoreSchema)

module.exports = Score;