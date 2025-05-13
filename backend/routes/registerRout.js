const express = require('express');
const router = express.Router();
const { User, validateCreateUser } = require('../models/userM.js')

//get all users for dasboard
router.get('/allusers', async (req, res) => {
    try {
        const allUsers = await User.find()
        res.json({ action: 'success', count: allUsers.length, data: allUsers })
    } catch (err) {
        res.json({ message: err.message })
    }
})

//get single user
router.get('/:id', async (req, res) => {
    const product = await User.findById(req.params.id)
    if (product) {
        res.json({ action: 'success', data: product })
    } else {
        res.json({ message: 'Product not found' })
    }
})

//login
router.post('/', async (req, res) => {
    const { error } = validateCreateUser(req.body)
    if (error) {
        res.json({ message: error.details[0].message })
    }
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.json({ message: 'this email is already used' })
    }
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const newUser = await user.save()
        res.json(newUser)
    } catch (err) {
        res.json({ message: err.message })
    }
})
module.exports = router;
