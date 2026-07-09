import dotenv from 'dotenv';
dotenv.config({ quiet: true });

import express, { urlencoded } from 'express';
const app = express();
import mongoose from 'mongoose';

import cors from 'cors';

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

import SquareCard from './models/sqrCardModel.js';
import RectangelCard from './models/rectCradModel.js';

import sqrCardData from './Data/sqrCardData.js';
import rectCardData from './Data/rectCardData.js';

import sqrCardRoute from './Routes/sqrCardRoute.js';
import rectCardRoute from './Routes/rectCardRoute.js';


app.use('/sqr_card_images', express.static('sqr_card_images'));
app.use('/rect_card_images', express.static('rect_card_images'));



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/sqrcards', sqrCardRoute);
app.use('/api/rectcards', rectCardRoute);









app.get('/', (req, res) => {
    res.send('Working');
})
mongoose.connect(MONGO_URL)
    .then(async () => {
        console.log('Successfully connected');


        // await SquareCard.deleteMany();
        // await SquareCard.insertMany(sqrCardData);

        // await RectangelCard.deleteMany();
        // await RectangelCard.insertMany(rectCardData);

        // console.log('All card data inserted');



        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        })
    }).catch((err) => {
        console.log(err);
    })