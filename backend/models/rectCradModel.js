import mongoose from "mongoose";

import rectCardSchema from '../schemas/rectangleCardSchema.js';

const RectangelCard = mongoose.model('RectangelCard', rectCardSchema);

export default RectangelCard;