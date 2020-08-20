const express = require('express')
const Overlay = require('../models/model.Overlay');

const router = express.Router();

router.get('/api/overlay', () => {
    res.status(201).json({msg: 'Overlay Endpoint.'})
})

router.get('/api/overlay/getDefault', async (req, res) => {
    try {
        const defaultSettings = await Overlay.findOne({source: true})
        res.status(201).json({ defaultSettings })
    } catch (error){
        res.status(400).send(error)
    }
})

router.post('/api/overlay/addOverlay', async (req, res) => {
    try {
        const newOverlay = new Overlay(req.body);
        console.log(newOverlay)
        newOverlay.save();
        res.status(201).json({ newOverlay })
    } catch (error){
        res.status(401).send(error)
    }
})

module.exports = router;