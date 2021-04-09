const Slate = require('../../models/slateModel');
const express = require('express');
//remaned slateRouter to just router
const router = express.Router();

// Create Slate
router.post('/', async (req, res) => {
	try {
		const newSlate = await Slate.create(req.body)
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
		const foundSlate = await Slate.findById(req.params.id)
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
		const foundSlate = await Slate.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
		const foundSlate = await Slate.findByIdAndDelete(req.params.id)
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