const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/Users');
const Contact = require('../models/Contact');

//  @ route Get api/contact
//  Get all users contact
// Private
router.get('/', auth, async (req, res) => {
	try {
		const contact = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.json(contact);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

router.post(
	'/',
	[
		auth,
		[
			check('title', 'Title is Required').not().notEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, price, rooms, location, type } = req.body;

		try {
			const newContact = new Contact({
				title,
				price,
				rooms,
				location,
				type,
				user     : req.user.id
			});

			const contact = await newContact.save();
			res.json(contact);
		} catch (error) {
			console.log(error);
			res.status(500).send('Server Error');
		}
	}
);

router.put('/:id', auth, async (req, res) => {
	const { title, price, room, location, type } = req.body;

	const contactField = {};
	if (title) contactField.title = title;
	if (price) contactField.title = price;
	if (rooms) contactField.title = room;
	if (location) contactField.title = location;
	if (type) contactField.title = type;

	try {
		let contact = await Contact.findById(req.params.id);
		if (!contact) return res.status(404).json({ msg: 'Contact not found' });

		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactField }, { new: true });

		res.json(contact);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		let contact = await Contact.findById(req.params.id);
		if (!contact) return res.status(404).json({ msg: 'Contact not found' });

		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Contact.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Contact Removed' });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
