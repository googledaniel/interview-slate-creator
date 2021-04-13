const Question = require('../../models/questionModel');
const express = require('express');
const router = express.Router();

// Create Slate
router.post('/', async (req, res) => {
	try {
		const newSlate = await Question.create(req.body)
		res
			.status(200)
			.json(newSlate)

	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

//Read Slate
router.get('/:id', async (req, res) => {
	try {
		const foundSlate = await Question.findById(req.params.id)
		// await foundSlate.execPopulate('slate')
		res
			.status(200)
			.json(foundSlate)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

// Update Slate

router.put('/:id', async (req, res) => {
	try {
		const foundSlate = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true })
		// await foundSlate.execPopulate('slate')
		res
			.status(200)
			.json(foundSlate)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})


//Destroy - only for admin to use later, not in main app.

router.delete('/:id', async (req, res) => {
	try {
		const foundSlate = await Question.findByIdAndDelete(req.params.id)
		// await foundSlate.execPopulate('slate')
		res
			.status(200)
			.json(foundSlate)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

module.exports = router