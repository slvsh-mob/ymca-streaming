const express = require('express')
const Class = require('../models/model.Class');

const router = express.Router();

router.get('/classes', (req, res) => {
    res.status(201).json({msg: 'Classes endpoint.'})
})

router.post('/api/classes/addOne', async (req, res) => {
    try{
        const streamClass = new Class(req.body);
        await streamClass.save();
        res.status(201).json({ class: streamClass })
    } catch (error){
        res.status(404).json({ error })
    }
})

router.get('/api/classes/getAll', async (req, res) => {
    try {
        const streamClasses = await Class.find({});
        res.status(201).json({class: streamClasses})
    }
    catch (error){
        res.status(404).send(error)
    }
})

router.get('/api/classes/getOne', async (req, res) => {
    try {
        const name = req.query.name;
        const streamClass = await Class.findOne({ name })
        res.status(201).json({class: streamClass})
    } catch (error){
        res.status(404).send(error)
    }
})

router.get('/api/classes/getDefault', async (req, res) => {
    try {
        const streamClass = await Class.findOne({ current: true })
        res.status(201).json({class: streamClass})
    } catch (error){
        res.status(404).send(error)
    }
})

//Deprecated
router.put('/api/classes/updateCurrent', async (req, res) => {
    try {
        const { name } = req.body;
        let streamClass = await Class.update({ current: true }, { $set: {current: false} })
        streamClass = await Class.update({ name }, { $set: {current: true}});
        res.status(201).json({ streamClass })
    } catch (error){
        res.status(404).send(error)
    }
})

module.exports = router;