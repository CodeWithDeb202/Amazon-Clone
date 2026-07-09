import mongoose from "mongoose";

import sqrCardSchema from '../schemas/squareCardSchema.js';

const SquareCard = mongoose.model('SquareCard', sqrCardSchema);

export default SquareCard;