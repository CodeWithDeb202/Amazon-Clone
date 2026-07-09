import mongoose from "mongoose";

const sqrCardSchema = new mongoose.Schema(
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
                name:{
                    type:String,
                }
            }
        ],
        linkText:String,
    }
);

export default sqrCardSchema;