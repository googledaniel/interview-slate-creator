const Interview = require('../../models/interviewModel');
const express = require('express');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
	try {
		const newObject = await Interview.create(req.body)
		res
			.status(200)
			.json(newObject)

	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

//Read
router.get('/:id', async (req, res) => {
	try {
		const found = await Interview.findById(req.params.id)
		res
			.status(200)
			.json(found)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

// Update Slate

router.put('/:id', async (req, res) => {
	try {
		const found = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true })
		res
			.status(200)
			.json(found)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})


//Destroy

router.delete('/:id', async (req, res) => {
	try {
		const found = await Interview.findByIdAndDelete(req.params.id)
		res
			.status(200)
			.json(found)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

module.exports = router