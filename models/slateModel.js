const { Schema, model } = require('mongoose');

const slateSchema = new Schema({
	candidateName: String,
	codingLanguage: String,
	domain: Array,
	level: Number,
	questions: []
}, {
	timestamps: true
})
// Do I need to break Slate into a variable or just export SlateSchema?
const Slate = model('Slate', slateSchema)

module.exports = Slate;