import express from 'express';

import SquareCard from '../models/sqrCardModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const cards = await SquareCard.find();
        res.json(cards);
    } catch(err){
        res.status(500).json({message:'Failed to fetch SquareCard'});
    }
});

export default router;