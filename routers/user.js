const express = require('express')
const User = require('../models/model.User')

const router = express.Router();

router.get('/api/users', (req, res) => {
    res.status(201).json({msg: 'User Endpoint'})
})

router.post('/api/users', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (error){
        res.status(400).send(error)
    }
})

router.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password)
        if (!user){
            return res.status(401).json({ error: 'Login failed! Check authentication credentials and try again!'})
        }
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch {
        res.status(400).send(error)
    }
})

module.exports = router