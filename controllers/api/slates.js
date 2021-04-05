const Slate = require('../../models/slateModel');
const express = require('express');
//remaned slateRouter to just router
const router = express.Router();


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

//Read All Slates for Dash

// router.get('/dashboard', async (req, res) => {
// 	try {
// 		const foundSlates = await Slate.find({})
// 		res
// 			.status(200)
// 			.json(foundSlates)
// 	} catch (error) {
// 		res
// 			.status(400)
// 			.json(error)
// 	}
// })

//Update

//Destroy


module.exports = router