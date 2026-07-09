import express from 'express';

import ReactangelCard from '../models/rectCradModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const cards = await ReactangelCard.find();
        res.json(cards);
    } catch(err){
        res.status(500).json({message:'Failed to fetch ReactangelCard'});
    }
});

export default router;