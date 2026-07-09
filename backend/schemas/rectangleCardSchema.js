import mongoose from "mongoose";

const rectCardSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        products:[
            {
                image:{
                    type:String,
                },
            }
        ],
        linkText:String,
    }
);

export default rectCardSchema;