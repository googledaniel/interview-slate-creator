const Slate = require('../../models/slateModel');
const express = require('express');
const router = express.Router();



//Read Interview - how do I make it use the index for each :id?
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


module.exports = router